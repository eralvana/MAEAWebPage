import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Video(f,j,a){
  let k = "";
  let puntuation = ".";
  if (j != 0){
    k = " " + j
  }
  if (j != a.length-1){
    puntuation = ", "
  }
return(
  <> <a href={f} target="_blank" rel="noreferrer">Video{k}</a>{puntuation}</>
)};
function Talk(e,i){
  let author = "I did present the talk ";
  if (e.author.length != 0) {
    author = "In collaboration with " + e.author + " we presented "
  }
  return (
    <li key={i}>{author} <b>{e.title}</b> at the <em>{e.event}</em> in {e.date}.
    {
      e.page ? <> <a href={e.page} target="_blank" rel="noreferrer"><b>Page</b></a>.</> : ""
    }
    <b>
    {
      e.video.map(Video)
    }
    </b>
    </li>
  )
}

function Talks() {
  const value = useContext(Context);
  return (
    <section id="Talks">
      <h1>Talks</h1>
      <ul>
        {
          value.talks.map(Talk)
        }
      </ul>
    </section>
  );
}

export default Talks;
