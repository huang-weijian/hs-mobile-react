import { createElement } from "react";
import { Toast } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface DemoToastProps {}

function DemoToast(props: DemoToastProps) {
  return (
    <div>
      <SplitLine title={"loading"}></SplitLine>
      <Toast></Toast>
    </div>
  );
}

export default DemoToast;
