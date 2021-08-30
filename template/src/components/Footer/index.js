import { useContext } from "react";
import Context from "../../context.js";

import { Box } from "@material-ui/core";
import { Icon } from '@iconify/react';

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

function Footer() {
  const value = useContext(Context);
  const classes = useStyles({flag:value.flag});
  return (
    <Box component="footer" textAlign="center">
      <ul>
        <li display="inline"><a href={value.info.links.github} target="_blank" rel="noreferrer" className={classes.anchor} ><Icon icon="jam:github" width="32" height="32"/>
</a></li>
        <li><a href={value.info.links.twitter} target="_blank" rel="noreferrer" className={classes.anchor} ><Icon icon="jam:twitter" width="32" height="32" />
</a></li>
        <li><a href={value.info.links.stackoverflow} target="_blank" rel="noreferrer" className={classes.anchor} ><Icon icon="jam:stackoverflow" width="32" height="32" />
</a></li>
        <li><a href={value.info.links.linkedin} target="_blank" rel="noreferrer" className={classes.anchor} ><Icon icon="jam:linkedin" width="32" height="32" />
</a></li>
      </ul>
      <div>{value.info.name} &copy; 2021</div>
    </Box>
  );
}

export default Footer;
