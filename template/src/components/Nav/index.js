import { useContext } from "react";
import Context from "../../context.js";

import { Link } from "react-router-dom";
import { Box} from "@material-ui/core";

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

function Nav() {
  const value = useContext(Context);
  const classes = useStyles({flag:value.flag});
  return (
    <Box component="nav">
      <ul>
          {
            value.states.map(function(element,index){
              return(
                <li key={index}><Link to={`/${element.name}`} className={classes.anchor}>{element.name}</Link></li>
              )
            })
          }
      </ul>
    </Box>
  );
}

export default Nav;
