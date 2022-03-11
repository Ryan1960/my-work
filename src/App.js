import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/about";
import FreeResources from "./components/freeResources/freeResources";
import JobCourse from "./components/jobCourse/jobCourse";
import MentorResources from "./components/mentorResources/mentorResources";
import SuccessfulCases from "./components/successfulCases/successfulCases";
import { Link } from "react-router-dom";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import { makeStyles } from "@material-ui/core";
import TopNavBar from "./components/NavBar/topBar";
import Classes from "./components/jobCourse/classes/classes";

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

function NYBamboo() {
  const classes = useStyles();
  return (
    <div>
      <TopNavBar
        tabs={[
          {
            label: "纽约竹子",
            path: "/",
            className: classes.button1,
            component: <Home />,
          },
          {
            label: "求职课程",
            className: classes.button2,
            path: "/jobCourse",
            component: <JobCourse />,
          },
          {
            label: "免费资源",
            path: "/freeResources",
            className: classes.button3,
            component: <FreeResources />,
          },
          {
            label: "成功案例",
            path: "/successfulCases",
            className: classes.button4,
            component: <SuccessfulCases />,
          },
          {
            label: "导师资源",
            path: "/mentorResources",
            className: classes.button5,
            component: <MentorResources />,
          },
          {
            label: "关于我们",
            className: classes.button6,
            path: "/about",
            component: <About />,
          },
        ]}
      />
      <Footer />
    </div>
  );
}

export default NYBamboo;
