import React from "react";
import { Grid } from "@material-ui/core";

import { getImageURL } from "../../../util";
import AwsImage from "../../../univers/awsImage";
export function CompaniesSent({ srcs }) {
  return (
    <Grid item container spacing={3}>
      {srcs.map((src) => (
        <Grid item md={3} sm={4} xs={12} container justifyContent="center">
          <AwsImage src={src} className="hp-head-img" />
        </Grid>
      ))}
    </Grid>
  );
}
