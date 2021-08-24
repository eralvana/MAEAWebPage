import React, { useState } from "react";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Context from "../../context.js";

import info from "../../info.json";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Papers from "../Papers";
import Software from "../Software";
import Talks from "../Talks";
import Cvu from "../Cvu";
import Teaching from "../Teaching";

const useStyles = makeStyles(theme => ({
  root: props => ({
    background: props.flag ? theme.palette.primary.light : theme.palette.secondary.light,
    color: props.flag ? theme.palette.primary.dark : theme.palette.secondary.dark,
    minHeight: "100vh",
    padding: theme.spacing(3),
    aColor: props.flag ? theme.palette.primary.main : theme.palette.secondary.main
  })
}));

function App() {
  const states = [{name:"Papers", Component: Papers},{name: "Software", Component: Software}, {name: "Talks", Component: Talks}, {name: "Cvu", Component: Cvu}, {name: "Teaching", Component: Teaching}];
  const [flag, setFlag] = useState(false);
  const classes = useStyles({flag});
  return (
    <Context.Provider value={{info, states, flag, setFlag}}>
      <Container maxWidth="false" className={classes.root}>
        <Header/>
        <Main/>
        <Footer/>
      </Container>
    </Context.Provider>
  );
}

export default App;
