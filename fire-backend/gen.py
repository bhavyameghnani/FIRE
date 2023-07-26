import streamlit as st
from dotenv import load_dotenv
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings, HuggingFaceInstructEmbeddings
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from htmlTemplates import css, bot_template, user_template
from langchain.llms import HuggingFaceHub
import os
from flask import Flask,request,jsonify
from flask_cors import CORS, cross_origin
import json
import base64
app = Flask(__name__)

cors = CORS(app , resources={r"/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*"}})

os.environ["OPENAI_API_KEY"] = ''
def get_pdf_text(pdf_files):    
    text = ""
    for row in pdf_files:
        pdf_reader = PdfReader(row)
        for page in pdf_reader.pages:
            
            text += page.extract_text()
    return text


def get_text_chunks(text):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    chunks = text_splitter.split_text(text)
    return chunks


def get_vectorstore(text_chunks):
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    return vectorstore


def get_conversation_chain(vectorstore):
    llm = ChatOpenAI(temperature=0.7,model_name='gpt-3.5-turbo')
    memory = ConversationBufferMemory(
        memory_key='chat_history', return_messages=True)
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    return conversation_chain


@app.route('/getanswer',methods=["POST"])
def getanswer():
    user_queries=json.loads(request.form['user_question'])
    file_name=[]
    for file in  request.files.getlist('file'):
        file_name.append(file.filename)
        file.save(file.filename)
    all_result=[]
    i=1
    pdf_text=get_pdf_text(file_name)
    print(len(pdf_text))
    text_chunks=get_text_chunks(pdf_text)
    vectorstore=get_vectorstore(text_chunks)
    response=get_conversation_chain(vectorstore)
    print(response)
    for user_query in user_queries:
        if user_query['checked']: 
            print("-------------------------------")
            question=user_query['prompt']
            
            result = response({"question": question})
            all_result.append({'prompt':question,'answer':result['answer'],'question_no':i})
        i=i+1
    return {'status':'success','data':all_result}


@app.route('/get_pdf_file',methods=["GET"])
def get_pdf_file():
    file_name=request.args.get('file_name')    
    with open(file_name,"rb") as pdf_file:
        encoded_string=base64.b64encode(pdf_file.read()).decode('utf-8')
    return jsonify({'status':'success','pdf_file':encoded_string})

if __name__ == '__main__':
    app.run(debug=True)
