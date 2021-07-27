import { Checkbox } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoCheckboxProps {}

const propsStr = `interface ICheckboxProps {
  /**
   * 复选框是否选中
   * Check box's state
   */
  isCheck: boolean;
  /**
   * checkbox选项名称
   * checkbox option name
   */
  label?: string | number;
  /**
   *  图标的颜色
   *  icon color
   */
  iconColor?: string;
  /**
   * 图标渲染函数
   * icon render function
   */
  iconRender?: FunctionComponent<ICheckboxProps>;
  onChange?: MouseEventHandler<HTMLLabelElement>;
}`;

function DemoCheckbox(props: IDemoCheckboxProps) {
  let [check, setCheck] = useState(false);
  let [colorCheck, setColorCheck] = useState(false);
  let [customCheck, setCustomCheck] = useState(false);
  return (
    <div>
      <SplitLine title={"checkbox"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
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
