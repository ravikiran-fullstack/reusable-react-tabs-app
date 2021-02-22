import React from "react";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from '@material-ui/core';

import { MdDone } from 'react-icons/md';

import useStyles from "./styles";

const Experiences = ({
  exp = { title: "", company: "", dates: "", duties: [] },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">{exp.title || ""}</Typography>
      <Typography
        variant="h5"
        className={classes.company}
      >
        {exp.company || ""}
      </Typography>
      <Typography variant="h6">{exp.dates || ""}</Typography>
      <List>
        {exp.duties.map((duty, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <MdDone />
              </ListItemIcon>
              <ListItemText primary={duty} />
            </ListItem>
          );
        })}
      </List>
      <div style={{textAlign:'center'}}>
        <Button className={classes.moreInfoBtn}>More Info</Button>
      </div>
    </div>
  );
};

export default Experiences;
