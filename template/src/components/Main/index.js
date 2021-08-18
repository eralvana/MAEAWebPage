import { Route } from "react-router-dom";
import Presentation from "../Presentation"

import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Main() {
  const value = useContext(Context);
  return (
    <main>
      <Presentation/>
      {
        value.states.map(function(element, index){
          return(
            <Route key={index} path={`/${element.name}`}>
              <element.Component/>
            </ Route>
          )
        })

      }
    </main>
  );
}

export default Main;
