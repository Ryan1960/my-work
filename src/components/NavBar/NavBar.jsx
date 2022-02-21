import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation,
} from "react-router-dom";

//a11yProps 来自这里
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

//useStyles 来自这里
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

NavBar.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default function NavBar(props) {
  return (
    <Router>
      <NavBarContent {...props} />
    </Router>
  );
}

function NavBarContent(props) {
  // this means you receive props from upper components
  const { tabs } = props;
  const classes = useStyles();
  const history = useHistory();
  // const location = useLocation();
  // useHistory uses the  <Router> provider, so we must create  <Router> first before calling it.

  // useEffect(() => {
  //   setSelectedTabIndex(getSelectedTabIndexFromPath());
  // }, [location.pathname]);

  const getSelectedTabIndexFromPath = () =>
    tabs.findIndex((tab) => tab.path === history.location.pathname);

  const [selectedTabIndex, setSelectedTabIndex] = useState(
    getSelectedTabIndexFromPath()
  );
  console.log(history.location);
  //selectedTabIndex is a number

  history.listen(() => setSelectedTabIndex(getSelectedTabIndexFromPath()));

  const handleChange = (_, newValue) => {
    history.push(tabs[newValue].path);
  };

  /**
   *   click backward button 顺序: url changes==> history.listen called==>
   * getSelectedTabIndexFromPath() called, a new index happens==>setSelectedTabIndex sets a new
   * selectedTabIndex==>value in Tabs changes
   */

  /**
   *   click tabs==>handleChange runs==>history changes(url changes)==>history.listen called==>
   * getSelectedTabIndexFromPath() called, a new index happens==>setSelectedTabIndex sets a new
   * selectedTabIndex==>value in Tabs changes
   */

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={selectedTabIndex}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              style={{ color: "white" }}
              // {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
      {/* 这里是注册 */}
      <Switch>
        {tabs.map((tab, index) => (
          <Route key={index} exact path={tab.path}>
            <div style={{ margin: 20 }}> {tab.component}</div>
          </Route>
        ))}
      </Switch>
    </div>
  );
}
