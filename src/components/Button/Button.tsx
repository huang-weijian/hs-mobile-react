import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  MouseEvent,
  ReactChild,
  useEffect,
  useRef,
  useState,
  createElement,
  MutableRefObject,
} from "react";
import "./style";
import { sizes, types } from "../../types/types";
import { prefix } from "../../string/txt";
import { createRipple, getClassByProp } from "./func";

export declare interface ButtonProps {
  type?: types;
  children?: Array<ReactChild> | ReactChild;
  className?: string | Array<string>;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
  /**
   * 是否是块级元素（is block element）
   */
  block?: boolean;
  /**
   * 是否需要圆形按钮（is round button）
   */
  round?: boolean;
  /**
   * 按钮原生type（button native type）
   */
  nativeType?: "submit" | "reset" | "button";
  disabled?: boolean;
  /**
   * 是否是朴素按钮  is plain button
   */
  plain?: boolean;
  /**
   * 按钮尺寸 button size
   */
  size?: sizes;
}

const defaultProps: ButtonProps = {
  type: "default",
  children: "",
  block: false,
  round: false,
  onClick: (): void => {},
  disabled: false,
  nativeType: "button",
  plain: false,
  size: "normal",
};

function Button(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  // 默认props（default props）
  props = Object.assign({}, defaultProps, props);

  // button样式（btn class
  const className = getClassByProp(props);
  const rippleConRef = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  // ripple容器位置（ripple container position）
  const [rippleConPos, setRippleConPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    // 获得水波纹容器位置（get ripple container position）
    setRippleConPos({
      x: rippleConRef.current.offsetLeft,
      y: rippleConRef.current.offsetTop,
    });
  }, []);

  // click event handler
  function clickHandler(e: MouseEvent<HTMLButtonElement>): void {
    // 添加水波纹效果（add ripple animated）
    let tempChild = createRipple({
      x: e.pageX - rippleConPos.x,
      y: e.pageY - rippleConPos.y,
    });
    rippleConRef.current.appendChild(tempChild);
    setTimeout(() => {
      rippleConRef.current.removeChild(tempChild);
    }, 1000);
    // trigger click
    if (props.onClick) {
      props.onClick(e);
    }
  }

  return (
    <button
      type={props.nativeType}
      style={props.style}
      ref={ref}
      disabled={props.disabled}
      onClick={clickHandler}
      className={`${prefix}-button ${className}`}
    >
      {props.children}
      <div ref={rippleConRef} className={"hs-button-ripple-container"}></div>
    </button>
  );
}

namespace Button {
  export const displayName = `${prefix.toUpperCase()}Button`;
}
export default forwardRef<HTMLButtonElement, ButtonProps>(Button);
