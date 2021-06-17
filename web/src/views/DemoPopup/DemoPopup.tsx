import { createElement, useState } from "react";
import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, Popup } from "@hs";

export declare interface DemoPopupProps {}

function DemoPopup(props: DemoPopupProps) {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <SplitLine title={"popup"}></SplitLine>
      <Popup show={flag} onCancel={() => setFlag(false)}>
        123
      </Popup>
      <Button type={"primary"} onClick={() => setFlag(!flag)}>
        toggle
      </Button>
    </div>
  );
}

export default DemoPopup;
