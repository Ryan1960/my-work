import { Button, Grid, Typography, useTheme } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import head from "../../img/head.png";
import logo from "../../img/logo.jpg";
import ey from "./img/c14.png";
import amzon from "./img/c3.png";
import pwc from "./img/c2.png";
import deloitte from "./img/c1.png";
import wg from "./img/c15.png";
import dell from "./img/c16.png";
import pmg from "./img/c17.png";
import tesla from "./img/c18.png";
import gt from "./img/c19.png";
import cvs from "./img/c20.png";
import ms from "./img/c21.png";
import person from "./img/ll1.png";
import bao from "./img/ds1.png";
import xz from "./img/ds2.png";
import siqi from "./img/ds3.png";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import icon5 from "./img/icon5.png";
import icon6 from "./img/icon6.png";
import zi1 from "./img/zi1.png";
import zi2 from "./img/zi2.png";
import zi3 from "./img/zi3.png";
import zi4 from "./img/zi4.png";
import zi5 from "./img/zi5.png";
import zi6 from "./img/zi6.png";
// import ig from "./img/ig.png";
// import linkedin from "./img/linkedin.png";
// import youtube from "./img/youtube.png";
// import img6 from "./img/img-6.jpg";

import contactForm from "./img/contactForm.png";
import "./home.css";
import FreeResources from "../freeResources/freeResources";
import SuccessfulCases from "../successfulCases/successfulCases";
import MentorResources from "../mentorResources/mentorResources";
import JobCourse from "../jobCourse/jobCourse";
import About from "../about/about";

const tabs = [
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
];

