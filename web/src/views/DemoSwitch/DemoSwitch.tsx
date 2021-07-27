import SplitLine from "@/components/SplitLine/SplitLine";
import { Switch } from "@hs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoSwitchProps {}

const propsStr = `interface ISwitchProps {
  value?: boolean;
  className?: string;
  torusClassName?: string;
  /**
   * 开启的背景颜色
   * active background color
   */
  activeColor?: string;
  /**
   * 未开启的背景颜色
   * inactive background color
   */
  inactiveColor?: string;
  disabled?: boolean;
  onChange?: (active: boolean) => void;
}`;

function DemoSwitch(props: IDemoSwitchProps) {
  return (
    <div>
      <SplitLine title={"switch"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <Switch value={true}></Switch>
      <Switch
        activeColor={"red"}
        inactiveColor={"black"}
        onChange={(check) => console.info(check)}
      ></Switch>
      <SplitLine title={"disabled"}></SplitLine>
      <Switch value={true} disabled></Switch>
    </div>
  );
}

namespace DemoSwitch {
  export const displayName: string = `DemoSwitch`;
}

export default DemoSwitch;
