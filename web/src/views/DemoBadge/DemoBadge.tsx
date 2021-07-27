import SplitLine from "@/components/SplitLine/SplitLine";
import { Badge, Button } from "@hs";
import "./index.less";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoBadgeProps {}

const propsStr = `interface IBadgeProps {
  /**
   * badge的类型
   * badge type
   */
  type?: "primary" | "danger" | "warning" | "info";
  content?: ReactChild;
  className?: string;
  style?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  children?: ReactChild;
  contentOnClick?: MouseEventHandler<HTMLSpanElement>;
}`;

function DemoBadge(props: IDemoBadgeProps) {
  return (
    <div>
      <SplitLine title={"badge"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <Badge content={666}>
        <span className={"badge-box"}></span>
      </Badge>
      <Badge type={"warning"} content={"++"}>
        <span className={"badge-box"}></span>
      </Badge>
      <Badge type={"danger"} content={"99+"}>
        <span className={"badge-box"}></span>
      </Badge>
      <Badge type={"info"} content={<span>123</span>}>
        <span className={"badge-box"}></span>
      </Badge>
      <SplitLine title={"none"}></SplitLine>
      <Badge type={"primary"}>
        <span className={"badge-box"}></span>
      </Badge>
      <Badge type={"danger"}>
        <span className={"badge-box"}></span>
      </Badge>
      <Badge type={"warning"}>
        <span className={"badge-box"}></span>
      </Badge>
      <Badge type={"info"}>
        <span className={"badge-box"}></span>
      </Badge>
      <SplitLine title={"another component"}></SplitLine>
      <Badge type={"danger"} content={"99+"}>
        <Button type={"primary"}>聊天</Button>
      </Badge>
      <Button type={"primary"}>聊天</Button>
    </div>
  );
}

namespace DemoBadge {
  export const displayName: string = `DemoBadge`;
}

export default DemoBadge;
