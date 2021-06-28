import "./style";
import { getClassName, getStyle, transformInputVal } from "./func";
import {
  CSSProperties,
  FormEvent,
  FormEventHandler,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Property } from "csstype";
import { prefix } from "../../string/txt";

export declare interface IFieldProps {
  /**
   * field类型
   * field type todo
   */
  type?: "text" | "passwd" | "number" | "email";
  /**
   * input原生属性
   * input native prop
   */
  maxlength?: number;
  /**
   * 容器的className
   * input container className
   */
  containerClassName?: string;
  /**
   * 容器的style
   * input container style
   */
  containerStyle?: CSSProperties;
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
  onInput?: FormEventHandler<InputEvent>;
}

function Field(props: IFieldProps) {
  let [val, setVal] = useState("");
  let className = useMemo(
    () => getClassName(props),
    [props.type, props.className, props.bottomType, props.clearable]
  );
  let style = useMemo(() => getStyle(props), [props.style, props.textAlign]);
  let onInput = useCallback(
    function (e: FormEvent<HTMLInputElement>) {
      let val = transformInputVal(e.currentTarget.value, props);
      console.info(val);
      setVal(val);
    },
    [props.onInput]
  );
  let containerStyle = useMemo<CSSProperties>(
    () => ({
      ...{ display: "inline-flex", justifyContent: "space-between" },
      ...props.containerStyle,
    }),
    [props.style]
  );
  let maxlength = useMemo(
    () => (props.maxlength === undefined ? 9999999 : props.maxlength),
    [props.maxlength]
  );
  let clearableNode = useMemo<ReactNode>(
    () =>
      props.clearable ? (
        <span className={`${prefix}-field-clean`}>+</span>
      ) : null,
    [props.clearable]
  );
  return (
    <span className={props.containerClassName} style={containerStyle}>
      <input
        value={val}
        onInput={onInput}
        style={style}
        maxLength={maxlength}
        placeholder={props.placeholder}
        className={className}
        type="text"
      />
      {clearableNode}
    </span>
  );
}

export default Field;
