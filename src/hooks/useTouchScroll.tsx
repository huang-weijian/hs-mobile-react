import { MutableRefObject, useEffect, useRef, useState } from "react";

/**
 * 根据当前移动距离判断是上移还是下移多少基础高度
 * Judge whether to move up or down according to the current moving distance
 * @param y 移动的距离 deviation
 */
export function getFormatDeviation(y: number, base: number): number {
  if (y === 0) {
    return 0;
  }
  // 在选项之间
  // between data item
  let result = 0;
  let multiple = Math.round(y / base);
  let deviation = multiple * base;
  result = deviation;
  return result;
}

export declare interface IUseTouchScrollParam<E extends HTMLElement> {
  ref: MutableRefObject<E>;
  onMoveStart?: () => any;
  onMoving?: () => any;
  onMoveEnd?: () => any;
  // 位移基数，每次moving结束都会根据基数取向最接近倍数基数值
  // move deviation base,
  // At the end of each moving, the nearest multiple base value will be oriented according to the cardinality
  deviationXBase?: number;
  deviationYBase?: number;
}

export declare interface IPosition {
  x: number;
  y: number;
}

export declare interface IUseTouchScrollReturn {
  // 是否在移动中
  // is moving
  isMoving: boolean;
  // deviation return value
  positions: {
    // 位移之后的结果值
    base: IPosition;
    // position before moving
    start: IPosition;
    // 当次touch偏移值
    // touch moving deviation
    deviation: IPosition;
    // 格式化之后的偏移值
    formattedDeviation: IPosition;
  };
}

export default function useTouchScroll<E extends HTMLElement = HTMLElement>(
  param: IUseTouchScrollParam<E>
): IUseTouchScrollReturn {
  // 初始距离，每次位移结束都会改变
  // base position
  const [base, setBase] = useState<IPosition>({ x: 0, y: 0 });
  // 位移开始坐标
  const [start, setStart] = useState<IPosition>({ x: 0, y: 0 });
  // 每次touch拖动偏移量
  // each touch scroll deviation
  const [deviation, setDeviation] = useState<IPosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [deviationXBase] = useState<number>(param.deviationXBase || 0);
  const [deviationYBase] = useState<number>(param.deviationYBase || 0);

  useEffect(() => {
    // 防止页面滚动，要加在被移动的元素上，不能在react的绑定事件中阻止默认事件
    // Prevent page scroll,add to listener list of the element to be moving,
    // don't prevent default event in react event system
    if (param.ref.current) {
      let element = param.ref.current;
      element.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
        },
        {
          passive: false,
        }
      );
      element.addEventListener("touchstart", function (e) {
        let finger = e.changedTouches.item(0) as Touch;
        setStart({ x: finger.screenX, y: finger.screenY });
        setIsMoving(true);
      });
      element.addEventListener("touchmove", function (e) {
        let finger = e.changedTouches.item(0) as Touch;
        setStart((pre) => {
          setDeviation({
            x: finger.screenX - pre.x,
            y: finger.screenY - pre.y,
          });
          return pre;
        });
      });
      element.addEventListener("touchend", function (e) {
        setDeviation((preDeviation) => {
          setBase((preBase) => {
            let baseX = preBase.x + preDeviation.x;
            let baseY = preBase.y + preDeviation.y;
            if (deviationXBase) {
              baseX = getFormatDeviation(baseX, deviationXBase);
            }
            if (deviationYBase) {
              baseY = getFormatDeviation(baseY, deviationYBase);
            }
            return {
              x: baseX,
              y: baseY,
            };
          });
          // 归零
          // return zero
          return { x: 0, y: 0 };
        });
        setIsMoving(false);
      });
    }
  }, []);
  return {
    isMoving: isMoving,
    positions: {
      base: base,
      start: start,
      deviation: deviation,
      formattedDeviation: deviation,
    },
  };
}
