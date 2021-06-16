import { createElement } from "react";
import { Image } from "@hs";

export declare interface DemoImageProps {}

function DemoImage(props: DemoImageProps) {
  return (
    <div>
      <Image
        src={"https://ssl-pubpic.51yund.com/904516370.jpg"}
        fit={"contain"}
      ></Image>
      <Image
        src={"https://ssl-pubpic.51yund.com/904516370.jpg"}
        fit={"cover"}
        round={true}
      ></Image>
    </div>
  );
}

export default DemoImage;
