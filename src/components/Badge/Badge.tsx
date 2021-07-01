import { prefix } from "../../string/txt";
import "./style";
import { CSSProperties, ReactChild } from "react";
import { getClassName, getContentClassName } from "./func";

export declare interface IBadgeProps {
  className?: string;
  style?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  children?: ReactChild;
}

export const COM_PREFIX = `${prefix}-badge`;

function Badge(props: IBadgeProps) {
  let className = getClassName(props);
  let contentClassName = getContentClassName(props);
  return (
    <span className={className}>
      {props.children}
      <span className={contentClassName}></span>
    </span>
  );
}

namespace Badge {
  export const displayName: string = `${prefix.toUpperCase()}Badge`;
}

export default Badge;
