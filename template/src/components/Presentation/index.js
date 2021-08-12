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
          <a href={`mailto:${value.email.personal}?Subject=Contact%20from%20personal%20page`}>{value.email.personal}</a>
        </div>
        <div>
          <a href={`mailto:${value.email.institutional}?Subject=Contact%20from%20personal%20page`}>{value.email.institutional}</a>
        </div>
      </div>
      <div>
        <p>
          I'm a mathematician and Python developer. Currently I'm Ph.D student from <a href={value.webtutor} target="_blank" rel="noreferrer">{value.tutor}</a> at <a href={value.institution} target="_blank" rel="noreferrer">Instituto de Matemáticas-CU</a> from UNAM in Mexico City. Also I develop software and data analysis for Prescrypto.
        </p>
        <p>
          My main line of research is to study applications of Poisson geometry and Sympletic geometry in geometric deep learning through symbolic computation and artificial intelligence (in Python).
        </p>
      </div>
    </section>
  );
}

export default Presentation;
