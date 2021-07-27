import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, CountDown, Field } from "@hs";
import { MutableRefObject, useRef, useState } from "react";
// @ts-ignore
import { ICountDownImperative } from "@hs/components/CountDown/CountDown";
import "./index.less";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoCountDownProps {}

const propsStr = `interface ICountDownProps {
  /**
   * 倒计时数，单位毫秒
   * countdown, unit millisecond
   */
  time: number;
  /**
   * 间隔时间
   * Interval time
   */
  interval?: number;
  /**
   * 递减值
   * decreasing value
   */
  decreasing?: number;
  style?: CSSProperties;
  className?: string;
  dayClassName?: string;
  hourClassName?: string;
  minuteClassName?: string;
  secondClassName?: string;
  colonClassName?: string;
  render?: (time: ICountDownTime, remaining: number) => ReactChild;
}

interface ICountDownTime {
  day: number;
  hour: number;
  minute: number;
  second: number;
}
`;

function DemoCountDown(props: IDemoCountDownProps) {
  let ref =
    useRef<ICountDownImperative>() as MutableRefObject<ICountDownImperative>;
  let [val, setVal] = useState(0);

  return (
    <div>
      <p>
        推荐直接使用本包内的useCountDown
        hook，有更多的扩展方法，可随时更改递减时间、递减值等
      </p>
      <p>
        It is recommended to directly use useCountDown hook in this package.
        There are more extension methods, and you can change the decrement time
        and decrement value at any time
      </p>
      <SplitLine title={"countDown"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <CountDown
        time={10 * 60 * 1000}
        ref={ref}
        interval={1000}
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
      <p>
        <Field type={"int"} onInput={(val) => setVal(parseInt(val))}></Field>
        <Button
          size={"mini"}
          type={"primary"}
          onClick={() => {
            if (ref.current) {
              ref.current.restart(val);
            }
          }}
        >
          reset input
        </Button>
      </p>
      <SplitLine title={"custom"}></SplitLine>
      <CountDown
        time={10 * 1000}
        render={(time) => {
          return `${time.day}天${time.hour}小时${time.minute}分${time.second}秒`;
        }}
      ></CountDown>
    </div>
  );
}

namespace DemoCountDown {
  export let displayName: string = `DemoCountDown`;
}

export default DemoCountDown;
