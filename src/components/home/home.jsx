import { Button, Grid, Typography, useTheme } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./home.css";
import FreeResources from "../freeResources/freeResources";
import SuccessfulCases from "../successfulCases/successfulCases";
import MentorResources from "../mentorResources/mentorResources";
import JobCourse from "../jobCourse/jobCourse";
import About from "../about/about";
import { GreenFoot } from "../../univers/greenFoot";
import { OurService } from "../jobCourse/ourService/ourService";
import { CompaniesSent } from "./companiesSent/companiesSent";
import TitleCards from "../mentorResources/titleCard/titleCards";
import { Words } from "../about/words/words";
import AwsImage from "../../univers/awsImage";

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
    <Grid container spacing={10} direction="column">
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid container item md={2} xs={12} justifyContent="center">
          <AwsImage src="logo.jpg" alt="Logo" style={{ maxWidth: "200px" }} />
        </Grid>

        <Grid
          item
          container
          md={5}
          xs={12}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <div className="first-word">成功助力上百名学生</div>
          </Grid>
          <Grid item>
            <div className="first-word">
              <div style={{ color: "green" }}>
                <span style={{ color: "red" }}>斩获</span>世界500强offer
              </div>
            </div>
          </Grid>
          <Grid item>
            <Grid
              className="first-word"
              variant="h6"
              style={{ color: "light-gray" }}
            >
              宁可食无肉，不可职无竹
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} xs={12} container justifyContent="center">
          <AwsImage src="head.png" style={{ width: "80%" }} />
        </Grid>
      </Grid>
      <Grid item xs={12} className="title_2015">
        联系方式
      </Grid>
      <Grid container justifyContent="center">
        <Grid
          md={6}
          xs={12}
          item
          container
          className="logo"
          style={{ width: "50%" }}
        >
          <div className="logo-1">
            <AwsImage src="deco4.png" width="40px" />
            <div>微信号</div>
          </div>
          <AwsImage src="二维码.JPG" alt="Logo" style={{ width: "40%" }} />
        </Grid>
        <Grid
          md={6}
          xs={12}
          item
          container
          className="logo"
          style={{ width: "50%" }}
        >
          <div className="logo-1">
            <AwsImage src="deco4.png" width="40px" />
            <div>公共微信号</div>
          </div>
          <AwsImage src="公众号.bmp" alt="Logo" style={{ width: "40%" }} />
        </Grid>
        <Grid
          md={6}
          xs={12}
          item
          container
          className="logo"
          style={{ width: "50%" }}
        >
          <div className="logo-1">Youtube </div>
          <a href="https://www.youtube.com/channel/UCNBpegfn6yG_AfsoGBrAhWA">
            <AwsImage
              src="deco5.png"
              width="40px"
              className="img-text-1-text-5"
            />
          </a>
        </Grid>
        <Grid
          md={6}
          xs={12}
          item
          container
          className="logo"
          style={{ width: "50%" }}
        >
          <div className="logo-1">instagram </div>
          <a href="https://www.instagram.com/nancyyyychen/">
            <AwsImage src="2048px-Instagram_icon.png" width="40px" />
          </a>
        </Grid>

        <Grid md={6} xs={12} item className="logo" style={{ width: "50%" }}>
          <div>B站 </div>
          <a href="https://space.bilibili.com/555813716">
            <AwsImage src="bilibili.png" width="40px" />
          </a>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }} className="title_2015">
          从2015开始，我们把学生送到以下公司
        </h1>
        <h2 style={{ textAlign: "center" }}>四大会计师事务所</h2>
      </Grid>

      <CompaniesSent srcs={["c14.png", "c2.png", "Deloitte.jpg", "kpmg.jpg"]} />
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>著名金融机构</h2>
      </Grid>
      <CompaniesSent
        srcs={[
          "Citigroup-logo-logo.png",
          "goldman.png",
          "jp-morgan.jpg",
          "Morgan-Stanley-emblem.jpg",
          "kkr-logo-370x229.jpg",
          "sequoia.png",
        ]}
      />
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>著名科技公司</h2>
      </Grid>
      <CompaniesSent srcs={["c21.png", "c18.png", "c16.png", "c3.png"]} />
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>其它著名公司</h2>
      </Grid>
      <CompaniesSent srcs={["c20.png", "c17.png", "c19.png", "c15.png"]} />
      <Grid item xs={12} className="title_2015">
        为什么选择纽约竹子？
      </Grid>

      <Grid
        container
        className="selc_100"
        justifyContent="space-between"
        spacing={10}
      >
        <Grid item md={6} xs={12}>
          <div className="h2">100%</div>
          <div className="h3">世界顶级公司导师团队</div>
          <div className="description">
            导师均为从业多年的行业大牛，经验丰富,
            认真负责，是竹子亲自测评，精挑细选 靠谱的内推资源，不求多但求精，不
            overpromise
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="h2">100%</div>
          <div className="h3">竹子老师亲自追踪授课指导</div>
          <div className="description">
            竹子老师直接与学生交流，全程跟踪，监
            督课程进度，随时更新课程目标与安排。 课余时间竹子老师也会热心答疑
          </div>
        </Grid>

        <Grid item md={6} xs={12}>
          <div className="h2">4 in 5</div>
          <div className="h3">学生拿到一线公司offer</div>
          <div className="description">
            诚信守约，广受好评，有诸多成功上岸的案例与真实的offer展示
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="h2">20%</div>
          <div className="h3">远低于同业的课程价格</div>
          <div className="description">
            业界良心，课程价格远低于同业水平，最大的目标就是帮助竹笋们上岸
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} className="title_2015">
        竹子的故事
      </Grid>

      <Grid item container alignItems="center">
        <Grid item md={6} xs={12} container justifyContent="center">
          <AwsImage className="width-95" src="ll1.png" />
        </Grid>
        <Grid item md={6} xs={12} container justifyContent="center">
          <div className="width-95">
            <div className="title">纽约竹子创始人</div>
            <Words
              listItems={[
                " 美国并购交M&A Consulting高级咨询顾问",
                "  先后就职美国德勤,安永,PIMCO,索尼总部",
                "6年华尔街金融战略财务咨询工作经验",
                " 四大校园面试招聘官, 项目经理",
                "    美国注册会计师, 独立顶尖职业咨询师",
                " 成功助力上百名求职学生斩获世界500强offer",
                "  如四大,花旗,亚马逊,字节跳动等",
                "    专栏作家, 自媒体人, 琵琶演奏者",
                "   纽约女性领导力论坛唯 亚裔女性演讲嘉宾",
                "美国高校客座嘉宾",
                "竹子会客厅发起人",
              ]}
            />
          </div>
        </Grid>
      </Grid>
      <Grid item>
        <TitleCards
          title="  一流的培训导师 "
          srcArray={["ds1.png", "ds2.png", "ds3.png"]}
        />
      </Grid>

      <Grid item xs={12} className="title_2015">
        我们的服务有
      </Grid>
      <Grid container direction="column" style={{ marginTop: "50px" }}>
        <OurService
          services={[
            { source1: "icon1.png", zi: "zi1.png" },
            { source1: "icon2.png", zi: "zi2.png" },
            { source1: "icon3.png", zi: "zi3.png" },
            { source1: "icon4.png", zi: "zi4.png" },
            { source1: "icon5.png", zi: "zi5.png" },
            { source1: "icon6.png", zi: "zi6.png" },
          ]}
        />
        <h1 className="hp-head3">
          <Link to="/jobCourse" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              求职课程
            </Button>
          </Link>
        </h1>
      </Grid>

      <GreenFoot>
        <div className="go-text-1">让我们开始吧！</div>
        <div className="go-text-2">让我来帮助你实现你的职场目标</div>
      </GreenFoot>
    </Grid>
  );
}
