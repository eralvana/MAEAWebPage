import React, { useState } from "react"
import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"

import info from "../../info.json"
import Context from "../../context.js"

import "./styles.css"

function App() {
  // const states = ["Papers","Software", "Talks", "Cvu", "Teaching"];
  const [display, setDisplay] = useState("Papers");
  return (
    <Context.Provider value={{info, display, setDisplay}}>
    <Header/>
    <Main display={display}/>
    <Footer/>
    </Context.Provider>
  );
}

export default App;
