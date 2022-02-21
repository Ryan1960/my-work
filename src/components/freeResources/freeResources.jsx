import { Grid } from "@material-ui/core";
import React from "react";
import "./freeResources.css";
import img12 from "./img/img-12.png";
import deco4 from "./img/deco4.png";
import deco5 from "./img/deco5.png";
export default function FreeResources() {
  return (
    <div>
      <div className="title-1">竹子会客厅</div>
      <div className="title-text-1">
        <p>
          纽约竹子会客厅作为纽约竹子的精品系列活动，我们会定期邀请不同领域的嘉
          宾，通过与竹子老师访谈的形式，向大家展示最直接最有用的求职干货，内容
          涉及财务，咨询，金融，数据，计算机，市场等各种领域，请大家多多关注纽
          约竹子公众号，及时获取每期纽约竹子会客厅的信息。
        </p>
      </div>
      <div className="one1">
        <div className="oneG">
          <img className="oneP" src={img12} width="400px" />
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">拥抱危机，突破自我，成就事业</p>
          <p className="img-text-1-text-1">
            数据 ｜ 金融 ｜产品经理 ｜ 职业转型
          </p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/K61CjDOz7QEaPHhZACrXWA">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=Y13iA_CcIIc">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="one">
        <div className="oneG">
          <img className="oneP" src={img12} width="400px" />
        </div>
        <div className="oneG2">
          <p className="img-text-1-text-title">
            数据 - 金融 - 产品，沃尔玛经理的
          </p>
          <p className="img-text-1-text-title"> 职业转型与人生目标</p>
          <p className="img-text-1-text-1">
            数据 ｜ 金融 ｜产品经理 ｜ 职业转型
          </p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/K61CjDOz7QEaPHhZACrXWA">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=Y13iA_CcIIc">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </div>
      </div>
      <Grid className="two" container>
        <Grid className="oneG" item xs={6}>
          <img className="oneP" src={img12} width="400px" />
        </Grid>
        <Grid className="oneG2" item xs={6}>
          <p className="img-text-1-text-title">
            从德勤咨询到亚马逊的客户方案经理
          </p>
          <p className="img-text-1-text-title"> 职业转型和新年计划</p>
          <p className="img-text-1-text-1">咨询 ｜ 科技 ｜MBA | 时间管理</p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/K61CjDOz7QEaPHhZACrXWA">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=Y13iA_CcIIc">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid className="three" container>
        <Grid className="oneG" item xs={6}>
          <img className="oneP" src={img12} width="400px" />
        </Grid>
        <Grid className="oneG2" item xs={6}>
          <p className="img-text-1-text-title">2020年精华回顾：</p>
          <p className="img-text-1-text-1">感谢有你，一路相伴！</p>
          <p className="img-text-1-text-1">2020会客厅精华概括</p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/K61CjDOz7QEaPHhZACrXWA">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=Y13iA_CcIIc">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid className="two" container>
        <Grid className="oneG" item xs={6}>
          <img className="oneP" src={img12} width="400px" />
        </Grid>
        <Grid className="oneG2" item xs={6}>
          <p className="img-text-1-text-title">亚马逊数据科学家的职场秘籍</p>

          <p className="img-text-1-text-1">科技 ｜ 职业转型 ｜数据</p>
          <hr className="img-text-1-text-2" />
          <div className="img-text-1-text-4">
            <a href="https://mp.weixin.qq.com/s/K61CjDOz7QEaPHhZACrXWA">
              <img src={deco4} width="40px" />
            </a>
            <a href="https://www.youtube.com/watch?v=Y13iA_CcIIc">
              <img src={deco5} width="40px" className="img-text-1-text-5" />
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
