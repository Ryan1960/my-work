import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/about";
import FreeResources from "./components/freeResources/freeResources";
import JobCourse from "./components/jobCourse/jobCourse";
import MentorResources from "./components/mentorResources/mentorResources";
import SuccessfulCases from "./components/successfulCases/successfulCases";
import { Link } from "react-router-dom";
import Home from "./components/home/home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/footer";
function NYBamboo() {
  return (
    <div>
      <NavBar
        tabs={[
          { label: "首页", path: "/", component: <Home /> },
          { label: "求职课程", path: "/jobCourse", component: <JobCourse /> },
          {
            label: "免费资源",
            path: "/freeResources",
            component: <FreeResources />,
          },
          {
            label: "成功案例",
            path: "/successfulCases",
            component: <SuccessfulCases />,
          },
          {
            label: "顶级的导师资源",
            path: "/mentorResources",
            component: <MentorResources />,
          },
          { label: "关于我们", path: "/about", component: <About /> },
        ]}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default NYBamboo;
