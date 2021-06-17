import { createElement } from "react";
import SplitLine from "@/components/SplitLine/SplitLine";
import { Popup } from "@hs";

export declare interface DemoPopupProps {}

function DemoPopup(props: DemoPopupProps) {
  return (
    <div>
      <SplitLine title={"popup"}></SplitLine>
      <Popup></Popup>
    </div>
  );
}

export default DemoPopup;
