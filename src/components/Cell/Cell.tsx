import {
  createElement,
  CSSProperties,
  ReactChild,
  Fragment,
  MouseEventHandler,
} from "react";
import { prefix } from "../../string/txt";
import "./style";
import { getChild } from "./func";

export declare interface CellProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * 是否需要底部边框    need bottom border
   */
  bottomBorder?: boolean;
  title?: string;
  subTitle?: string;
  showTitle?: boolean;
  showSubTitle?: boolean;
  value?: string;
  showValueIcon?: boolean;
  leftChild?: ReactChild;
  rightChild?: ReactChild;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function Cell(props: CellProps) {
  const defaultProp: CellProps = {
    bottomBorder: true,
    title: "",
    subTitle: "",
    showTitle: true,
    showSubTitle: false,
    value: "",
    showValueIcon: true,
    onClick: () => {},
  };
  props = Object.assign({}, defaultProp, props);
  // 容器样式 container class
  let containerClass = [
    "hs-cell",
    props.bottomBorder ? "hs-cell-border-bottom" : "",
  ].join(" ");
  let { leftNode, rightNode } = getChild(props);
  return (
    <div className={containerClass} onClick={props.onClick}>
      <div className={"hs-cell-left"}>{leftNode}</div>
      <div className={"hs-cell-right"}>{rightNode}</div>
    </div>
  );
}

namespace Cell {
  export const displayName: string = `${prefix.toUpperCase()}Cell`;
}

export default Cell;
