import React, { useContext } from "react";
import Context from "../../context.js";

import { Typography , Box } from "@material-ui/core";

import "./styles.css";

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
  <React.Fragment key={j}> <a href={f} target="_blank" rel="noreferrer">Video{k}</a>{puntuation}</React.Fragment>
)};
function Talk(e,i){
  let author = "I did present the talk ";
  if (e.author.length !== 0) {
    author = "In collaboration with " + e.author + " we presented "
  }
  return (
    <li key={i}>{author} <b>{e.title}</b> at the <em>{e.event}</em> in {e.date}. <br/>
    {
      e.page ? <> <a href={e.page} target="_blank" rel="noreferrer"><b>Page</b></a>.</> : ""
    }
    <b>
    {
      e.video.map(Video)
    }
    </b>
    </li>
  )
}

function Talks() {
  const value = useContext(Context);
  return (
    <Box component="section" id="Talks" textAlign="justify">
    <Typography variant="h5">Talks</Typography>
      <ul>
        {
          value.info.talks.map(Talk)
        }
      </ul>
    </Box>
  );
}

export default Talks;
