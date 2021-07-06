import { COM_PREFIX, IDividerProps } from "../Divider";
import { CSSProperties } from "react";

export function getClassName(props: IDividerProps) {
  let className = `${COM_PREFIX}`;
  let propsClassName = `${props.className || ""}`;
  return `${className} ${propsClassName}`.trim();
}

export function getLineClassName(props: IDividerProps) {
  let className = `${COM_PREFIX}-line`;
  let propsClassName = `${props.lineClassName || ""}`;
  let typeClassName = "";
  switch (props.type) {
    case "primary":
      typeClassName = `${className}_primary`;
      break;
    case "success":
      typeClassName = `${className}_success`;
      break;
    case "warning":
      typeClassName = `${className}_warning`;
      break;
    case "danger":
      typeClassName = `${className}_danger`;
      break;
    case "info":
      typeClassName = `${className}_info`;
      break;
    default:
      typeClassName = `${className}_default`;
  }
  let dashedClassName = props.dashed ? `${className}_dashed` : "";
  return `${className} ${propsClassName} ${typeClassName} ${dashedClassName}`.trim();
}

export function getTxtClassName(props: IDividerProps) {
  let className = `${COM_PREFIX}-txt`;
  let propsClassName = `${props.txtClassName || ""}`;
  return `${className} ${propsClassName}`.trim();
}

export function getLineStyle(props: IDividerProps): {
  left: CSSProperties;
  right: CSSProperties;
} {
  let leftStyle: CSSProperties = {};
  let rightStyle: CSSProperties = {};
  switch (props.position) {
    case "left":
      leftStyle.width = "15%";
      rightStyle.width = "85%";
      break;
    case "right":
      leftStyle.width = "85%";
      rightStyle.width = "15%";
      break;
    default:
      break;
  }
  if (props.lineColor) {
    leftStyle.borderColor = props.lineColor;
    rightStyle.borderColor = props.lineColor;
  }
  return { left: leftStyle, right: rightStyle };
}

export function getTxtStyle(props: IDividerProps): CSSProperties {
  let style: CSSProperties = {};
  if (props.children) {
    style.margin = "0 8px";
  }
  if (props.color) {
    style.color = props.color;
  }
  return style;
}
