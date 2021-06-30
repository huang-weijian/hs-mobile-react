import { prefix } from "../../string/txt";
import "./style";
import { CSSProperties, useCallback, useMemo, useState } from "react";
import { getClassName, getStyle, getTorusClassName } from "./func";

export declare interface ISwitchProps {
  value?: boolean;
  className?: string;
  torusClassName?: string;
  /**
   * 开启的背景颜色
   * active background color
   */
  activeColor?: string;
  /**
   * 未开启的背景颜色
   * inactive background color
   */
  inactiveColor?: string;
  disabled?: boolean;
  onChange?: (active: boolean) => void;
}

/**
 * 组件样式前缀
 * Component className prefix
 */
export const COM_PREFIX = `${prefix}-switch`;

function Switch(props: ISwitchProps) {
  // hooks
  let [active, setActive] = useState(props.value || false);
  // style
  let style = useMemo<CSSProperties>(
    () => getStyle(props, active),
    [active, props.activeColor, props.inactiveColor]
  );
  // className
  let className = useMemo<string>(
    () => getClassName(props, active),
    [props.className, active]
  );
  let torusClassName = useMemo<string>(
    () => getTorusClassName(props, active),
    [active, props.torusClassName]
  );
  let clickHandler = useCallback(function () {
    if (props.disabled) {
      return;
    }
    setActive((preActive) => {
      if (props.onChange) {
        props.onChange(!preActive);
      }
      return !preActive;
    });
  }, []);
  return (
    <span style={style} className={className} onClick={clickHandler}>
      <span className={torusClassName}></span>
    </span>
  );
}

namespace Switch {
  export const displayName: string = `${prefix.toUpperCase()}Switch`;
}

export default Switch;
