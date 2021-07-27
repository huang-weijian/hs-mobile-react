import SplitLine from "@/components/SplitLine/SplitLine";
import { Divider } from "@hs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoDividerProps {}

const propsStr = `interface IDividerClassName {
  className?: string;
  lineClassName?: string;
  txtClassName?: string;
}

interface IDividerProps extends IDividerClassName {
  position?: "left" | "center" | "right";
  type?: types;
  /**
   * 分割线的颜色
   * divider color
   */
  lineColor?: string;
  /**
   * 字体的颜色
   * font color
   */
  color?: string;
  /**
   * 是否使用虚线
   * use dashed line
   */
  dashed?: boolean;
  children?: ReactChild;
}`;

function DemoDivider(props: IDemoDividerProps) {
  return (
    <div>
      <SplitLine title={"divider 分割线"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <Divider type={"primary"}></Divider>
      <Divider type={"primary"}>primary</Divider>
      <Divider type={"success"}>success</Divider>
      <Divider type={"danger"}>danger</Divider>
      <Divider type={"warning"}>warning</Divider>
      <Divider type={"info"}>info</Divider>
      <Divider type={"default"}>default</Divider>
      <Divider dashed>dashed</Divider>
      <SplitLine title={"position 位置"}></SplitLine>
      <Divider position={"left"}>left long txt</Divider>
      <Divider position={"right"}>
        <span>right long txt</span>
      </Divider>
      <SplitLine title={"custom line color 自定义线颜色"}></SplitLine>
      <Divider lineColor={"purple"}>line color</Divider>
      <SplitLine title={"custom color 自定义颜色"}></SplitLine>
      <Divider color={"purple"}>txt color</Divider>
    </div>
  );
}

namespace DemoDivider {
  export let displayName: string = `DemoDivider`;
}

export default DemoDivider;
