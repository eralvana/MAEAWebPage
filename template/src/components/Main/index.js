import { Route } from "react-router-dom";
import Presentation from "../Presentation"
import Papers from "../Papers"
import Software from "../Software"
import Talks from "../Talks"
import Cvu from "../Cvu"
import Teaching from "../Teaching"

import "./styles.css"

function Main() {
  return (
    <main>
      <Presentation/>
      <Route path="/Papers">
        <Papers/>
      </ Route>
      <Route path="/Software">
        <Software/>
      </ Route>
      <Route path="/Talks">
        <Talks/>
      </ Route>
      <Route path="/Cvu">
        <Cvu/>
      </ Route>
      <Route path="/Teaching">
        <Teaching/>
      </ Route>
    </main>
  );
}

export default Main;
