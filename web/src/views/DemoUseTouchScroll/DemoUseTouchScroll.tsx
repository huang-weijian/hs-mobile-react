import SplitLine from "@/components/SplitLine/SplitLine";
import { CSSProperties, MutableRefObject, useRef, useState } from "react";
import { useTouchScroll } from "@hs";
import "./index.less";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoUseTouchScrollProps {}

const propsStr = `interface IUseTouchScrollParam<E extends HTMLElement> {
  ref: MutableRefObject<E>;
  // 位移基数，每次moving结束都会根据基数取向最接近倍数基数值
  // move deviation base,
  // At the end of each moving, the nearest multiple base value will be oriented according to the cardinality
  deviationXBase?: number;
  deviationYBase?: number;
}

interface IPosition {
  x: number;
  y: number;
}

interface IDeviation {
  x: number;
  y: number;
}

interface IUseTouchScrollReturn {
  // 是否在移动中
  // is moving
  isMoving: boolean;
  // deviation return value
  positions: {
    // 位移之后的结果值
    // move result
    base: IDeviation;
    // 位移开始位置
    // position before moving
    start: IPosition;
    // 当次touch偏移值
    // touch moving deviation
    deviation: IDeviation;
    // Offset value after formatting
    // 格式化之后的偏移值
    formattedDeviation: IDeviation;
  };
}`;

function DemoUseTouchScroll(props: IDemoUseTouchScrollProps) {
  const [list] = useState<number[]>(function () {
    let arr = [];
    for (let i = 0; i < 50; i++) {
      arr.push(i);
    }
    return arr;
  });
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  const { isMoving, positions } = useTouchScroll({
    ref: ref,
    deviationYBase: 80,
  });
  let transitionStyle: CSSProperties = {
    transition: "transform 200ms linear",
  };

  return (
    <div>
      <SplitLine title={"useTouchScroll"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <p className={"demo-p"}>isMoving：{String(isMoving)}</p>
      <p className={"demo-p"}>start：{JSON.stringify(positions.start)}</p>
      <p className={"demo-p"}>
        deviation：{JSON.stringify(positions.deviation)}
      </p>
      <p className={"demo-p"}>
        formattedDeviation：{JSON.stringify(positions.formattedDeviation)}
      </p>
      <p className={"demo-p"}>base：{JSON.stringify(positions.base)}</p>
      <div className={"demo-container"}>
        <div
          style={{
            ...{
              transform: `translate(${
                positions.base.x + positions.deviation.x
              }px,${positions.base.y + positions.deviation.y}px)`,
              ...(isMoving ? {} : transitionStyle),
            },
          }}
          ref={ref}
        >
          {list.map((item) => (
            <div
              style={{
                color: "white",
                textAlign: "center",
                margin: "10px 0",
                border: "1px white solid",
              }}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

namespace DemoUseTouchScroll {
  export let displayName: string = `DemoUseTouchScroll`;
}

export const COM_PREFIX = ``;

export default DemoUseTouchScroll;
