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

function Papers() {
  const value = useContext(Context);
  const classes = useStyles({flag:value.flag});
  return (
    <Box component="section" id="Papers" textAlign="justify">
      <Typography variant="h5">
        <Box textAlign="center">Papers</Box>
      </Typography>
      <ul>
        <li>Publications</li>
          <ul>
            {
              value.info.papers.publications.map(function(e,i){
                return (
                  <li key={i}>{e.author}. <a href={e.url} target="_blank" rel="noreferrer" className={classes.anchor} ><b>{e.title}</b></a>. {e.publisher},
                  {e.volume ? <> vol {e.volume}, </> : ""} {e.pages} ({e.year}). <br/>
                  {
                    e.pdf ? <> <a href={e.pdf} target="_blank" rel="noreferrer" className={classes.anchor} ><b>PDF</b></a>.</> : ""
                  }
                  </li>
                )
              })
            }
          </ul>
      </ul>
    </Box>
  );
}

export default Papers;
