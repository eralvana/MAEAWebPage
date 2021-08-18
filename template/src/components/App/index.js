import React from "react"
import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"
import Papers from "../Papers"
import Software from "../Software"
import Talks from "../Talks"
import Cvu from "../Cvu"
import Teaching from "../Teaching"

import Container from '@material-ui/core/Container';

import info from "../../info.json"
import Context from "../../context.js"

import "./styles.css"

function App() {
  const states = [{name:"Papers", Component: Papers},{name: "Software", Component: Software}, {name: "Talks", Component: Talks}, {name: "Cvu", Component: Cvu}, {name: "Teaching", Component: Teaching}];
  return (
    <Context.Provider value={{info, states}}>
    <Container maxWidth='xs'>
    <Header/>
    <Main/>
    <Footer/>
    </Container>
    </Context.Provider>
  );
}

export default App;
