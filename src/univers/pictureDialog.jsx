import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Close } from "@material-ui/icons";
import AwsImage from "./awsImage";
export default function PictureDialog({ selectedImage, handleClose }) {
  return (
    //it will be open when there is a selected image
    // PictureDialog is what it looks like after clicking
    <Dialog open={!!selectedImage} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        Is this the picture you are looking for?
        <Button
          onClick={handleClose}
          color="primary"
          style={{ float: "right" }}
        >
          <Close />
        </Button>
      </DialogTitle>
      <DialogContent>
        <AwsImage src={selectedImage} className="chp-head-img" />
      </DialogContent>
    </Dialog>
  );

  /**
   *   // we have goals regarding selected image:
   * first: to decide whether to open(something=>open; underfined=>close)
   * second: send in to img as src
   *   </DialogContent> shows what inside the Popup.
   */
}
