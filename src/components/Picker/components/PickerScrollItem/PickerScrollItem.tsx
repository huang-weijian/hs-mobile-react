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
export const BASE_TOP: number = 14;
export const LINE_HEIGHT: number = 42;

function PickerScrollItem(props: IPickerScrollItemProps) {
  // hooks

  // states
  // 每一次移动完之后的位置
  // position after each move
  let [basePosition, setBasePosition] = useState<ITouchPosition>({
    x: 0,
    y: -BASE_TOP,
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
  let [transitionStyle, setTransitionStyle] = useState<CSSProperties>({
    transition: "none",
  });
  let [outsideHeight, setOutsideHeight] = useState<number>(0);
  let [transformContainerHeight, setTransformContainerHeight] =
    useState<number>(0);

  // refs
  let ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  // cursor space ref
  let cursorSpaceRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  // data items container ref
  let transformContainerRef =
    useRef<HTMLUListElement>() as MutableRefObject<HTMLUListElement>;

  // memos
  // style
  let style: CSSProperties = {
    ...{ height: "100%" },
    ...props.style,
  };
  let containerStyle: CSSProperties = {
    ...transformStyle,
    ...transitionStyle,
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
    // 防止页面滚动，要加在被移动的元素上，不能在react的绑定事件中阻止默认事件
    // Prevent page scroll,add to listener list of the element to be moving,
    // don't prevent default event in react event system
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
    // 计算超出高度
    // computed outside height
    let spaceComputedStyle = window.self.getComputedStyle(
      cursorSpaceRef.current,
      null
    );
    setOutsideHeight(parseFloat(spaceComputedStyle.height));
    // 计算数据容器高度
    let containerComputedStyle = window.self.getComputedStyle(
      transformContainerRef.current,
      null
    );
    setTransformContainerHeight(parseFloat(containerComputedStyle.height));
  }, []);

  // event handler
  let touchStartHandler: TouchEventHandler<HTMLDivElement> = function (e) {
    // 只需要第一根手指
    // just the first finger
    let finger = e.changedTouches.item(0);
    setTransitionStyle({
      transition: "none",
    });
    setStartPosition({
      x: finger.clientX,
      y: finger.clientY,
    });
  };
  let touchMove: TouchEventHandler<HTMLDivElement> = function (e) {
    let finger = e.changedTouches.item(0);
    let tempDeviation = finger.clientY - startPosition.y;
    let finalTransform=tempDeviation + basePosition.y
    let bottomTransform=-(transformContainerHeight - outsideHeight - LINE_HEIGHT)
    // 超出高度
    // outside of data items height
    finalTransform=finalTransform>outsideHeight?outsideHeight:finalTransform
    finalTransform=finalTransform<bottomTransform?bottomTransform:finalTransform
    setTransformStyle({
      transform: `translateY(${finalTransform}px)`,
    });
    setDeviation({
      x: finger.clientX,
      y: finalTransform-basePosition.y,
    });
  };
  let touchEnd: TouchEventHandler<HTMLDivElement> = function (e) {
    let finger = e.changedTouches.item(0);
    let formattedDeviation = getFormatDeviation(deviation.y);
    let finalTransform=formattedDeviation + basePosition.y
    // 添加过渡动画
    // add animated
    setTransitionStyle({
      transition: "transform 200ms linear",
    });
    // 记录最终位移
    // record final formatted deviation
    setDeviation({
      x: 0,
      y: formattedDeviation,
    });
    // 记录最终位移
    // record final formatted deviation
    setTransformStyle({
      transform: `translateY(${finalTransform}px)`,
    });
    // 记录每一次拖动后的基础高度
    // record each transformed base height
    setBasePosition({
      x: 0,
      y: finalTransform,
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
        <div className={cursorSpaceClassName} ref={cursorSpaceRef}></div>
        <div className={cursorMiddleClassName}></div>
        <div className={cursorSpaceClassName}></div>
      </div>
      {/*scroll container*/}
      <ul
        className={lineContainerClassName}
        style={containerStyle}
        ref={transformContainerRef}
      >
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
