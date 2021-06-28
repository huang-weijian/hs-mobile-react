import "./style";
import { getClassName, getStyle } from "./func";
import { CSSProperties, useMemo } from "react";
import { Property } from "csstype";

export declare interface IFieldProps {
  /**
   * field类型
   * field type todo
   */
  type?: "text" | "passwd" | "number" | "email";
  /**
   * 附加className
   * additional className
   */
  className?: string;
  /**
   * 附加style
   * additional style
   */
  style?: CSSProperties;
  /**
   * 底部横线颜色类型
   * bottom border color type
   */
  bottomType?: "primary" | "warning" | "success" | "danger" | "none";
  /**
   * 是否可清理文本
   * can clean up all text todo
   */
  clearable?: boolean;
  /**
   * 原声属性
   * native prop
   */
  placeholder?: string;
  textAlign?: Property.TextAlign;
}

function Field(props: IFieldProps) {
  let className = useMemo(() => getClassName(props), [props.className]);
  let style = useMemo(() => getStyle(props), [props.style, props.textAlign]);
  return (
    <input
      style={style}
      placeholder={props.placeholder}
      className={className}
      type="text"
    />
  );
}

export default Field;
