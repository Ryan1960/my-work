import { Grid } from "@material-ui/core";
import React from "react";
import AwsImage from "../../../univers/awsImage";
import "./classes.css";
export default function Classes({ infos }) {
  return (
    <Grid container className="qz-body-2">
      {infos.map((info) => (
        <Grid
          item
          container
          direction="column"
          md={3}
          sm={4}
          xs={12}
          alignItems="center"
        >
          <Grid item>
            <AwsImage src={info.src} className="qz-body-2-img" />
          </Grid>
          <Grid item>
            <p>{info.title}</p>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
