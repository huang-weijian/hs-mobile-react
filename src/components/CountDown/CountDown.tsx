import { prefix } from "../../string/txt";
import "./style";
import {
  CSSProperties,
  ForwardedRef,
  Fragment,
  ReactChild,
  useImperativeHandle,
} from "react";
import {
  getClassName,
  getColonClassName,
  getDayClassName,
  getHourClassName,
  getMinuteClassName,
  getSecondClassName,
} from "./func";
import useCountDown, { ICountDownTime } from "../../hooks/useCountDown";

export declare interface ICountDownImperative {
  restart: () => any;
  continue: () => any;
  stop: () => any;
}

export declare interface ICountDownProps {
  /**
   * 倒计时数，单位毫秒
   * countdown, unit millisecond
   */
  time: number;
  style?: CSSProperties;
  className?: string;
  dayClassName?: string;
  hourClassName?: string;
  minuteClassName?: string;
  secondClassName?: string;
  colonClassName?: string;
  render?: (time: ICountDownTime, remaining: number) => ReactChild;
}

export const COM_PREFIX = `${prefix}-countdown`;

function CountDown(
  props: ICountDownProps,
  ref: ForwardedRef<ICountDownImperative>
) {
  // hooks
  let { time, remaining, restartTask, continueTask, stopTask } = useCountDown(
    props.time
  );

  useImperativeHandle<ICountDownImperative, ICountDownImperative>(
    ref,
    () => {
      return {
        restart: () => {
          restartTask();
        },
        continue: () => {
          continueTask();
        },
        stop: () => {
          stopTask();
        },
      };
    },
    []
  );

  // classNames
  let className = getClassName(props);
  let dayClassName = getDayClassName(props);
  let hourClassName = getHourClassName(props);
  let minuteClassName = getMinuteClassName(props);
  let secondClassName = getSecondClassName(props);
  let colonClassName = getColonClassName(props);

  // style
  let style: CSSProperties = {
    ...props.style,
  };
  let child = (
    <Fragment>
      <span className={dayClassName}>{time.day}</span>
      <span className={colonClassName}>:</span>
      <span className={hourClassName}>{time.hour}</span>
      <span className={colonClassName}>:</span>
      <span className={minuteClassName}>{time.minute}</span>
      <span className={colonClassName}>:</span>
      <span className={secondClassName}>{time.second}</span>
    </Fragment>
  );
  return (
    <span className={className} style={style}>
      {props.render ? props.render(time, remaining) : child}
    </span>
  );
}

namespace CountDown {
  export let displayName: string = `${prefix.toUpperCase()}CountDown`;
}

export default CountDown;
