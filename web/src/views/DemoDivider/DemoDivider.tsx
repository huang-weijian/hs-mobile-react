import SplitLine from "@/components/SplitLine/SplitLine";
import { Divider } from "@hs";

export declare interface IDemoDividerProps {}

function DemoDivider(props: IDemoDividerProps) {
  return (
    <div>
      <SplitLine title={"divider 分割线"}></SplitLine>
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
