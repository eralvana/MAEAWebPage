import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Talks() {
  const value = useContext(Context);
  return (
    <section id="Talks">
      <h1>Talks</h1>
      <ul>
        {
          value.talks.map(function(e,i){
            let author = "";
            let video = "";
            if (e.author.length == 0) {
              author = "I did present the talk"
            } else {
              author = "In collaboration with " + e.author + " we presented "
            };
            // if (e.video.two.length == 0){
            //   video = "<a href={e.video.one} target=\"_blank\" rel=\"noreferrer\"><b>Video</b></a>"
            // } else {
            //   video = "<a href={e.video.one} target=\"_blank\" rel=\"noreferrer\"><b>Video 1</b></a>, <a href={e.video.two} target=\"_blank\" rel=\"noreferrer\"><b>Video 2</b></a>"
            // }
            return (
              <li key={i}>{author} <b>{e.title}</b> at the <em>{e.event}</em> in {e.date}. <a href={e.page} target="_blank" rel="noreferrer"><b>Page</b></a>, {video}.
              </li>
            )
          }
        )
      }
      </ul>
    </section>
  );
}

export default Talks;
