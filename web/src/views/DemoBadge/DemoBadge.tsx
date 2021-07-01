import SplitLine from "@/components/SplitLine/SplitLine";
import { Badge, Button } from "@hs";
import "./index.less";

export declare interface IDemoBadgeProps {}

function DemoBadge(props: IDemoBadgeProps) {
  return (
    <div>
      <SplitLine title={"badge"}></SplitLine>
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
