import "./style";
import { types } from "../../types/types";
import { ReactChild } from "react";
import { prefix } from "../../string/txt";
import {
  getClassName,
  getLineClassName,
  getLineStyle,
  getTxtClassName,
  getTxtStyle,
} from "./func";

export declare interface IDividerClassName {
  className?: string;
  lineClassName?: string;
  txtClassName?: string;
}

export declare interface IDividerProps extends IDividerClassName {
  position?: "left" | "center" | "right";
  type?: types;
  /**
   * 分割线的颜色
   * divider color
   */
  lineColor?: string;
  /**
   * 字体的颜色
   * font color
   */
  color?: string;
  /**
   * 是否使用虚线
   * use dashed line
   */
  dashed?: boolean;
  children?: ReactChild;
}

function Divider(props: IDividerProps) {
  let className = getClassName(props);
  let lineClassName = getLineClassName(props);
  let txtClassName = getTxtClassName(props);
  let { left, right } = getLineStyle(props);
  let txtStyle = getTxtStyle(props);
  return (
    <div className={className}>
      <span className={lineClassName} style={left}></span>
      <span className={txtClassName} style={txtStyle}>
        {props.children}
      </span>
      <span className={lineClassName} style={right}></span>
    </div>
  );
}

namespace Divider {
  export let displayName: string = `${prefix.toUpperCase()}Divider`;
}

export const COM_PREFIX = `${prefix}-divider`;

export default Divider;
