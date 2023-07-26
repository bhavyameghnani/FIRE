import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Spinner from "../Spinner";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  root: {
    maxWidth: 1055,
  },
  media: {
    height: 140,
  },
}));

export default function Home() {
  const classes = useStyles();

  const [username, setusername] = React.useState();
  const [loader, setLoader] = React.useState(false);
  const [summary, setsummary] = React.useState("No Record Found");
  const [likedislike, setlikedislike] = React.useState("No Record Found");
  const [personality, setpersonality] = React.useState("No Record Found");
  const [keywords, setkeywords] = React.useState("No Record Found");

  function handleCategory() {
    setLoader(true);
    axios
      .get("http://localhost:5000/gettweets?user_id=" + username)
      .then((data) => {
        console.log(data.data.summary);
        setsummary(data.data.summary);
        setlikedislike(data.data.likes);
        setpersonality(data.data.personality);
        setkeywords(data.data.keywords);
        setLoader(false);
      });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {loader && <Spinner></Spinner>}
      {/* <header className="App-header"> */}
      {/* <Container maxWidth="lg"> */}
      <Header title="FIRE powered by GenAI" />
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />

        <TextField
          id="standard-basic"
          variant="outlined"
          multiline
          style={{ margin: 40, width: 700 }}
          placeholder="FIRE Search"
          onChange={(e) => setusername(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon onClick={() => handleCategory()} /> {/*  */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </main>
      {/* </Container> */}
      <br />

      <Container align="center">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.cloud4c.com/sg/sites/sg/files/2023-01/fundamentals-of-data-analytics-as-a-service-banner.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {username}
              </Typography>

              <Typography variant="h6" component="h2" align="left">
                Summary:
              </Typography>
              <Typography align="left">
                {summary &&
                  summary
                    .split("\n")
                    .map((row, index) => <p key={row}>{row}</p>)}
              </Typography>

              <br />
              <Typography variant="h6" component="h2" align="left">
                Likes & Dislikes:
              </Typography>
              <Typography align="left">
                {likedislike &&
                  likedislike
                    .split("\n")
                    .map((row, index) => <p key={row}>{row}</p>)}
              </Typography>

              <br />
              <Typography variant="h6" component="h2" align="left">
                Personality:
              </Typography>
              <Typography align="left">
                {personality &&
                  personality
                    .split("\n")
                    .map((row, index) => <p key={row}>{row}</p>)}
              </Typography>

              <br />
              {/* <Typography variant="h6" component="h2" align="left">
                Keywords:
              </Typography> */}
              <Typography align="left">
                {/* <Grid item container >
              {keywords && keywords.split(",").map((data,index)=>
                (
                  
                    <span style={{padding:'5px'}}>
                    <Chip
                      label={data}
                      
                      className={classes.chip}
                    />
                  </span>
                ))}
                </Grid> */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </Container>
      <br />
    </React.Fragment>
  );
}

const mainFeaturedPost = {
  title: "FIRE: From Ideas to Reality",
  description:
    "Innovation Portal revolutionizing ideation to development adoption process by leveraging the power of Generative AI. ",
  image:
    "https://www.nibm.lk/wp-content/uploads/2021/10/banner-vishwapasla-4.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
};