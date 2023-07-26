from flask import Flask, jsonify, request, send_file
from flask_cors import CORS,cross_origin
import json, os, base64
from datetime import datetime 
from pymongo import MongoClient
import urllib 
from bson.json_util import dumps
import config

username = urllib.parse.quote_plus(config.USERNAME)
password = urllib.parse.quote_plus(config.PASSWORD)
cluster = urllib.parse.quote_plus(config.CLUSTER)
database = urllib.parse.quote_plus(config.DATABASE)

url = "mongodb+srv://{}:{}@{}/{}?retryWrites=true&w=majority".format(username, password, cluster, database)

client = MongoClient(url)
db = client.get_database('fire')

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
@cross_origin(support_credentials=True)
def hello():
    return "Welcome to FIRE APP by Team SPARK"

""" Workspace Related API's """
@app.route('/addWorkspace', methods=['POST'])
@cross_origin(support_credentials=True)  
def addWorkspace(): 
    workspace = request.get_json(silent=True)
    records = db.workspace
    response = records.insert_one(workspace)
    print(response)
    return response

if __name__ == "__main__":
    app.run(port=5000, debug=True)
