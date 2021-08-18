import React from "react"
import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"

import info from "../../info.json"
import Context from "../../context.js"

import "./styles.css"

function App() {
  const states = ["Papers","Software", "Talks", "Cvu", "Teaching"];
  return (
    <Context.Provider value={{info, states}}>
    <Header/>
    <Main/>
    <Footer/>
    </Context.Provider>
  );
}

export default App;
