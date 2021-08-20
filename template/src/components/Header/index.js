import { useContext } from "react";
import Context from "../../context.js";

import { Typography , Box } from "@material-ui/core";

import Nav from "../Nav";

import "./styles.css";

function Header() {
  const value = useContext(Context);
  return (
    <header>
      <Typography variant="h4">
        <Box textAlign="center">
          {value.info.name}
        </Box>
      </Typography>
      <Nav/>
    </header>
  );
}

export default Header;
