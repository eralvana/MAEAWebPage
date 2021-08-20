import { useContext } from "react";
import Context from "../../context.js";

import { Box } from "@material-ui/core";

import "./styles.css";

function Teaching() {
  const value = useContext(Context);
  return (
    <Box textAlign="justify">
    <section id="Teaching">
      <h1>Teaching</h1>
      <ul>
        {
          value.info.teaching.map(function(e,i){
            return (
              <li key={i}>{e.position}. {e.institution},  {e.placeanddate}.
              </li>
            )
          }
        )
      }
      </ul>
    </section>
    </Box>
  );
}

export default Teaching;
