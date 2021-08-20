import { useContext } from "react";
import Context from "../../context.js";

import { Box } from "@material-ui/core";

import "./styles.css";

function Papers() {
  const value = useContext(Context);
  return (
    <Box textAlign="justify">
    <section id="Papers">
      <h1>Papers</h1>
      <ul>
        <li>Publications</li>
          <ul>
            {
              value.info.papers.publications.map(function(e,i){
                return (
                  <li key={i}>{e.author}. <a href={e.url} target="_blank" rel="noreferrer"><b>{e.title}</b></a>. {e.publisher}, {e.pages} ({e.year}). <br/> <a href={e.pdf} target="_blank" rel="noreferrer">PDF</a></li>
                )
              })
            }
          </ul>
          <li>Preprints</li>
            <ul>
              {
                value.info.papers.preprints.map(function(e,i){
                  return (
                    <li key={i}>{e.author}. <a href={e.url} target="_blank" rel="noreferrer"><b>{e.title}</b></a> ({e.year}). <br/> <a href={e.pdf} target="_blank" rel="noreferrer">PDF</a></li>
                  )
                })
              }
            </ul>
      </ul>
    </section>
    </Box>
  );
}

export default Papers;
