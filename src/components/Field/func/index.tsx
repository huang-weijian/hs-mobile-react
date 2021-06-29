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

/**
 * 根据field的类型转换字符串
 * @param realVal 真实值
 * @param preVal 上次输入的字符串
 * @param val 输入的字符串
 * @param props
 */
export function transformInputVal(
  realVal: string,
  preVal: string,
  val: string,
  props: IFieldProps
): string {
  switch (props.type) {
    case "email":
      break;
    case "int":
      if (val === "") {
        val = val;
        break;
      }
      let tempInt = parseInt(val);
      val = tempInt || val === "0" ? String(tempInt) : preVal;
      break;
    case "float":
      // 判断val是不是.号
      // if val string is .
      if (val === ".") {
        val = "0";
        break;
      }
      if (val.length > 1 && val.charAt(0) === ".") {
        val = val.substring(1);
      }
      // 如果开头是0，且第二位不是小数点
      // if zero is first char of val string
      if (val.indexOf("0") == 0 && val.length > 1 && val.charAt(1) !== ".") {
        val = val.substring(1);
      }
      // 已经有了.，就不能再输入.
      // there is point
      let pointIdx = preVal.indexOf(".");
      if (pointIdx > -1 && val.indexOf(".") !== val.lastIndexOf(".")) {
        val = preVal;
      }
      val = val.replace(/[^.0-9]/g, "");
      break;
    case "passwd":
      val = val
        .split("")
        .map(() => "*")
        .join("");
      break;
    default:
      val = val;
  }
  return val;
}
