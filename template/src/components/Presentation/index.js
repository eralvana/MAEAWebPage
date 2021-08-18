import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Presentation() {
  const value = useContext(Context);
  return (
    <section id="Presentation">
      <img src="https://avatars.githubusercontent.com/u/28746720" alt=""/>
      <div>
        <div>
          <a href={`mailto:${value.info.email.personal}?Subject=Contact%20from%20personal%20page`}>{value.info.email.personal}</a>
        </div>
        <div>
          <a href={`mailto:${value.info.email.institutional}?Subject=Contact%20from%20personal%20page`}>{value.info.email.institutional}</a>
        </div>
      </div>
      <div>
        <p>
          I'm a mathematician and Python developer. Currently I'm Ph.D student from <a href={value.info.webtutor} target="_blank" rel="noreferrer">{value.info.tutor}</a> at <a href={value.info.institution} target="_blank" rel="noreferrer">Instituto de Matemáticas-CU</a> from UNAM in Mexico City. Also I develop software and data analysis for Prescrypto.
        </p>
        <p>
          My main line of research is to study applications of Poisson geometry and Sympletic geometry in geometric deep learning through symbolic computation and artificial intelligence (in Python).
        </p>
      </div>
    </section>
  );
}

export default Presentation;
