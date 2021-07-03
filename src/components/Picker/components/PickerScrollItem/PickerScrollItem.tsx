import { prefix } from "../../../../string/txt";
import {
  getClassName,
  getCursorClassName,
  getCursorMiddleClassName,
  getCursorSpaceClassName,
  getLineClassName,
  getLineContainerClassName,
  getFormatDeviation,
} from "./func";
import {
  CSSProperties,
  MutableRefObject,
  ReactChild,
  TouchEventHandler,
  useDebugValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./style";

export declare interface IDataItem<T> {
  id: string;
  text: ReactChild;
  value: T;

  [props: string]: any;
}

export declare interface IPickerScrollItemProps<T = any> {
  data: Array<IDataItem<T>>;
  style?: CSSProperties;
  className?: string;
  select?: (data: IDataItem<T>) => void;
}

export const COM_PREFIX = `${prefix}-picker-scroll-item`;

interface ITouchPosition {
  x: number;
  y: number;
}

/**
 * 基础高度
 * base height
 */
export const BASE_HEIGHT: number = 14;
export const LINE_HEIGHT: number = 42;

function PickerScrollItem(props: IPickerScrollItemProps) {
  // hooks

  // states
  // 每一次移动完之后的位置
  // position after each move
  let [basePosition, setBasePosition] = useState<ITouchPosition>({
    x: 0,
    y: -BASE_HEIGHT,
  });
  useDebugValue(`"basePosition ${basePosition}`);
  // 开始移动的位置
  // Where to start moving
  let [startPosition, setStartPosition] = useState<ITouchPosition>({
    x: 0,
    y: 0,
  });
  // 偏移的距离
  // deviation
  let [deviation, setDeviation] = useState<ITouchPosition>({
    x: 0,
    y: 0,
  });
  // 移动结束的位置
  // position on the end
  let [endPosition, setEndPosition] = useState<ITouchPosition>({
    x: 0,
    y: 0,
  });
  let [transformStyle, setTransformStyle] = useState<CSSProperties>({
    transform: `translateY(${basePosition.y}px)`,
  });

  // refs
  let ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  // 防止页面滚动，要加在被移动的元素上，不能在react的绑定事件中阻止默认事件
  // Prevent page scroll,add to listener list of the element to be moving,
  // don't prevent default event in react event system

  // memos
  // style
  let style: CSSProperties = {
    ...{ height: "100%" },
    ...props.style,
  };
  let containerStyle: CSSProperties = {
    ...transformStyle,
  };
  // className
  let className = useMemo<string>(() => getClassName(props), []);
  let cursorClassName = useMemo<string>(() => getCursorClassName(props), []);
  let cursorMiddleClassName = useMemo<string>(
    () => getCursorMiddleClassName(props),
    []
  );
  let cursorSpaceClassName = useMemo<string>(
    () => getCursorSpaceClassName(props),
    []
  );
  let lineContainerClassName = useMemo<string>(
    () => getLineContainerClassName(props),
    []
  );
  let lineClassName = useMemo<string>(() => getLineClassName(props), []);

  // effects
  useEffect(() => {
    ref.current
      ? ref.current.addEventListener(
          "touchmove",
          (e) => {
            e.preventDefault();
          },
          {
            passive: false,
          }
        )
      : null;
  }, []);

  // event handler
  let touchStartHandler: TouchEventHandler<HTMLDivElement> = function (e) {
    // 只需要第一根手指
    // just the first finger
    let finger = e.changedTouches.item(0);
    setStartPosition({
      x: finger.clientX,
      y: finger.clientY,
    });
  };
  let touchMove: TouchEventHandler<HTMLDivElement> = function (e) {
    let finger = e.changedTouches.item(0);
    setTransformStyle({
      transform: `translateY(${
        finger.clientY - startPosition.y + basePosition.y
      }px)`,
    });
    setDeviation({
      x: finger.clientX,
      y: finger.clientY - startPosition.y,
    });
  };
  let touchEnd: TouchEventHandler<HTMLDivElement> = function (e) {
    let finger = e.changedTouches.item(0);
    let formattedDeviation = getFormatDeviation(deviation.y);

    // todo 添加动画效果
    setDeviation({
      x: 0,
      y: formattedDeviation,
    });
    setTransformStyle({
      transform: `translateY(${formattedDeviation + basePosition.y}px)`,
    });
    setBasePosition({
      x: 0,
      y: formattedDeviation + basePosition.y,
    });
    setEndPosition({
      x: finger.clientX,
      y: finger.clientY,
    });
  };
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      {/*cursor*/}
      <div className={cursorClassName}>
        <div className={cursorSpaceClassName}></div>
        <div className={cursorMiddleClassName}></div>
        <div className={cursorSpaceClassName}></div>
      </div>
      {/*scroll container*/}
      <ul className={lineContainerClassName} style={containerStyle}>
        {/*scroll line*/}
        {props.data.map((item) => (
          <li className={lineClassName} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

namespace PickerScrollItem {
  export const displayName: string = `${prefix.toUpperCase()}PickerScrollItem`;
}

export default PickerScrollItem;
