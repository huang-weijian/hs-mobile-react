import { COM_PREFIX, IPickerProps } from "../Picker";
import { CSSProperties } from "react";

export function getClassName(props: IPickerProps): string {
  let prefix = `${COM_PREFIX}`;
  let className = props.className ? props.className : "";
  return `${prefix} ${className}`.trim();
}

export function getToolbarClassName(props: IPickerProps): string {
  let prefix = `${COM_PREFIX}-toolbar`;
  let className = props.toolbarClassName ? props.toolbarClassName : "";
  return `${prefix} ${className}`.trim();
}

export function getScrollContainerClassName(props: IPickerProps): string {
  let prefix = `${COM_PREFIX}-scroll-container`;
  let className = props.scrollContainerClassName
    ? props.scrollContainerClassName
    : "";
  return `${prefix} ${className}`.trim();
}

export function getSafeAreaClassName(props: IPickerProps): string {
  let prefix = `${COM_PREFIX}-safe-area`;
  let className = props.safeAreaClassName ? props.safeAreaClassName : "";
  return `${prefix} ${className}`.trim();
}

export function getStyle(props: IPickerProps): CSSProperties {
  let style: CSSProperties = {
    ...props.style,
  };
  return style;
}

export function getToolbarStyle(props: IPickerProps): CSSProperties {
  let style: CSSProperties = {
    ...props.toolbarStyle,
  };
  return style;
}

export function getScrollContainerStyle(props: IPickerProps): CSSProperties {
  let style: CSSProperties = {
    ...props.scrollContainerStyle,
  };
  return style;
}

export function getSafeAreaStyle(props: IPickerProps): CSSProperties {
  let style: CSSProperties = {
    ...props.safeAreaStyle,
  };
  return style;
}
