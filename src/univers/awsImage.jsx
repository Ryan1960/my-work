import React from "react";
import { getImageURL } from "../util";

export default function AwsImage({ src, ...rest }) {
  return <img src={getImageURL(src)} {...rest} />;
}
