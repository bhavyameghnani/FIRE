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

  const [username, setusername] = React.useState();
  const [loader, setLoader] = React.useState(false);
  const [files, setFiles] = useState();
  const [file, setFile] = useState();

  const handleFileChange = (event) => {
    // const file = event.target.files;
    // console.log("file 1",file)
    setFile(event);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {loader && <Spinner></Spinner>}
      <Header title="FIRE powered by GenAI" />

      <main>
        {" "}
        <Container maxWidth align="center">
          <hr />
          <Grid container spacing={3}>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <EmojiObjectsIcon></EmojiObjectsIcon>
                  <Typography variant="h6" gutterBottom>
                    Have an Idea? Please feel free to FIRE it up!
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Your Idea"
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
                  <WbIncandescentIcon></WbIncandescentIcon>
                  <Typography variant="h6" gutterBottom>
                    Elaborated version of your idea using Generative AI
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
