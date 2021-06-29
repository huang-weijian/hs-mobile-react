import "./style";
import { getClassName, getStyle, transformInputVal } from "./func";
import {
  CSSProperties,
  FormEvent,
  FormEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Property } from "csstype";
import { prefix } from "../../string/txt";

export declare interface IFieldProps {
  /**
   * field类型
   * field type
   */
  type?: "text" | "passwd" | "float" | "int";
  /**
   * 初始value
   * init value
   */
  initValue?: string;
  /**
   * 原生属性
   * native prop
   */
  readOnly?: boolean;
  /**
   * 原生属性
   * native prop
   */
  disabled?: boolean;
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
   * can clean up all text
   */
  clearable?: boolean;
  /**
   * 原声属性
   * native prop
   */
  placeholder?: string;
  textAlign?: Property.TextAlign;
  onInput?: FormEventHandler<HTMLInputElement>;
}

function Field(props: IFieldProps) {
  // 初始化value
  // init value
  let initValue = props.initValue ? props.initValue : "";
  let [val, setVal] = useState(initValue);
  let [realVal, setRealVal] = useState(initValue);
  let preVal = useRef<string>(initValue);
  useEffect(() => {
    preVal.current = val;
  }, [val]);
  let className = useMemo(
    () => getClassName(props),
    [props.type, props.className, props.bottomType, props.clearable]
  );
  let style = useMemo(() => getStyle(props), [props.style, props.textAlign]);
  let onInput = useCallback(
    function (e: FormEvent<HTMLInputElement>) {
      let val = transformInputVal(
        realVal,
        preVal.current,
        e.currentTarget.value,
        props
      );
      setVal(val);
      if (props.type === "passwd") {
        setRealVal(e.currentTarget.value);
      }
      if (props.onInput) {
        props.onInput(e);
      }
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
  let readOnly = props.readOnly ? true : false;
  let disabled = props.disabled ? true : false;
  let maxlength = useMemo(
    () => (props.maxlength === undefined ? 9999999 : props.maxlength),
    [props.maxlength]
  );
  // clean按钮节点
  // cleanButton Node
  let clearableNode = useMemo<ReactNode>(
    () =>
      props.clearable && val ? (
        <span onClick={() => setVal("")} className={`${prefix}-field-clean`}>
          C
        </span>
      ) : null,
    [props.clearable, val]
  );
  return (
    <span className={props.containerClassName} style={containerStyle}>
      <input
        value={val}
        readOnly={readOnly}
        disabled={disabled}
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

namespace Field {
  export const displayName: string = `${prefix.toUpperCase()}Field`;
}

export default Field;
