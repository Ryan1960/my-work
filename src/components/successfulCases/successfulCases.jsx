import React from "react";
import "./successfulCases.css";
import { GreenFoot } from "../../univers/greenFoot";
import { Grid } from "@material-ui/core";
import RepeatCom from "../../univers/repeatCom";

export default function SuccessfulCases() {
  return (
    <Grid container direction="column" spacing={10}>
      <Grid item container alignItems="center">
        <Grid item xs={12}>
          <div className="title">竹笋上岸故事</div>
          <div item className="text2">
            从事求职咨询这些年，
            竹子见证了太多竹笋们在竹子的指导后，通过自己的努
            力，成功拿下各大公司的offer, 实现了他们的目标和梦想。
          </div>
        </Grid>
      </Grid>

      <RepeatCom
        href="https://mp.weixin.qq.com/s/Tfmv8pbZ9jjA2s1gE_9acg"
        src="img-7.png"
        content=<div>
          <p className="img-text-1-text-title">
            从三次校招失败到收获美国德勤offter
          </p>
          <p className="img-text-1-text-title"> 你付出的努力一定会有回报的。</p>
          <p className="img-text-1-text-1">
            非顶尖美本｜非顶尖GPA｜0 internship
          </p>
        </div>
      />

      <RepeatCom
        href="https://mp.weixin.qq.com/s/By0HCvPkkgUclmq7n-3ylw"
        src="img-8.png"
        content=<div>
          <p className="img-text-1-text-title">一个月上岸，进入亚马逊</p>
          <p className="img-text-1-text-title"> 也没有那么难？</p>
          <p className="img-text-1-text-1">亚马逊</p>
        </div>
      />

      <RepeatCom
        href="https://mp.weixin.qq.com/s/Q3ePZa8VNmV-5bdMZfJ79Q"
        src="img-9.png"
        content=<div>
          <p className="img-text-1-text-title">斩获EY Offer，不仅需要实力，</p>
          <p className="img-text-1-text-title"> 更需要技巧。</p>
          <p className="img-text-1-text-1">安永</p>
        </div>
      />

      <RepeatCom
        href="https://mp.weixin.qq.com/s/3wHL7ausH_sQbtXaIBEc7Q"
        src="img-10.png"
        content=<div>
          <p className="img-text-1-text-title">
            成功圆梦华尔街 -- 小竹笋的四大
          </p>
          <p className="img-text-1-text-title"> 之路。</p>
          <p className="img-text-1-text-1">毕马威</p>
        </div>
      />

      <RepeatCom
        href="https://mp.weixin.qq.com/s/sBNzdzX1DaH2PXLCiBCmIQ"
        src="img-11.png"
        content=<div>
          <p className="img-text-1-text-title">小竹笋的成功之路</p>
          <p className="img-text-1-text-title"> 幸运只会关顾努力的人。</p>
          <p className="img-text-1-text-1">普华永道</p>
        </div>
      />
      <GreenFoot>
        <div className="go-text-2">准备好在职场上更进一步了吗</div>
      </GreenFoot>
    </Grid>
  );
}
//  the actual child I pass in <div className="go-text-2">准备好在职场上更进一步了吗</div>
