import React, { useState} from "react";

import useStyles from "./styles";

import Button from "@material-ui/core/Button";

const Tabs = ({ tabs, changeActiveExp }) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  return (
    <section className={classes.root}>
      {tabs.map((tab) => {
        return (
          <div key={tab.id}>
            <Button
              fullWidth={true}
              className={active? `${classes.btn} ${classes.activeTab}`: `${classes.btn}`}
              onClick={() => { 
                changeActiveExp(tab.id)
                setActive(true)
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
