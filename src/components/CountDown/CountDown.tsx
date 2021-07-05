import { prefix } from "../../string/txt";
import "./style";
import { CSSProperties } from "react";
import {
  getClassName,
  getDayClassName,
  getHourClassName,
  getMinuteClassName,
  getSecondClassName,
} from "./func";

export declare interface ICountDownProps {
  style?: CSSProperties;
  className?: string;
  dayClassName?: string;
  hourClassName?: string;
  minuteClassName?: string;
  secondClassName?: string;
  colonClassName?: string;
}

export const COM_PREFIX = `${prefix}-countdown`;

function CountDown(props: ICountDownProps) {
  // hooks

  // classNames
  let className = getClassName(props);
  let dayClassName = getDayClassName(props);
  let hourClassName = getHourClassName(props);
  let minuteClassName = getMinuteClassName(props);
  let secondClassName = getSecondClassName(props);

  // style
  let style: CSSProperties = {
    ...props.style,
  };
  return (
    <span className={className} style={style}>
      <span className={dayClassName}></span>
      <span className={props.colonClassName}>:</span>
      <span className={hourClassName}></span>
      <span className={props.colonClassName}>:</span>
      <span className={minuteClassName}></span>
      <span className={props.colonClassName}>:</span>
      <span className={secondClassName}></span>
    </span>
  );
}

namespace CountDown {
  export let displayName: string = `${prefix.toUpperCase()}CountDown`;
}

export default CountDown;
