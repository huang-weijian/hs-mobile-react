import Checkbox from "../../../../src/components/Checkbox";
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface IDemoCheckboxProps {}

function DemoCheckbox(props: IDemoCheckboxProps) {
  return (
    <div>
      <SplitLine title={"checkbox"}></SplitLine>
      <Checkbox isCheck={false}></Checkbox>
    </div>
  );
}

export default DemoCheckbox;
