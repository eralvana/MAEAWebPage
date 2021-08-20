import { useContext } from "react";
import Context from "../../context.js";

import { Typography , Box } from "@material-ui/core";

import Nav from "../Nav";

import "./styles.css";

function Header() {
  const value = useContext(Context);
  return (
    <Box component="header" textAlign="center">
      <Typography variant="h4">
          {value.info.name}
      </Typography>
      <Nav/>
    </Box>
  );
}

export default Header;
