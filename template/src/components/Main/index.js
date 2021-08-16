import Context from "../../context.js"
import { useContext } from 'react';

import Presentation from "../Presentation"
import Papers from "../Papers"
import Software from "../Software"
import Talks from "../Talks"
import Cvu from "../Cvu"
import Teaching from "../Teaching"

import "./styles.css"

function Main() {
  const value = useContext(Context);
  return (
    <main>
      <Presentation/>
      <Papers/>
      <Software/>
      <Talks/>
      <Cvu/>
      <Teaching/>
    </main>
  );
}

export default Main;
