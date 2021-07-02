import { prefix } from "../../../../string/txt";
import {
  getClassName,
  getCursorClassName,
  getCursorMiddleClassName, getCursorSpaceClassName,
  getLineClassName,
  getLineContainerClassName,
} from "./func";
import { CSSProperties, TouchEventHandler, useMemo, useState } from "react";
import "./style";

export declare interface IDataItem<T> {
  id: string;
  text: string;
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

function PickerScrollItem(props: IPickerScrollItemProps) {
  // hooks
  // 每一次移动完之后的位置
  // position after each move
  let [basePosition, setBasePosition] = useState<ITouchPosition>({
    x: 0,
    y: 0,
  });
  // 开始移动的位置
  // Where to start moving
  let [startPosition, setStartPosition] = useState<ITouchPosition>({
    x: 0,
    y: 0,
  });
  // 移动中的位置
  // Position on the moving
  let [movePosition, setMovePosition] = useState<ITouchPosition>({
    x: 0,
    y: 0,
  });
  // 移动结束的位置
  // position on the end
  let [endPosition, setEndPosition] = useState<ITouchPosition>({
    x: 0,
    y: 0,
  });

  // style
  let transformStyle: CSSProperties = useMemo<CSSProperties>(() => {
    let tempY = movePosition.y - startPosition.y;
    return {
      transform: `translateY(${basePosition.y + tempY}px)`,
    };
  }, [movePosition]);
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
    setMovePosition({
      x: finger.clientX,
      y: finger.clientY,
    });
  };
  let touchEnd: TouchEventHandler<HTMLDivElement> = function (e) {
    let finger = e.changedTouches.item(0);
    let tempY = movePosition.y - startPosition.y;
    setBasePosition({ x: 0, y: basePosition.y + tempY });
    setEndPosition({
      x: finger.clientX,
      y: finger.clientY,
    });
  };
  return (
    <div
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
