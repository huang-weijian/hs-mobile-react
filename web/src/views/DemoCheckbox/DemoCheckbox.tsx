import { Checkbox } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";
import { useState } from "react";

export declare interface IDemoCheckboxProps {}

function DemoCheckbox(props: IDemoCheckboxProps) {
  let [check, setCheck] = useState(false);
  let [colorCheck, setColorCheck] = useState(false);
  let [customCheck, setCustomCheck] = useState(false);
  return (
    <div>
      <SplitLine title={"checkbox"}></SplitLine>
      <Checkbox
        isCheck={check}
        label={"Checkbox"}
        onChange={() => setCheck((preCheck) => !preCheck)}
      ></Checkbox>
      <SplitLine title={"color checkbox"}></SplitLine>
      <Checkbox
        isCheck={colorCheck}
        iconColor={"#67c23a"}
        label={"Checkbox"}
        onChange={() => setColorCheck((colorCheck) => !colorCheck)}
      ></Checkbox>
      <SplitLine title={"custom icon"}></SplitLine>
      <Checkbox
        isCheck={customCheck}
        label={"Checkbox"}
        iconRender={(checkBox) => {
          if (checkBox.isCheck) {
            return <span>+</span>;
          }
          return <span>-</span>;
        }}
        onChange={() => setCustomCheck((customCheck) => !customCheck)}
      ></Checkbox>
    </div>
  );
}

export default DemoCheckbox;
