import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '5px'
  },
  btn: {
    textTransform: "capitalize",
    marginRight: "5%",
    color: "#c59d5f",
    paddingLeft: "60%",
    background: "#f9dbdb",
    border: 'none',
    "&:hover": {
      borderLeft:'1px solid blue'
    },
    "&:active": {
      borderLeft:'1px solid green'
    },

  },
  btnDiv: {
    textAlign: "center",
  },
  activeTab: {
    borderLeft: '1px solid blue',
    backgroundColor: '#dee5ff'
  }
}));

const Tabs = ({ tabs, changeActiveExp, activeTab }) => {
  const classes = useStyles();
  return (
    <section >
      {tabs.map((tab) => {
        return (
          <div key={tab.id} className={classes.root}>
            <Button
              fullWidth={true}
              className={clsx(classes.btn, {[classes.activeTab]: activeTab === tab.id})}
              // className={activeTab === tab.id ? classes.activeTab : classes.btn}
              onClick={() => {
                changeActiveExp(tab.id);
              }}
            >
              {tab.company}
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default Tabs;
