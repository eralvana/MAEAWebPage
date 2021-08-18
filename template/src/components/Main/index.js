import Context from "../../context.js"
import { useContext, useState } from 'react';

import Presentation from "../Presentation"
import Papers from "../Papers"
import Software from "../Software"
import Talks from "../Talks"
import Cvu from "../Cvu"
import Teaching from "../Teaching"

import "./styles.css"

function Main(props) {
  const value = useContext(Context);
  return (
    <main>
      <Presentation/>
      {props.display == "Papers" && <Papers/>}
      {props.display == "Software" && <Software/>}
      {props.display == "Talks" && <Talks/>}
      {props.display == "Cvu" && <Cvu/>}
      {props.display == "Teaching" && <Teaching/>}
    </main>
  );
}

export default Main;
