import { useContext } from "react";
import Context from "../../context.js";

import { Typography , Box } from "@material-ui/core";

import "./styles.css";

function Software() {
  const value = useContext(Context);
  return (
    <Box component="section" id="Software" textAlign="justify">
      <Typography variant="h5">Software</Typography>
      <ul>
        {
          value.info.software.map(function(e,i){
            return (
              <li key={i}>In collaboration with {e.author}, we developing {e.name} module (written in Python) for {e.for}. ({e.year}) <br/> <a href={e.github} target="_blank" rel="noreferrer"><b>GitHub</b></a>, <a href={e.pipy} target="_blank" rel="noreferrer"><b>Pipy</b></a>, <a href={e.pdf} target="_blank" rel="noreferrer"><b>PDF</b></a>.</li>
            )
          })
        }
      </ul>
    </Box>
  );
}

export default Software;
