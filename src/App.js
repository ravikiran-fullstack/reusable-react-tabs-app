import React, { useState, useEffect } from "react";

import Tabs from "./components/tabs/Tabs";
import Experiences from "./components/experiences/Experiences";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./appStyles";

const App = () => {
  const url = "https://course-api.com/react-tabs-project";
  const [exps, setExps] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [activeExp, setActiveExp] = useState();
  const [activeTab, setActiveTab] = useState();

  const fetchExps = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setExps(data);
    setActiveExp(data[0]);
    setActiveTab(data[0].id);
    setTabs(
      data.map((exp) => {
        return { company: exp.company, id: exp.id };
      })
    );
    
  };
  useEffect(() => {
    fetchExps();
  }, []);

  const changeActiveExp = (id) => {
    setActiveExp(exps.find((exp) => exp.id === id));
    setActiveTab(exps.find((exp) => exp.id === id).id);
    console.log(activeTab);
  };

  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ marginTop: "10vh" }}
        >
          <Grid item xs={12}>
            <section className={classes.title}>
              <Typography variant="h2">Experiences</Typography>
              <div className={classes.underline}></div>
            </section>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ marginTop: "10vh" }}
        >
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Tabs changeActiveExp={changeActiveExp} tabs={tabs} activeTab={activeTab}></Tabs>
              </Grid>
              <Grid item xs={8}>
                <Experiences exp={activeExp}></Experiences>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
