import { createElement } from "react";
import { Image } from "@hs";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface DemoImageProps {}

function DemoImage(props: DemoImageProps) {
  return (
    <div>
      <SplitLine title={"image"}></SplitLine>
      <Image
        src={"https://ssl-pubpic.51yund.com/904516370.jpg"}
        fit={"contain"}
      ></Image>
      <Image
        src={"https://ssl-pubpic.51yund.com/904516370.jpg"}
        fit={"cover"}
        round={true}
      ></Image>
      <Image
        src={"https://ssl-pubpic.51yund.com/90451370.jpg"}
        fit={"cover"}
        radius={"20px"}
        round={true}
      ></Image>
      <Image
        src={"https://ssl-pubpic.51yund.com/90451370.jpg"}
        fit={"cover"}
        loadingNode={<div>hahaha</div>}
        errorNode={<div>ohno</div>}
        radius={"20px"}
        round={true}
      ></Image>
      <Image
        width={"60px"}
        height={"60px"}
        src={"https://ssl-pubpic.51yund.com/90451370.jpg"}
        fit={"cover"}
        loadingNode={<div>hahaha</div>}
        errorNode={<div>ohno</div>}
        round={true}
      ></Image>
    </div>
  );
}

export default DemoImage;
