import Checkbox from "../../../../src/components/Checkbox";
import SplitLine from "@/components/SplitLine/SplitLine";
import { useState } from "react";

export declare interface IDemoCheckboxProps {}

function DemoCheckbox(props: IDemoCheckboxProps) {
  let [check, setCheck] = useState(false);
  return (
    <div>
      <SplitLine title={"checkbox"}></SplitLine>
      <Checkbox
        isCheck={check}
        label={"Checkbox"}
        onChange={() => setCheck((preCheck) => !preCheck)}
      ></Checkbox>
    </div>
  );
}

export default DemoCheckbox;
