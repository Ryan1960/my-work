import React from "react";
import deco1 from "./img/deco1.png";
import deco2 from "./img/deco2.png";
import deco3 from "./img/deco3.png";
import Avatar06 from "./img/Avatar06.png";
import Avatar04 from "./img/Avatar04.png";
import Avatar03 from "./img/Avatar03.png";
import Avatar07 from "./img/Avatar07.png";
import zixun from "./img/zixun.png";
import ba from "./img/ba.png";
import investorBank from "./img/investorBank.png";
import finance from "./img/finance.png";
import pr from "./img/pr.png";
import mkt from "./img/mkt.png";
import it from "./img/it.png";
import quant from "./img/quant.png";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import icon5 from "./img/icon5.png";
import icon6 from "./img/icon6.png";
import icon7 from "./img/icon7.png";
import icon8 from "./img/icon8.png";
import icon9 from "./img/icon9.png";
import icon10 from "./img/icon10.png";
import icon11 from "./img/icon11.png";
import icon12 from "./img/icon12.png";
import icon13 from "./img/icon13.png";
import icon14 from "./img/icon14.png";
import icon15 from "./img/icon15.png";
import icon16 from "./img/icon16.png";
import icon17 from "./img/icon17.png";
import zi1 from "./img/zi1.png";
import zi2 from "./img/zi2.png";
import zi3 from "./img/zi3.png";
import zi4 from "./img/zi4.png";
import zi5 from "./img/zi5.png";
import zi6 from "./img/zi6.png";
import zi7 from "./img/zi7.png";
import zi8 from "./img/zi8.png";
import zi9 from "./img/zi9.png";
import zi10 from "./img/zi10.png";
import zi11 from "./img/zi11.png";
import zi12 from "./img/zi12.png";
import zi13 from "./img/zi13.png";
import zi14 from "./img/zi14.png";
import zi15 from "./img/zi15.png";
import zi16 from "./img/zi16.png";
import zi17 from "./img/zi17.png";
import deco18 from "./img/deco3.png";

import "./jobCourse.css";
import { Grid } from "@material-ui/core";
export default function JobCourse() {
  return (
    <div className="job">
      <div className="one">
        <div className="qz-head">求职课程</div>
        <img src={deco2} className="qz-head-img2" alt="" />
        <div className="qz-head2">培训过程由竹子老师亲自跟踪回访，无小助手</div>
        <div className="qz-head3">参与，全程竹子亲自服务指导</div>
        <img src={deco1} className="qz-head-img1" />
        <div className="qz-text-3">
          <span className="qz-text-3-text">跟我联系</span>
        </div>
        <img src={deco3} className="qz-head-img3" />
      </div>
      <div className="two">
        <div className="qz-body-t">适合人群</div>
        <div className="qz-body-1">
          <div className="pictou1">
            <img src={Avatar06} className="qz-body-img1" />
            <p className="qz-body-p">本科在读，正在找实习或者</p>
            <p className="qz-body-p-1">全职工作</p>
          </div>
          <div className="pictou2">
            <img src={Avatar04} className="qz-body-img2" />
            <p className="qz-body-p2">硕士在读，正在找实习或者</p>
            <p className="qz-body-p2-1">全职工作</p>
          </div>
          <div className="pictou3">
            <img src={Avatar03} className="qz-body-img3" />
            <p className="qz-body-p3">初入职场的young</p>
            <p className="qz-body-p3-1">professional,遇到职场瓶</p>
            <p className="qz-body-p3-2">颈，想要跳槽或转行</p>
          </div>
          <div className="pictou4">
            <img src={Avatar07} className="qz-body-img4" />
            <p className="qz-body-p4">职场小白，需要提高交流能</p>
            <p className="qz-body-p4-1">力，商业谈判技巧等职场必</p>
            <p className="qz-body-p4-2">备软技能</p>
          </div>
        </div>
      </div>
      <div className="three">
        <div className="qz-body-t">课程类别</div>
        <div className="qz-body-2">
          <div className="picke1">
            <img src={zixun} className="qz-body-2-img" />
            <p className="qz-body-2-p-1">咨询</p>
          </div>

          <div className="picke1">
            <img src={ba} className="qz-body-2-img" />
            <p className="qz-body-2-p-2">商业分析</p>
          </div>

          <div className="picke1">
            <img src={investorBank} className="qz-body-2-img" />
            <p className="qz-body-2-p-3">投行</p>
          </div>
          <div className="picke1">
            <img src={finance} className="qz-body-2-img" />
            <p className="qz-body-2-p-4">金融</p>
          </div>
          <div className="picke1">
            <img src={pr} className="qz-body-2-img" />
            <p className="qz-body-2-p-5">销售&公关</p>
          </div>
          <div className="picke1">
            <img src={mkt} className="qz-body-2-img" />
            <p className="qz-body-2-p-6">数字市场</p>
          </div>
          <div className="picke1">
            <img src={it} className="qz-body-2-img" />
            <p className="qz-body-2-p-7">科技</p>
          </div>
          <div className="picke1">
            <img src={quant} className="qz-body-2-img" />
            <p className="qz-body-2-p-8">量化</p>
          </div>
        </div>
      </div>
      <div className="four">
        <div
          className="selectD"
          style={{ width: "100%", height: "100%", background: " #f7f9fb" }}
        >
          <h1 className="hp-head3">我们的服务有</h1>
          <Grid container className="selc_100" justifyContent="space-between">
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
          <Grid container className="selc_100" justifyContent="space-between">
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
          <Grid container className="selc_100" justifyContent="space-between">
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon7} className="secDP" />
              </div>
              <div>
                <img src={zi7} className="secDP" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon8} className="secDP" />
              </div>
              <div>
                <img src={zi8} className="secDP" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon9} className="secDP" />
              </div>
              <div className="">
                <img src={zi9} className="secDP" />
              </div>
            </Grid>
          </Grid>
          <Grid container className="selc_100" justifyContent="space-between">
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon10} className="secDP" />
              </div>
              <div>
                <img src={zi10} className="secDP" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon11} className="secDP" />
              </div>
              <div>
                <img src={zi11} className="secDP" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon12} className="secDP" />
              </div>
              <div className="">
                <img src={zi12} className="secDP" />
              </div>
            </Grid>
          </Grid>
          <Grid container className="selc_100" justifyContent="space-between">
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon13} className="secDP" />
              </div>
              <div>
                <img src={zi13} className="secDP" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon14} className="secDP" />
              </div>
              <div>
                <img src={zi14} className="secDP" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon15} className="secDP" />
              </div>
              <div className="">
                <img src={zi15} className="secDP" />
              </div>
            </Grid>
          </Grid>
          <Grid container className="selc_100" justifyContent="space-between">
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
          <Grid container className="selc_100">
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon16} className="secDP" />
              </div>
              <div>
                <img src={zi16} className="secDP" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="secD">
                <img src={icon17} className="secDP" />
              </div>
              <div>
                <img src={zi17} className="secDP" />
              </div>
            </Grid>
          </Grid>
          <div className="dadian">
            <img className="dadianP" src={deco18} />
            注：学员将在竹子老师指导下，挑选相关课程
          </div>
        </div>
      </div>
      <div className="five">
        <div className="selectE2">
          <div className="go-text-1">让我们开始吧！</div>
          <div className="go-text-2">让我来帮助你实现你的职场目标</div>
          <div className="go-text-3">免费咨询</div>
        </div>
      </div>
    </div>
  );
}
