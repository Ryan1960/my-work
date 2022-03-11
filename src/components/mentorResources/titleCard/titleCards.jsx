import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Close } from "@material-ui/icons";
import PictureDialog from "../../../univers/pictureDialog";
import { useSelectImage } from "../../../univers/selectImage";

import "./titleCard.css";
import AwsImage from "../../../univers/awsImage";

export default function TitleCards({ title, srcArray }) {
  //by calling useSelectImage(), we get selectedImage, handleClickOpen, handleClose;
  const { selectedImage, handleClickOpen, handleClose } = useSelectImage();

  return (
    <div>
      <Grid item xs={12} className="title_2015">
        {title}
      </Grid>
      <Grid item container alignItems="center">
        {srcArray.map((src, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <AwsImage
              src={src}
              onClick={() => handleClickOpen(src)}
              className="chp-head-img"
            />
          </Grid>
        ))}
      </Grid>

      <PictureDialog selectedImage={selectedImage} handleClose={handleClose} />
    </div>
  );
}
