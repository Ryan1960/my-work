import { Grid } from "@material-ui/core";
import React from "react";
import AwsImage from "../../../univers/awsImage";
import "./ourService.css";

export function OurService({ services }) {
  return (
    <Grid container className="selc_100">
      {services.map((service) => (
        <Grid
          item
          container
          md={4}
          xs={12}
          direction="column"
          justifyContent="center"
        >
          <Grid item className="secD">
            <AwsImage src={service.source1} className="pics" />
          </Grid>
          <Grid item>
            <AwsImage src={service.zi} className="pics" />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
