import "./style";
import { prefix } from "../../string/txt";
import { CSSProperties, MouseEventHandler, ReactChild } from "react";
import {
  getClassName,
  getSafeAreaClassName,
  getSafeAreaStyle,
  getScrollContainerClassName,
  getScrollContainerStyle,
  getStyle,
  getToolbarClassName,
  getToolbarStyle,
} from "./func";

export declare interface IPickerProps {
  // style
  style?: CSSProperties;
  toolbarStyle?: CSSProperties;
  scrollContainerStyle?: CSSProperties;
  safeAreaStyle?: CSSProperties;
  // className
  className?: string;
  toolbarClassName?: string;
  scrollContainerClassName?: string;
  safeAreaClassName?: string;
  titleNode?: ReactChild;
  cancelNode?: ReactChild;
  sureNode?: ReactChild;
  onCancel?: MouseEventHandler<HTMLSpanElement>;
  onSure?: MouseEventHandler<HTMLSpanElement>;
}

export const COM_PREFIX = `${prefix}-picker`;

function Picker(props: IPickerProps) {
  // className
  let className = getClassName(props);
  let toolBarClassName = getToolbarClassName(props);
  let scrollContainerClassName = getScrollContainerClassName(props);
  let safeAreaClassName = getSafeAreaClassName(props);
  // style
  let style = getStyle(props);
  let toolbarStyle = getToolbarStyle(props);
  let scrollContainerStyle = getScrollContainerStyle(props);
  let safeAreaStyle = getSafeAreaStyle(props);
  return (
    <div className={className} style={style}>
      {/*  工具栏*/}
      {/*  toolbar*/}
      <div className={toolBarClassName} style={toolbarStyle}>
        <span
          className={`${COM_PREFIX}-toolbar-cancel`}
          onClick={props.onCancel}
        >
          {props.cancelNode || "cancel"}
        </span>
        <span className={`${COM_PREFIX}-toolbar-title`}>{props.titleNode}</span>
        <span className={`${COM_PREFIX}-toolbar-sure`} onClick={props.onSure}>
          {props.sureNode || "confirm"}
        </span>
      </div>
      {/*  滚轴容器*/}
      {/*  scroll container*/}
      <div
        className={scrollContainerClassName}
        style={scrollContainerStyle}
      ></div>
      {/*  安全区*/}
      {/*  safe area*/}
      <div className={safeAreaClassName} style={safeAreaStyle}></div>
    </div>
  );
}

namespace Picker {
  export const displayName: string = `${prefix.toUpperCase()}Picker`;
}

export default Picker;
