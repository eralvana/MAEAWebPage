import { useContext } from "react";
import Context from "../../context.js";

import { Typography, Box } from "@material-ui/core";

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

function Cvu() {
  const value = useContext(Context);
  const classes = useStyles({flag:value.flag});
  return (
    <Box component="section" id="Cvu" textAlign="justify">
      <Typography variant="h5">CVU</Typography>
      <ul>
        {
          value.info.cvu.map(function(e,i){
            return (
              <li key={i}>{e.grade} - {e.institution}. {e.period}. {e.director}. <br/>
              {
                e.pdf ? <> <a href={e.pdf} target="_blank" rel="noreferrer" className={classes.anchor} ><b>PDF</b></a>.</> : ""
              }
              </li>
            )
          })
        }
      </ul>
    </Box>
  );
}

export default Cvu;
