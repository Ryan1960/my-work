import { Grid } from "@material-ui/core";
import React from "react";
import "./greenFoot.css";
export function GreenFoot({ children }) {
  return (
    <Grid item container alignItems="center">
      <Grid item xs={12} className="selectE2">
        {children}
        <div className="go-text-3">实现梦想</div>
      </Grid>
    </Grid>
  );
}
