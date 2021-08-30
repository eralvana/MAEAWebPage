import { useContext } from "react";
import Context from "../../context.js";

import { Typography , Box } from "@material-ui/core";

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

function Software() {
  const value = useContext(Context);
  const classes = useStyles({flag:value.flag});
  return (
    <Box component="section" id="Software" textAlign="justify">
      <Typography variant="h5">Software</Typography>
      <ul>
        {
          value.info.software.map(function(e,i){
            return (
              <li key={i}>In collaboration with {e.author}, we developing {e.name} module (written in Python) for {e.for}. ({e.year}) <br/> <a href={e.github} target="_blank" rel="noreferrer" className={classes.anchor} ><b>GitHub</b></a>, <a href={e.pipy} target="_blank" rel="noreferrer" className={classes.anchor} ><b>Pipy</b></a>, <a href={e.pdf} target="_blank" rel="noreferrer" className={classes.anchor} ><b>PDF</b></a>.</li>
            )
          })
        }
      </ul>
    </Box>
  );
}

export default Software;