export default function Home() {
  <Router>
    <Switch>
      {tabs.map((tab, index) => (
        <Route key={index} exact path={tab.path}>
          {tab.component}
        </Route>
      ))}
    </Switch>
  </Router>;

  const theme = useTheme();

  return (
    <div style={{ width: "100%", background: " #f7f9fb" }}>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={2}>
          <img src={logo} alt="Logo" style={{ width: "100%" }} />
        </Grid>
        <Grid
          item
          container
          xs={5}
          spacing={10}
          direction="column"
          alignItems="center"
          // justifyContent="space-between"
        >
          <Grid item>
            <Typography className="first-word" variant="h3">
              成功助力上百名学生
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className="first-word"
              variant="h3"
              style={{ color: "red" }}
            >
              斩获 <span style={{ color: "green" }}>世界500强offer</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className="first-word"
              variant="h6"
              style={{ color: "light-gray" }}
            >
              宁可食无肉，不可职无竹
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="first-word">
              <input
                placeholder="你的邮箱"
                style={{ width: 200, height: 30, borderRadius: 5 }}
              />
              <span
                style={{
                  display: "inline-block",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "20px",
                  // height: "75px",
                  backgroundColor: "green",
                  margin: "3px",
                }}
                className="hp-head-ss"
              >
                免费咨询
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <img src={head} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
      <div className="second">
        <h1
          className="title_2015"
          style={{
            fontWeight: 600,
            marginTop: 200,
          }}
        >
          从2015开始，我们把学生送到以下公司
        </h1>
        <div className="pics">
          <div className="hp-head">
            <img src={ey} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={amzon} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={pwc} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={deloitte} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={wg} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={dell} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={pmg} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={tesla} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={gt} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={cvs} className="hp-head-img" />
          </div>
          <div className="hp-head">
            <img src={ms} className="hp-head-img" />
          </div>
        </div>
      </div>
      <div className="selectB">
        <h1 className="hp-head3">为什么选择纽约竹子？</h1>
        <Grid
          container
          className="selc_100"
          justifyContent="space-between"
          spacing={10}
        >
          <Grid item xs={6}>
            <div className="h2">100%</div>
            <div className="h3">世界顶级公司导师团队</div>
            <div className="description">
              导师均为从业多年的行业大牛，经验丰富,
              认真负责，是竹子亲自测评，精挑细选
              靠谱的内推资源，不求多但求精，不 overpromise
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="h2">100%</div>
            <div className="h3">竹子老师亲自追踪授课指导</div>
            <div className="description">
              竹子老师直接与学生交流，全程跟踪，监
              督课程进度，随时更新课程目标与安排。 课余时间竹子老师也会热心答疑
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          className="selc_100"
          justifyContent="space-between"
          spacing={10}
        >
          <Grid item xs={6}>
            <div className="h2">4 in 5</div>
            <div className="h3">学生拿到一线公司offer</div>
            <div className="description">
              诚信守约，广受好评，有诸多成功上岸的案例与真实的offer展示
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="h2">20%</div>
            <div className="h3">远低于同业的课程价格</div>
            <div className="description">
              业界良心，课程价格远低于同业水平，最大的目标就是帮助竹笋们上岸
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="selectB">
        <h1 className="hp-head3">竹子的故事</h1>
        <Grid
          container
          className="selc_100"
          justifyContent="space-between"
          spacing={10}
        >
          <Grid item xs={6}>
            <div>
              <img src={person} className="hp-head-img" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <ul className="img-right-text">
              <li>
                <span className="img-right-text-color">
                  美国并购交M&A Consulting高级咨询顾问
                </span>
              </li>
              <li>
                <span className="img-right-text-color">
                  先后就职美国德勤,安永,PIMCO,索尼总部
                </span>
              </li>
              <li>
                <span className="img-right-text-color">
                  6年华尔街金融战略财务咨询工作经验
                </span>
              </li>
              <li>
                <span className="img-right-text-color">
                  四大校园面试招聘官, 项目经理
                </span>
              </li>
              <li>
                <span className="img-right-text-color">
                  美国注册会计师, 独立顶尖职业咨询师
                </span>
              </li>
              <li>
                <span className="img-right-text-color">
                  成功助力上百名求职学生斩获世界500强offer,
                </span>
              </li>
              <li>
                <span className="img-right-text-color">
                  如四大,花旗,亚马逊,字节跳动等
                </span>
              </li>
              <li>
                <span className="img-right-text-color">
                  专栏作家, 自媒体人, 琵琶演奏者
                </span>
              </li>
              <li>
                <span className="img-right-text-color">
                  纽约女性领导力论坛唯 亚裔女性演讲嘉宾
                </span>
              </li>
              <li>
                <span className="img-right-text-color">美国高校客座嘉宾</span>
              </li>
              <li>
                <span className="img-right-text-color">竹子会客厅发起人</span>
              </li>
            </ul>
          </Grid>
        </Grid>
        <h1 className="hp-head3">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              关于我们
            </Button>
          </Link>
        </h1>
      </div>
      <div className="selectC">
        <h1 className="hp-head3"> 顶级的导师资源</h1>
        <Grid
          container
          className="selc_100"
          justifyContent="space-between"
          spacing={10}
        >
          <Grid item xs={4}>
            <div className="ziyuan">
              <img src={bao} className="chp-head-img" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="ziyuan">
              <img src={xz} className="chp-head-img" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="ziyuan">
              <img src={siqi} className="chp-head-img" />
            </div>
          </Grid>
        </Grid>
        <h1 className="hp-head3">
          <Link to="/mentorResources" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              顶级的导师资源
            </Button>
          </Link>
        </h1>
      </div>
      <div className="selectD">
        <h1 className="hp-head3">涵盖各个领域的私人定制方案</h1>
        <Grid
          container
          className="selc_100"
          justifyContent="space-between"
          spacing={10}
        >
          <Grid item xs={4}>
            <div className="secD">
              <img src={icon1} className="secDP" />
            </div>
            <div>
              <img src={zi1} className="secDP" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="secD">
              <img src={icon2} className="secDP" />
            </div>
            <div>
              <img src={zi2} className="secDP" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="secD">
              <img src={icon3} className="secDP" />
            </div>
            <div className="">
              <img src={zi3} className="secDP" />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          className="selc_100"
          justifyContent="space-between"
          spacing={10}
        >
          <Grid item xs={4}>
            <div className="secD">
              <img src={icon4} className="secDP" />
            </div>
            <div>
              <img src={zi4} className="secDP" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="secD">
              <img src={icon5} className="secDP" />
            </div>
            <div>
              <img src={zi5} className="secDP" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="secD">
              <img src={icon6} className="secDP" />
            </div>
            <div className="">
              <img src={zi6} className="secDP" />
            </div>
          </Grid>
        </Grid>
        <h1 className="hp-head3">
          <Link to="/jobCourse" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              求职课程
            </Button>
          </Link>
        </h1>
      </div>
      <div className="selectE">
        <div className="selectE2">
          <div className="go-text-1">让我们开始吧！</div>
          <div className="go-text-2">让我来帮助你实现你的职场目标</div>
          <div className="go-text-3">免费咨询</div>
        </div>
      </div>
    </div>
  );
}
