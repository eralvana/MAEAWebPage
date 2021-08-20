import { useContext } from "react";
import Context from "../../context.js";

import { Typography, Box } from "@material-ui/core";

import "./styles.css";

function Cvu() {
  const value = useContext(Context);
  return (
    <Box component="section" id="Cvu" textAlign="justify">
      <Typography variant="h5">CVU</Typography>
      <ul>
        {
          value.info.cvu.map(function(e,i){
            return (
              <li key={i}>{e.grade} - {e.institution}. {e.period}. {e.director}. <br/>
              {
                e.pdf ? <> <a href={e.pdf} target="_blank" rel="noreferrer"><b>PDF</b></a>.</> : ""
              }
              </li>
            )
          })
        }
      </ul>
    </Box>
  );
}

export default Cvu;
