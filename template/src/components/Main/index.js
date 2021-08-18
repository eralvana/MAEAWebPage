import { Route , Switch , Redirect } from "react-router-dom";
import Presentation from "../Presentation"

import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Main() {
  const value = useContext(Context);
  return (
    <main>
      <Presentation/>
      <Switch>
      {
        value.states.map(function(element, index){
          return(
            <Route key={index} path={`/${element.name}`}>
              <element.Component/>
            </ Route>
          )
        })
      }
      <Route path="/" exact><Redirect to="/Cvu"/></Route>
      </Switch>
    </main>
  );
}

export default Main;
