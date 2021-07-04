import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, Picker, Popup } from "@hs";
import { useState } from "react";

export declare interface IDemoPickerProps {}

function DemoPicker(props: IDemoPickerProps) {
  let [show, setShow] = useState(false);
  return (
    <div>
      <SplitLine title={"picker"}></SplitLine>
      <div style={{ height: "40vh" }}>
        <Picker titleNode={"test"}></Picker>
      </div>
      <SplitLine title={"popup-picker"}></SplitLine>
      <Button type={"primary"} onClick={() => setShow(true)}>
        show popup
      </Button>
      <Popup
        position={"bottom"}
        show={show}
        onCancel={() => setShow(false)}
        bodyStyle={{ height: "50vh" }}
        showClose={false}
      >
        <Picker titleNode={"popup picker"} cancelNode={"no"} sureNode={"yes"}></Picker>
      </Popup>
      <SplitLine title={"date-picker"}></SplitLine>
    </div>
  );
}

namespace DemoPicker {
  export const displayName: string = `DemoPicker`;
}

export default DemoPicker;
