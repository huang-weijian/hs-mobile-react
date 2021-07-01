import { COM_PREFIX, IBadgeProps } from "../Badge";
import { CSSProperties } from "react";

export function getClassName(props: IBadgeProps): string {
  let className = `${props.className || ""}`;
  return `${COM_PREFIX} ${className}`.trim();
}

export function getContentClassName(props: IBadgeProps): string {
  let prefix = `${COM_PREFIX}-content`;
  let className = `${props.contentClassName || ""}`;
  let typeClassName = "";
  switch (props.type) {
    case "danger":
      typeClassName = `${prefix}_danger`;
      break;
    case "info":
      typeClassName = `${prefix}_info`;
      break;
    case "warning":
      typeClassName = `${prefix}_warning`;
      break;
    default:
      typeClassName = `${prefix}_primary`;
      break;
  }
  let contentClassName = "";
  if (!props.content) {
    contentClassName = `${prefix}__none`;
  }
  return `${prefix} ${className} ${typeClassName} ${contentClassName}`.trim();
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
