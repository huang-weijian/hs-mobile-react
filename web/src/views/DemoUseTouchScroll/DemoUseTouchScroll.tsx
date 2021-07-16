import SplitLine from "@/components/SplitLine/SplitLine";
import { MutableRefObject, useRef, useState } from "react";
import { useTouchScroll } from "@hs";
import "./index.less";

export declare interface IDemoUseTouchScrollProps {}

function DemoUseTouchScroll(props: IDemoUseTouchScrollProps) {
  const [list] = useState<number[]>(function () {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(i);
    }
    return arr;
  });
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  const { isMoving, positions, moveMultiple } = useTouchScroll({ ref: ref });

  return (
    <div>
      <SplitLine title={"useTouchScroll"}></SplitLine>
      <p className={"demo-p"}>isMoving：{String(isMoving)}</p>
      <p className={"demo-p"}>start：{JSON.stringify(positions.start)}</p>
      <p className={"demo-p"}>
        deviation：{JSON.stringify(positions.deviation)}
      </p>
      <p className={"demo-p"}>base：{JSON.stringify(positions.base)}</p>
      <p className={"demo-p"}>result：{JSON.stringify(positions.result)}</p>
      <p className={"demo-p"}>moveMultiple:{moveMultiple}</p>
      <div className={"demo-container"}>
        <div
          style={{
            transform: `translate(${
              positions.base.x + positions.deviation.x
            }px,${positions.base.y + positions.deviation.y}px)`,
          }}
          ref={ref}
        >
          {list.map((item) => (
            <div
              style={{ color: "white", textAlign: "center", margin: "10px 0" }}
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
