import { createElement } from "react";
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface DemoIconProps {}

function DemoIcon(props: DemoIconProps) {
  return (
    <div>
      <SplitLine title={"icon"}></SplitLine>
      <p>Hosy的自带图标是dom和css</p>
      <p>Hosy's icons are dom node</p>
      <p>未避免包太大，也有精力不足原因，推荐使用ant-design-icon</p>
      <p>
        t is not avoided that the bag is too large, and there are reasons for
        lack of energy, it is recommended to use ant-design-icon
      </p>
      <a href="https://ant.design/components/icon-cn/">ant-design-icon</a>
    </div>
  );
}

export default DemoIcon;
