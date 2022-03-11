import { Grid } from "@material-ui/core";
import React from "react";

import TitleCards from "./titleCard/titleCards";
import { GreenFoot } from "../../univers/greenFoot";

export default function MentorResources() {
  return (
    <div>
      <TitleCards title=" 咨询 " srcArray={["ds1.png", "ds2.png", "ds3.png"]} />
      <TitleCards title=" 金融 " srcArray={["ds4.png", "ds5.png", "ds6.png"]} />
      <TitleCards title=" 金融 " srcArray={["ds7.png"]} />
      <TitleCards
        title=" 数据科学 "
        srcArray={["ds8.png", "ds9.png", "ds10.png"]}
      />
      <TitleCards
        title="  产品经理 & 交互设计"
        srcArray={["ds11.png", "ds12.png", "ds13.png"]}
      />
      <GreenFoot>
        <div className="go-text-2">准备好在职场上更进一步了吗</div>
      </GreenFoot>
    </div>
  );
}
