import { useContext } from "react";
import Context from "../../context.js";

import { Typography , Box } from "@material-ui/core";

import "./styles.css";

function Teaching() {
  const value = useContext(Context);
  return (
    <Box component="section" id="Teaching" textAlign="justify">
      <Typography variant="h5">
        <Box textAlign="center">Teaching</Box>
      </Typography>
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
    </Box>
  );
}

export default Teaching;
