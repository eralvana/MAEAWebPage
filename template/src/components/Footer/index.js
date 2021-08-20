import { useContext } from "react";
import Context from "../../context.js";

import { Box } from "@material-ui/core";

import "./styles.css";

function Footer() {
  const value = useContext(Context);
  return (
    <footer>
      <Box textAlign="center">
        <ul>
          <li display="inline"><a href={value.info.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={value.info.links.twitter} target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href={value.info.links.stackoverflow} target="_blank" rel="noreferrer">Stackoverflow</a></li>
          <li><a href={value.info.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
        <div>{value.info.name} &copy; 2021</div>
      </Box>
    </footer>
  );
}

export default Footer;
