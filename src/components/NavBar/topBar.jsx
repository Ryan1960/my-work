import { Grid, Button, makeStyles } from "@material-ui/core";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./topBar.css";
// import Todo from "..";
import { useHistory, useLocation } from "react-router";
const useStyles = makeStyles((theme) => ({
  button1: {
    color: "white",
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  button2: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  button3: {
    color: "white",
    backgroundColor: theme.palette.warning.dark,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  button4: {
    color: "white",
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },
  button5: {
    color: "white",
    backgroundColor: theme.palette.secondary.light,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  button6: {
    color: "white",
    backgroundColor: theme.palette.info.dark,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
    },
  },
}));

export default function TopNavBar(props) {
  return (
    <Router>
      <NavBarContent {...props} />
    </Router>
  );
}
function NavBarContent(props) {
  const { tabs } = props;
  const classes = useStyles();
  const history = useHistory();

  const getSelectedTabIndexFromPath = (mess) => {
    console.log(mess);
    return tabs.findIndex((tab) => tab.path === history.location.pathname);
  };

  const [selectedTabIndex, setSelectedTabIndex] = useState(() =>
    getSelectedTabIndexFromPath("init")
  );

  history.listen(() =>
    setSelectedTabIndex(getSelectedTabIndexFromPath("url change"))
  );

  const handleChange = (newValue) => {
    history.push(tabs[newValue].path);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedTabIndex]);

  return (
    <>
      <div className="top">
        <Grid
          container
          item
          alignContent="center"
          justifyContent="space-around"
        >
          {tabs.map((tab, index) => (
            <Grid item md={2}>
              <NavLink to={tab.path} style={{ textDecoration: "none" }}>
                <Button
                  // href={tab.path}
                  variant="outlined"
                  className={index === selectedTabIndex ? tab.className : ""}
                  // onClick={() => handleChange(index)}
                >
                  {tab.label}
                </Button>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </div>
      <Switch>
        {tabs.map((tab, index) => (
          <Route key={index} exact path={tab.path}>
            <div style={{ marginTop: "20px" }}> {tab.component}</div>
          </Route>
        ))}
      </Switch>
    </>
  );
}
