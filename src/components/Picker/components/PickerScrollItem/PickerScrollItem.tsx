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
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./style";

export declare interface IDataItem {
  id: string;
  text: ReactChild;
  value: string;

  [props: string]: any;
}

export declare interface IDeviation {
  x: number;
  y: number;
}

export declare interface ITouchPosition {
  x: number;
  y: number;
}

export declare interface IPickerScrollItemClassNames {
  className?: string;
  cursorClassName?: string;
  cursorMiddleClassName?: string;
  cursorSpaceClassName?: string;
  lineContainerClassName?: string;
  lineClassName?: string;
}

export declare type IPickerScrollItemProps = {
  data: Array<IDataItem>;
  style?: CSSProperties;
  lineHeight?: number;
  value?: IDataItem["id"];
  onSelect?: (data: IDataItem, idx: number) => void;
} & Pick<IPickerScrollItemClassNames, keyof IPickerScrollItemClassNames>;

export const COM_PREFIX = `${prefix}-picker-scroll-item`;

function PickerScrollItem(props: IPickerScrollItemProps) {
  // hooks
  // states
  let [lineHeight] = useState<number>(props.lineHeight || 42);
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
  // 偏移的距离
  // deviation
  let [deviation, setDeviation] = useState<IDeviation>({
    x: 0,
    y: 0,
  });
  // 移动结束的位置
  // position on the end
  let [endPosition, setEndPosition] = useState<ITouchPosition>({
    x: 0,
    y: 0,
  });
  // 选中的选项
  let [selectedIdx,setSelectedIdx]=useState<number>(0)
  let [transformStyle, setTransformStyle] = useState<CSSProperties>({
    transform: `translateY(${basePosition.y}px)`,
  });
  let [transitionStyle, setTransitionStyle] = useState<CSSProperties>({
    transition: "none",
  });
  let [containerMarginTop, setContainerMarginTop] = useState<CSSProperties>({
    marginTop: "0px",
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
  let lineHeightStyle: CSSProperties = {
    height: `${lineHeight}px`,
  };
  let containerStyle: CSSProperties = {
    ...transformStyle,
    ...transitionStyle,
    ...containerMarginTop,
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

  // effects
  useEffect(() => {
    // 计算超出高度
    // computed outside height
    function computedOutsideHeight(){
      if (!cursorSpaceRef.current){
        return
      }
      let spaceComputedStyle = window.self.getComputedStyle(
          cursorSpaceRef.current,
          null
      );
      let spaceHeight = parseFloat(spaceComputedStyle.height);
      setOutsideHeight(spaceHeight);
      // set margin-top
      setContainerMarginTop({
        marginTop: `${spaceHeight}px`,
      });
      let baseTransformY = 0;
      // 计算滚动几个数据项的高度
      // computed scroll data items height
      if (props.data.length > 0 && props.value) {
        let idx = props.data.findIndex((item) => item.id === props.value);
        idx = idx === -1 ? 0 : idx;
        setSelectedIdx(idx)
        baseTransformY = idx * lineHeight;
      }
      setBasePosition({ x: 0, y: -baseTransformY });
      setTransformStyle({
        transform: `translateY(${-baseTransformY}px)`,
      });
    }
    // 避免计算误差
    // Avoid calculation error
    setTimeout(computedOutsideHeight,0)
  }, [props.value]);
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
    // 计算数据容器高度
    // computed container height
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
    // 位移后的偏移值
    // moved
    let finalTransform = tempDeviation + basePosition.y;
    let bottomTransform = -(transformContainerHeight - lineHeight);
    // 超出高度
    // outside of data items height
    // 拉到顶
    // be top
    finalTransform = finalTransform > 0 ? 0 : finalTransform;
    // 拉到底
    // be bottom
    finalTransform =
      finalTransform < bottomTransform ? bottomTransform : finalTransform;
    setTransformStyle({
      transform: `translateY(${finalTransform}px)`,
    });
    setDeviation({
      x: finger.clientX,
      y: finalTransform - basePosition.y,
    });
  };
  let touchEnd: TouchEventHandler<HTMLDivElement> = function (e) {
    let finger = e.changedTouches.item(0);
    let formattedDeviation = getFormatDeviation(deviation.y, lineHeight);
    let finalTransform = formattedDeviation + basePosition.y;
    let tempSelectedIdx= Math.abs(finalTransform)/lineHeight
    setSelectedIdx(tempSelectedIdx)
    if (props.onSelect){
      props.onSelect(props.data[tempSelectedIdx],tempSelectedIdx)
    }
    // 添加过渡动画
    // add animated
    setTransitionStyle({
      transition: "transform 200ms linear",
    });
    // 因为点击也会触发touch start和touch end，而不触发touch move
    // because click will trigger touch start event and touch end event,but not trigger touch move
    // 重置位移
    // reset deviation
    setDeviation({
      x: 0,
      y: 0,
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
        <div className={cursorMiddleClassName} style={lineHeightStyle}></div>
        <div className={cursorSpaceClassName}></div>
      </div>
      {/*scroll container*/}
      <ul
        className={lineContainerClassName}
        style={containerStyle}
        ref={transformContainerRef}
      >
        {/*scroll line*/}
        {props.data.map((item,idx) => (
          <li className={getLineClassName(props,idx,selectedIdx)} style={lineHeightStyle} key={item.id}>
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
