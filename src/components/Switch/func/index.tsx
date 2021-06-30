import { COM_PREFIX, ISwitchProps } from "../Switch";
import { CSSProperties } from "react";

export function getClassName(props: ISwitchProps, active: boolean): string {
  let activeClassName = active ? `${COM_PREFIX}__active` : "";
  let disabledClassName = props.disabled ? `${COM_PREFIX}__disabled` : "";
  return `${COM_PREFIX} ${
    props.className || ""
  } ${activeClassName} ${disabledClassName}`.trim();
}

export function getTorusClassName(
  props: ISwitchProps,
  active: boolean
): string {
  let activeClassName = active ? `${COM_PREFIX}-torus__active` : "";
  return `${COM_PREFIX}-torus ${activeClassName} ${
    props.torusClassName || ""
  }`.trim();
}

export function getStyle(props: ISwitchProps, active: boolean): CSSProperties {
  let style: CSSProperties = {
    ...(props.inactiveColor ? { backgroundColor: props.inactiveColor } : {}),
  };
  let activeStyle: CSSProperties = {
    ...(props.activeColor ? { backgroundColor: props.activeColor } : {}),
  };
  return active ? activeStyle : style;
}
