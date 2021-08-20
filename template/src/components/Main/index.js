import { useContext } from "react";
import Context from "../../context.js";

import { Route , Switch , Redirect } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Presentation from "../Presentation";

import "./styles.css";

function Main() {
  const value = useContext(Context);
  return (
    <main>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Presentation/>
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
    </main>
  );
}

export default Main;
