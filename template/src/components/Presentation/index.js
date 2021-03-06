import { useContext } from "react";
import Context from "../../context.js";

import { Box } from "@material-ui/core";

import "./styles.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  anchor: props => ({
    color: props.flag ? theme.palette.primary.main : theme.palette.secondary.main,
    '&:hover': {
      color: props.flag ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText,
    },
  })
}));

function Presentation() {
  const value = useContext(Context);
  const classes = useStyles({flag:value.flag});
  return (
    <Box component="section" id="Presentation" textAlign="justify">
      <Box align="center">
      <img src="https://avatars.githubusercontent.com/u/28746720" alt=""/>
      </Box>
      <Box textAlign="center">
        <div>
          <a href={`mailto:${value.info.email.personal}?Subject=Contact%20from%20personal%20page`} className={classes.anchor} >{value.info.email.personal}</a>
        </div>
        <div>
          <a href={`mailto:${value.info.email.institutional}?Subject=Contact%20from%20personal%20page`} className={classes.anchor} >{value.info.email.institutional}</a>
        </div>
      </Box>
      <div>
        <p>
          I'm a mathematician and Python developer. Currently I'm Ph.D student from <a href={value.info.webtutor} target="_blank" rel="noreferrer" className={classes.anchor}>{value.info.tutor}</a> at <a href={value.info.institution} target="_blank" rel="noreferrer" className={classes.anchor} >Instituto de Matemáticas-CU</a> from UNAM in Mexico City. Also I develop software and data analysis for Prescrypto.
        </p>
        <p>
          My main line of research is to study applications of Poisson geometry and Sympletic geometry in geometric deep learning through symbolic computation and artificial intelligence (in Python).
        </p>
      </div>
    </Box>
  );
}

export default Presentation;
