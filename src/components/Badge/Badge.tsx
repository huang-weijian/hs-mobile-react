import { prefix } from "../../string/txt";
import "./style";
import { CSSProperties, MouseEventHandler, ReactChild, useMemo } from "react";
import {
  getClassName,
  getContentClassName,
  getContentStyle,
  getStyle,
} from "./func";

export declare interface IBadgeProps {
  /**
   * badge的类型
   * badge type
   */
  type?: "primary" | "danger" | "warning" | "info";
  content?: ReactChild;
  className?: string;
  style?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  children?: ReactChild;
  contentOnClick?: MouseEventHandler<HTMLSpanElement>;
}

export const COM_PREFIX = `${prefix}-badge`;

function Badge(props: IBadgeProps) {
  // style and className
  let className = useMemo(() => getClassName(props), [props.className]);
  let contentClassName = useMemo(
    () => getContentClassName(props),
    [props.contentClassName, props.type, props.content]
  );
  let style = useMemo(() => getStyle(props), [props.style]);
  let contentStyle = useMemo(
    () => getContentStyle(props),
    [props.contentStyle]
  );
  return (
    <span className={className} style={style}>
      {props.children}
      <span
        onClick={props.contentOnClick}
        className={contentClassName}
        style={contentStyle}
      >
        {props.content}
      </span>
    </span>
  );
}

namespace Badge {
  export const displayName: string = `${prefix.toUpperCase()}Badge`;
}

export default Badge;
