import { MutableRefObject, useEffect, useRef, useState } from "react";

/**
 * 根据当前移动距离判断是上移还是下移多少基础高度
 * Judge whether to move up or down according to the current moving distance
 * @param y 移动的距离 deviation
 */
export function getFormatDeviation(
  y: number,
  base: number
): { deviation: number; multiple: number } {
  if (y === 0) {
    return { deviation: 0, multiple: 0 };
  }
  // 在选项之间
  // between data item
  let result = 0;
  let multiple = Math.round(y / base);
  let deviation = multiple * base;
  result = deviation;
  return { deviation: result, multiple: multiple };
}

export declare interface IUseTouchScrollParam<E extends HTMLElement> {
  ref: MutableRefObject<E>;
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  onMoveStart?: () => any;
  onMoving?: () => any;
  onMoveEnd?: () => any;
  // 位移基数，每次moving结束都会根据基数取向最接近倍数基数值
  // move deviation base,
  // At the end of each moving, the nearest multiple base value will be oriented according to the cardinality
  deviationBase?: number;
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
    // touch moving deviation
    deviation: IPosition;
    // 偏移量
    result: IPosition;
  };
  // 基础位移倍数
  // Foundation displacement multiple
  moveMultiple: number;
}

export default function useTouchScroll<E extends HTMLElement = HTMLElement>(
  param: IUseTouchScrollParam<E>
): IUseTouchScrollReturn {
  // scroll最远距离
  // scroll max deviation
  const [maxX, setMaxX] = useState<IPosition>({ x: 0, y: 0 });
  const [maxY, setMaxY] = useState<IPosition>({ x: 0, y: 0 });
  // scroll最远距离
  // scroll max deviation
  const [minX, setMinX] = useState<IPosition>({ x: 0, y: 0 });
  const [minY, setMinY] = useState<IPosition>({ x: 0, y: 0 });
  // 初始距离，每次位移结束都会改变
  // base position
  const [base, setBase] = useState<IPosition>({ x: 0, y: 0 });
  // 位移结果
  // moving result
  const [result, setResult] = useState<IPosition>({ x: 0, y: 0 });
  // 位移开始坐标
  const [start, setStart] = useState<IPosition>({ x: 0, y: 0 });
  // 每次touch拖动偏移量
  // each touch scroll deviation
  const [deviation, setDeviation] = useState<IPosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [multiple, setMultiple] = useState<number>(0);

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
          // 计算出位移结果
          // The displacement results are calculated
          let resultPosition: IPosition = {
            x: preDeviation.x,
            y: preDeviation.y,
          };
          // 计算出位移后的值
          // Calculate the value after displacement
          setResult(resultPosition);
          setBase((preBase) => ({
            x: preBase.x + resultPosition.x,
            y: preBase.y + resultPosition.y,
          }));
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
      result: result,
    },
    moveMultiple: multiple,
  };
}
