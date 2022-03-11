import { Grid } from "@material-ui/core";
import React from "react";
import AwsImage from "./awsImage";
import "./repeatCom.css";
export default function RepeatCom({ src, title, content, href }) {
  return (
    <Grid item container alignItems="center">
      <Grid item md={6} xs={12} container justifyContent="center">
        <a href={href} className="href">
          <AwsImage className="width-70" src={src} />
        </a>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
      >
        <div className="messages">
          <div className="text">{content}</div>
        </div>
      </Grid>
    </Grid>
  );
}
