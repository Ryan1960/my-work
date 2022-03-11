import { useState } from "react";

export const useSelectImage = () => {
  const [selectedImage, setSelectedImage] = useState();

  const handleClickOpen = (src) => {
    setSelectedImage(src);
  };
  const handleClose = () => {
    setSelectedImage(undefined);
  };
  // handleClickOpen will change selectedImage; handleClickOpen will change because it takes in different src;
  // and handleClose will always takes in nothing
  // src here is 型参
  //  return [selectedImage, handleClickOpen, handleClose]; needs order
  return { handleClickOpen: handleClickOpen, handleClose, selectedImage };
};
