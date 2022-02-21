import React from "react";
import { Grid } from "@material-ui/core";
import ig from "./img/ig.png";
import linkedin from "./img/linkedin.png";
import youtube from "./img/youtube.png";
import img6 from "./img/img-6.jpg";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <div className="selectF">
        <Grid container className="selcF1" justifyContent="space-evenly">
          <Grid item xs={2.5}>
            <div>求职课程及服务</div>
            <div>核心课程</div>
            <div>私人定制计划</div>
          </Grid>
          <Grid item xs={2.5}>
            <div>条款与政策</div>
            <div>核心课程</div>
            <div>版权政策</div>
            <div>用户服务条款</div>
            <div>导师服务条款</div>
          </Grid>
          <Grid item xs={2.5}>
            <div>关于纽约竹子</div>
            <div>关于纽约竹子</div>
            <div>加入我们</div>
            <div>成为导师</div>
          </Grid>
          <Grid item xs={2.5}>
            <div className="img6G">关注我们</div>
            <div>
              <img className="img6" src={img6} />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="img6G">关注我们</div>
            <div>
              <img className="img6" src={img6} />
            </div>
          </Grid>
        </Grid>
        <hr />
        <div className="bottom-img">
          <img src={ig} />
          <img src={linkedin} />
          <img src={youtube} />
        </div>
      </div>
    </div>
  );
}
