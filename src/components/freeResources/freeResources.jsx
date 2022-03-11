import React from "react";
import "./freeResources.css";
import { GreenFoot } from "../../univers/greenFoot";
import { Grid } from "@material-ui/core";
import RepeatCom from "../../univers/repeatCom";
import AwsImage from "../../univers/awsImage";
export default function FreeResources() {
  return (
    <div>
      <Grid container direction="column" spacing={10}>
        <Grid item container alignItems="center">
          <Grid item xs={12}>
            <div className="title">竹子会客厅</div>
            <div item className="text2">
              纽约竹子会客厅作为纽约竹子的精品系列活动，我们会定期邀请不同领域的嘉
              宾，通过与竹子老师访谈的形式，向大家展示最直接最有用的求职干货，内容
              涉及财务，咨询，金融，数据，计算机，市场等各种领域，请大家多多关注纽
              约竹子公众号，及时获取每期纽约竹子会客厅的信息。
            </div>
          </Grid>
        </Grid>

        <RepeatCom
          src="img-12.png"
          content=<div>
            <p className="img-text-1-text-title">
              拥抱危机，突破自我，成就事业
            </p>
            <p className="img-text-1-text-title">
              数据 ｜ 金融 ｜产品经理 ｜ 职业转型
            </p>
            <p className="img-text-1-text-1">
              非顶尖美本｜非顶尖GPA｜0 internship
            </p>
            <div className="two-pics">
              <a href="https://mp.weixin.qq.com/s/K61CjDOz7QEaPHhZACrXWA">
                <AwsImage src="deco4.png" width="40px" />
              </a>
              <a href="https://www.youtube.com/watch?v=Y13iA_CcIIc">
                <AwsImage src="deco5.png" width="40px" />
              </a>
            </div>
          </div>
        />

        <RepeatCom
          src="img-13.png"
          content=<div>
            <p className="img-text-1-text-title">
              数据 - 金融 - 产品，沃尔玛经理的
            </p>
            <p className="img-text-1-text-title"> 职业转型与人生目标</p>
            <p className="img-text-1-text-1">
              数据 ｜ 金融 ｜产品经理 ｜ 职业转型
            </p>
            <div className="two-pics">
              <a href="https://mp.weixin.qq.com/s/7xLUm152V_0URhR84hy6Ow">
                <AwsImage src="deco4.png" width="40px" />
              </a>
              <a href="https://www.youtube.com/watch?v=6BMsFZ4MQUg">
                <AwsImage src="deco5.png" width="40px" />
              </a>
            </div>
          </div>
        />

        <RepeatCom
          src="img-14.png"
          content=<div>
            <p className="img-text-1-text-title">
              从德勤咨询到亚马逊的客户方案经理
            </p>
            <p className="img-text-1-text-title"> 职业转型和新年计划</p>
            <p className="img-text-1-text-1">咨询 ｜ 科技 ｜MBA | 时间管理</p>
            <div className="two-pics">
              <a href="https://mp.weixin.qq.com/s/N5DY8Jxc3-qk0cY5rPg0_A">
                <AwsImage src="deco4.png" width="40px" />
              </a>
              <a href="https://www.youtube.com/watch?v=YTUCSekohvM">
                <AwsImage src="deco5.png" width="40px" />
              </a>
            </div>
          </div>
        />

        <RepeatCom
          src="img-15.png"
          content=<div>
            <p className="img-text-1-text-title">2020年精华回顾：</p>
            <p className="img-text-1-text-title">感谢有你，一路相伴！</p>
            <p className="img-text-1-text-1">2020会客厅精华概括</p>
            <div className="two-pics">
              <a href="https://mp.weixin.qq.com/s/UFB_aaMsydr7dESH-z-tFQ">
                <AwsImage src="deco4.png" width="40px" />
              </a>
              <a href="https://www.youtube.com/watch?v=9Mk08qEumUw">
                <AwsImage
                  src="deco5.png"
                  width="40px"
                  className="img-text-1-text-5"
                />
              </a>
            </div>
          </div>
        />

        <RepeatCom
          src="img-16.png"
          content=<div>
            <p className="img-text-1-text-title">亚马逊数据科学家的职场秘籍</p>
            <p className="img-text-1-text-1">科技 ｜ 职业转型 ｜数据</p>
            <div className="two-pics">
              <a href="https://mp.weixin.qq.com/s/Fp7B9E8EJLzOCYo2c-nXCA">
                <AwsImage src="deco4.png" width="40px" />
              </a>
              <a href="https://www.youtube.com/watch?v=-d7Gjomg_2o">
                <AwsImage
                  src="deco5.png"
                  width="40px"
                  className="img-text-1-text-5"
                />
              </a>
            </div>
          </div>
        />

        <GreenFoot>
          <div className="go-text-2">准备好在职场上更进一步了吗</div>
        </GreenFoot>
      </Grid>
    </div>
  );
}
