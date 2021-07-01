import { COM_PREFIX, IBadgeProps } from "../Badge";
import { CSSProperties } from "react";

export function getClassName(props: IBadgeProps): string {
  let className = `${props.className || ""}`;
  return `${COM_PREFIX} ${className}`.trim();
}

export function getContentClassName(props: IBadgeProps): string {
  let className = `${props.contentClassName || ""}`;
  return `${COM_PREFIX}-content ${className}`.trim();
}

export function getStyle(props: IBadgeProps): CSSProperties {
  let style: CSSProperties = {
    ...props.style,
  };
  return style;
}

export function getContentStyle(props: IBadgeProps): CSSProperties {
  let style: CSSProperties = {
    ...props.style,
  };
  return style;
}
