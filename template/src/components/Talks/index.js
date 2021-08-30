import React, { useContext } from "react";
import Context from "../../context.js";

import { Typography , Box } from "@material-ui/core";

import "./styles.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  anchor: props => ({
    color: props.flag ? theme.palette.primary.main : theme.palette.secondary.main,
    '&:hover': {
      color: props.flag ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText,
    },
  })
}));

function Talks() {
  const value = useContext(Context);
  const classes = useStyles({flag:value.flag});

  function Video(f,j,a){
    let k = "";
    let puntuation = ".";
    if (j !== 0){
      k = " " + j
    }
    if (j !== a.length-1){
      puntuation = ", "
    }
  return(
    <React.Fragment key={j}> <a href={f} target="_blank" rel="noreferrer" className={classes.anchor}>Video{k}</a>{puntuation}</React.Fragment>
  )};
  function Talk(e,i){
    let author = "I did present the talk ";
    if (e.author.length !== 0) {
      author = "In collaboration with " + e.author + " we presented "
    }
    return (
      <li key={i}>{author} <b>{e.title}</b> at the <em>{e.event}</em> in {e.date}. <br/>
      {
        e.page ? <> <a href={e.page} target="_blank" rel="noreferrer" className={classes.anchor} ><b>Page</b></a>.</> : ""
      }
      <b>
      {
        e.video.map(Video)
      }
      </b>
      </li>
    )
  }

  return (
    <Box component="section" id="Talks" textAlign="justify">
    <Typography variant="h5">
      <Box textAlign="center">Talks</Box>
    </Typography>
      <ul>
        {
          value.info.talks.map(Talk)
        }
      </ul>
    </Box>
  );
}

export default Talks;
