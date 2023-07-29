import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Home/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Spinner from "../Spinner";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TransferList from "./TransferList";
import ServiceCall from "../../Service/ServiceCall";
import AssistantIcon from "@material-ui/icons/Assistant";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Workspace() {
  const classes = useStyles();

  const [ideaPrompt, setIdeaPrompt] = useState([
    "Please help in ebalorating the idea by looking into the existing industry and market trends in 5 to 6 lines",
    "Prompt2",
  ]);

  const [loader, setLoader] = React.useState(false);
  const [ideaDetails, setIdeaDetails] = useState(
    "Please add your Idea here ..."
  );
  const [elaboratedIdea, setElaboratedIdea] = useState(
    "FIRE GenAI generated idea drafting soon ... "
  );

  const [prompt, setPrompt] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIdeaField = (event) => {
    setIdeaDetails(event.target.value);
  };

  function handleIdeaDetails() {
    console.log(ideaDetails);
    // const formData = new FormData();
    // formData.append("ideaDetails", ideaDetails);
    // formData.append("ideaPrompt", ideaPrompt[0])
    setLoader(true);
    ServiceCall.generateIdeaDetails(ideaDetails).then((response) => {
      console.log(response.data);
      setElaboratedIdea(response.data.data);
      setLoader(false);
    });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {loader && <Spinner></Spinner>}
      <Header title="FIRE powered by Generative AI" />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {
            "Do you wish to customise your Prompt? Prompt Engineering is the key to everything!"
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="outlined-multiline-static"
              label="Your Idea"
              multiline
              rows={6}
              fullWidth
              value={prompt}
              variant="outlined"
              onChange={(e) => handleIdeaField(e)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <main>
        {" "}
        <Container maxWidth align="center">
          <Grid container spacing={3}>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={2}>
                      <EmojiObjectsIcon
                        color="secondary"
                        fontSize="medium"
                      ></EmojiObjectsIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6" gutterBottom>
                        If you have an Idea then don't let an idiot talk you out
                        of it!
                      </Typography>
                    </Grid>
                  </Grid>
                  <TextField
                    id="outlined-multiline-static"
                    label="Your Idea"
                    multiline
                    rows={12}
                    fullWidth
                    value={ideaDetails}
                    variant="outlined"
                    onChange={(e) => handleIdeaField(e)}
                  />
                  <br /> <br />
                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={2}>
                      <AssistantIcon
                        color="secondary"
                        fontSize="large"
                        onClick={handleClickOpen}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleIdeaDetails}
                      >
                        Enhance IDEA using FIRE-AI
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={2}>
                      <WbIncandescentIcon color="secondary" fontSize="medium" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6" gutterBottom>
                        Elaborated version of your idea using FIRE Generative AI
                      </Typography>
                    </Grid>
                  </Grid>
                  <TextField
                    id="outlined-multiline-static"
                    label="Elaborated version of Your Idea"
                    multiline
                    rows={12}
                    fullWidth
                    value={elaboratedIdea}
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="primary">
                    Update
                  </Button>
                </Paper>
              </Grid>
            </Grid>
            <br /> <br />
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <EmojiObjectsIcon></EmojiObjectsIcon>
                  <Typography variant="h6" gutterBottom>
                    What do you think is the Big Elephant in the room?
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Your problem statement"
                    multiline
                    rows={12}
                    fullWidth
                    defaultValue="Idea here ..."
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="secondary">
                    Enhance IDEA using FIRE-AI
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <EmojiObjectsIcon></EmojiObjectsIcon>
                  <Typography variant="h6" gutterBottom>
                    Elaborated version of your Problem Statement using
                    Generative AI
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Elaborated version of Problem statement"
                    multiline
                    rows={12}
                    fullWidth
                    defaultValue="Idea here ..."
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="primary">
                    Update
                  </Button>
                </Paper>
              </Grid>
            </Grid>
            <br /> <br />
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Markert Research of the Problem
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    (GenerativeAI)
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Your problem statement"
                    multiline
                    rows={12}
                    fullWidth
                    defaultValue="Idea here ..."
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="primary">
                    Update
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Key Problems Identified
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    (GenerativeAI)
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Elaborated version of Problem statement"
                    multiline
                    rows={12}
                    fullWidth
                    defaultValue="Idea here ..."
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="primary">
                    Update
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Stakeholders & User Personas
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    (GenerativeAI)
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Elaborated version of Problem statement"
                    multiline
                    rows={12}
                    fullWidth
                    defaultValue="Idea here ..."
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="primary">
                    Update
                  </Button>
                </Paper>
              </Grid>
            </Grid>
            <br /> <br />
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <EmojiObjectsIcon></EmojiObjectsIcon>
                  <Typography variant="h6" gutterBottom>
                    Propose your solution!
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Your Proposed Solution"
                    multiline
                    rows={12}
                    fullWidth
                    defaultValue="Idea here ..."
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="secondary">
                    Enhance Proposed Solution using FIRE-AI
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <WbIncandescentIcon></WbIncandescentIcon>
                  <Typography variant="h6" gutterBottom>
                    Elaborated version of your proposed solution using
                    Generative AI
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Elaborated version of Your Idea"
                    multiline
                    rows={12}
                    fullWidth
                    defaultValue="Idea here ..."
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="primary">
                    Update
                  </Button>
                </Paper>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={6}>
                <Button
                  style={{ color: "white", backgroundColor: "black" }}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Please choose Product Modules for the idea generated by
                  FIRE-AI
                </Button>
                <TransferList />
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Code Generation
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    (GenerativeAI)
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Code Generation"
                    multiline
                    rows={12}
                    fullWidth
                    defaultValue="Idea here ..."
                    variant="outlined"
                  />
                  <br /> <br />
                  <Button fullWidth variant="contained" color="primary">
                    Update
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
