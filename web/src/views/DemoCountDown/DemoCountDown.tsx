import SplitLine from "@/components/SplitLine/SplitLine";
import { CountDown } from "@hs";

export declare interface IDemoCountDownProps {}

function DemoCountDown(props: IDemoCountDownProps) {
  return (
    <div>
      <SplitLine title={"countDown"}></SplitLine>
      <CountDown time={10 * 1000}></CountDown>
    </div>
  );
}

namespace DemoCountDown {
  export let displayName: string = `DemoCountDown`;
}

export default DemoCountDown;
