import { IFieldProps } from "../Field";
import { CSSProperties } from "react";
import { prefix } from "../../../string/txt";

/**
 * 获取className
 * get className
 * @param props
 */
export function getClassName(props: IFieldProps): string {
  let typeClassName = "";
  switch (props.bottomType) {
    case "none":
      typeClassName = `${prefix}-field_none`;
      break;
    case "danger":
      typeClassName = `${prefix}-field_danger`;
      break;
    case "success":
      typeClassName = `${prefix}-field_success`;
      break;
    case "warning":
      typeClassName = `${prefix}-field_warning`;
      break;
    default:
      typeClassName = `${prefix}-field_primary`;
      break;
  }
  let clearableClassname = props.clearable ? `${prefix}-field_clearable` : "";
  return `${prefix}-field ${
    props.className || ""
  } ${typeClassName} ${clearableClassname}`;
}

export function getStyle(props: IFieldProps): CSSProperties {
  let temp: CSSProperties = {
    textAlign: props.textAlign || "left",
  };
  return Object.assign<CSSProperties, CSSProperties, CSSProperties>(
    {},
    props.style || {},
    temp
  );
}
