import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, CountDown } from "@hs";
import { MutableRefObject, useRef, useState } from "react";
// @ts-ignore
import { ICountDownImperative } from "@hs/components/CountDown/CountDown";
import "./index.less";

export declare interface IDemoCountDownProps {}

function DemoCountDown(props: IDemoCountDownProps) {
  let ref =
    useRef<ICountDownImperative>() as MutableRefObject<ICountDownImperative>;
  let [flag, setFlag] = useState(true);

  return (
    <div>
      <SplitLine title={"countDown"}></SplitLine>
      <CountDown
        time={10 * 60 * 1000}
        ref={ref}
        colonClassName={"demo-colon-class"}
      ></CountDown>
      <div>
        <Button
          type={"primary"}
          onClick={() => {
            if (ref.current) {
              ref.current.restart();
            }
          }}
        >
          restart
        </Button>
        <Button
          type={"primary"}
          onClick={() => {
            if (ref.current) {
              ref.current.continue();
            }
          }}
        >
          continue
        </Button>
        <Button
          type={"primary"}
          onClick={() => {
            if (ref.current) {
              ref.current.stop();
            }
          }}
        >
          stop
        </Button>
      </div>
      <SplitLine title={"custom"}></SplitLine>
      <Button onClick={()=>setFlag(false)}>toggle</Button>
      {flag ? (
        <CountDown
          time={10 * 1000}
          render={(time) => {
            return `${time.day}天${time.hour}小时${time.minute}分${time.second}秒`;
          }}
        ></CountDown>
      ) : (
        <span>flag</span>
      )}
    </div>
  );
}

namespace DemoCountDown {
  export let displayName: string = `DemoCountDown`;
}

export default DemoCountDown;
