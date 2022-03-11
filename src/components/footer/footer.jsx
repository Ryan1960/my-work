import React from "react";
import { Grid } from "@material-ui/core";

import "./footer.css";
import AwsImage from "../../univers/awsImage";

export default function Footer() {
  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid
          item
          md={3}
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <div>求职课程及服务</div>
          <div>核心课程</div>
          <div>私人定制计划</div>
        </Grid>

        <Grid
          item
          md={3}
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <div>关于纽约竹子</div>
          <div>关于纽约竹子</div>
          <div>加入我们</div>
          <div>成为导师</div>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <div className="img6G">微信号</div>
          <div>
            <AwsImage src="二维码.JPG" className="img6" />
          </div>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <div className="img6G">公共微信号</div>
          <div>
            <AwsImage className="img6" src="公众号.bmp" />
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <a href="https://www.instagram.com/nancyyyychen/">
          <AwsImage src="ig.png" />
        </a>
        <a href="https://www.linkedin.com/in/nanzhuchen?challengeId=AQETaZo2g_wr7wAAAX9mKOeNL4VipxpNb9kmqlo6Y5A8RQYKujR78qdYlZLXYOKwGk9FXW_b8gH3lz1UUOtQfFJrEdhgr8ZH0Q&submissionId=2c0b0b8f-9534-da16-d40e-d11632694910">
          <AwsImage src="linkedin.png" />
        </a>
        <a href="https://www.youtube.com/channel/UCNBpegfn6yG_AfsoGBrAhWA">
          <AwsImage src="youtube.png" />
        </a>
      </Grid>
    </div>
  );
}
