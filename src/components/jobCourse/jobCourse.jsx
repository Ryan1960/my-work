import React from "react";
import "./jobCourse.css";
import { Grid } from "@material-ui/core";
import { GreenFoot } from "../../univers/greenFoot";
import Classes from "./classes/classes";
import { OurService } from "./ourService/ourService";
import AwsImage from "../../univers/awsImage";

export default function JobCourse() {
  return (
    <Grid container direction="column" spacing={10}>
      <Grid item container alignItems="center">
        <Grid item xs={12}>
          <div className="title">求职课程</div>
          <div item className="text2">
            培训过程由竹子老师亲自跟踪回访，无小助手
          </div>
          <div item className="text2">
            参与，全程竹子亲自服务指导
          </div>
        </Grid>
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
      </Grid>

      <Grid container direction="column" style={{ marginTop: "50px" }}>
        <Grid item className="qz-body-t">
          适合人群
        </Grid>
        <Grid item container>
          <Grid
            item
            container
            direction="column"
            md={3}
            sm={4}
            xs={12}
            alignItems="center"
          >
            <AwsImage src="Avatar06.png" className="qz-body-2-img" />
            <p className="qz-body-p">本科在读，正在找实习或者</p>
            <p className="qz-body-p-1">全职工作</p>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md={3}
            sm={4}
            xs={12}
            alignItems="center"
          >
            <AwsImage src="Avatar04.png" className="qz-body-2-img" />
            <p className="qz-body-p2">硕士在读，正在找实习或者</p>
            <p className="qz-body-p2-1">全职工作</p>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md={3}
            sm={4}
            xs={12}
            alignItems="center"
          >
            <AwsImage src="Avatar03.png" className="qz-body-2-img" />
            <p className="qz-body-p3">初入职场的young</p>
            <p className="qz-body-p3-1">professional,遇到职场瓶</p>
            <p className="qz-body-p3-2">颈，想要跳槽或转行</p>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md={3}
            sm={4}
            xs={12}
            alignItems="center"
          >
            <AwsImage src="Avatar07.png" className="qz-body-2-img" />
            <p className="qz-body-p4">职场小白，需要提高交流能</p>
            <p className="qz-body-p4-1">力，商业谈判技巧等职场必</p>
            <p className="qz-body-p4-2">备软技能</p>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="column" style={{ marginTop: "50px" }}>
        <Grid className="qz-body-t">课程类别</Grid>
        <Classes
          infos={[
            { src: "zixun.png", title: "咨询" },
            { src: "ba.png", title: "商业分析" },
            { src: "investorBank.png", title: "投行" },
            { src: "finance.png", title: "金融" },
            { src: "pr.png", title: "销售&公关" },
            { src: "mkt.png", title: "数字市场" },
            { src: "it.png", title: "科技" },
            { src: "quant.png", title: "量化" },
          ]}
        />
      </Grid>
      <Grid container direction="column" style={{ marginTop: "50px" }}>
        <Grid item className="qz-body-t">
          我们的服务有
        </Grid>
        <OurService
          services={[
            { source1: "icon1.png", zi: "zi1.png" },
            { source1: "icon2.png", zi: "zi2.png" },
            { source1: "icon3.png", zi: "zi3.png" },
            { source1: "icon4.png", zi: "zi4.png" },
            { source1: "icon5.png", zi: "zi5.png" },
            { source1: "icon6.png", zi: "zi6.png" },
            { source1: "icon7.png", zi: "zi7.png" },
            { source1: "icon8.png", zi: "zi8.png" },
            { source1: "icon9.png", zi: "zi9.png" },
            { source1: "icon10.png", zi: "zi10.png" },
            { source1: "icon11.png", zi: "zi11.png" },
            { source1: "icon12.png", zi: "zi12.png" },
            { source1: "icon13.png", zi: "zi13.png" },
            { source1: "icon14.png", zi: "zi14.png" },
            { source1: "icon15.png", zi: "zi15.png" },
            { source1: "icon16.png", zi: "zi16.png" },
            { source1: "icon17.png", zi: "zi17.png" },
          ]}
        />
      </Grid>
      <Grid item xs={12} className="title_2015">
        <AwsImage className="dadianP" src="deco3.png" />
        注：学员将在竹子老师指导下，挑选相关课程
      </Grid>
      <GreenFoot>
        <div className="go-text-1">让我们开始吧！</div>
        <div className="go-text-2">让我来帮助你实现你的职场目标</div>
      </GreenFoot>
    </Grid>
  );
}
