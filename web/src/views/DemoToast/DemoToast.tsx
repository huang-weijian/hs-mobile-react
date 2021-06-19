import { createElement } from "react";
import { Toast } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface DemoToastProps {}

function DemoToast(props: DemoToastProps) {
  return (
    <div>
      <SplitLine title={"Toast"}></SplitLine>
      <p>Toast的自带图标是dom和css</p>
      <p>Toast's icons are from dom node</p>
      <SplitLine title={"loading"}></SplitLine>
      <Toast msg={"loading"}></Toast>
      <Toast msg={"1231423412897312897391287"}></Toast>
    </div>
  );
}

export default DemoToast;
