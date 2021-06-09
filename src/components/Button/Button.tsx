import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  MouseEvent,
  ReactChild,
  useEffect,
  useRef,
  useState,
} from "react";
import "./style";
import { types } from "../../types/types";
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
}

const defaultProps: ButtonProps = {
  type: "default",
  children: "",
  block: false,
  round: false,
  onClick: (): void => {},
  disabled: false,
  nativeType: "button",
};

function Button(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  // 默认props（default props）
  props = Object.assign({}, defaultProps, props);

  // button样式（btn class
  const className = getClassByProp(props);
  const rippleConRef = useRef<HTMLDivElement>(null);
  // ripple容器位置（ripple container position）
  const [rippleConPos, setRippleConPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    // 获得水波纹容器位置（get ripple container position）
    setRippleConPos({
      // @ts-ignore
      x: rippleConRef.current.offsetLeft,
      // @ts-ignore
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
    // @ts-ignore
    rippleConRef.current.appendChild(tempChild);
    setTimeout(() => {
      // @ts-ignore
      rippleConRef.current.removeChild(tempChild);
    }, 1600);
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

Button.displayName = "HSButton";
export default forwardRef<HTMLButtonElement, ButtonProps>(Button);
