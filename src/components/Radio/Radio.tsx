import { prefix } from "../../string/txt";
import "./style";
import { ReactNode, useCallback, useContext, useMemo, useState } from "react";
import RadioContext, { IRadioContext } from "./context/RadioContext";
import { getIconClassName } from "./func";

export declare interface IRadioProps {
  value?: any;
  type?: "primary" | "danger" | "warning";
  /**
   * radio标签
   * radio txt label
   */
  label?: string;
  className?: string;
  iconClassName?: string;
  disabled?: boolean;
  iconRender?: (props: IRadioProps, check: boolean) => ReactNode;
  onChange?: (val: any, check: boolean) => void;
  children?: ReactNode;
}

function Radio(props: IRadioProps) {
  // init props
  // hooks
  const radioContext = useContext(RadioContext);
  let [check, setCheck] = useState(false);
  let onClickHandler = useCallback(() => {
    if (props.disabled) {
      return;
    }
    // 在一个Radio.Group里面
    // in Radio.Group Component
    if (radioContext.inGroup) {
      if (!(radioContext.value === props.value)) {
        radioContext.change(props.value);
        if (props.onChange) {
          props.onChange(props.value, true);
        }
      }
    } else {
      if (!check) {
        setCheck(true);
        if (props.onChange) {
          props.onChange(props.value, true);
        }
      }
    }
  }, [check, radioContext.value, radioContext.inGroup]);
  // classNames
  let className = useMemo<string>(() => {
    let disabledClassName = props.disabled ? `${prefix}-radio_disabled` : "";
    return `${props.className || ""} ${prefix}-radio ${disabledClassName}`;
  }, [props.className, props.disabled]);
  let iconClassName = useMemo<string>(
    () => getIconClassName(props, check, radioContext),
    [check, props.type, props.iconClassName, props.value, radioContext.value]
  );
  let iconNode = props.iconRender ? (
    props.iconRender(props, check)
  ) : (
    <span className={`${prefix}-radio-icon ${iconClassName}`}>
      <span className={`${prefix}-radio-icon-content`}></span>
    </span>
  );
  return (
    <span onClick={onClickHandler} className={`${className}`}>
      {iconNode}
      <span className={`${prefix}-radio-label`}>{props.children}</span>
    </span>
  );
}

export interface IRadioGroupProps {
  onChange: (val: any) => void;
  children?: ReactNode;
}

function RadioGroup(props: IRadioGroupProps) {
  let [val, setVal] = useState<any>(null);
  let change = useCallback(
    function (paramVal: any) {
      if (paramVal === val) {
        return;
      }
      setVal(paramVal);
      if (props.onChange) {
        props.onChange(paramVal);
      }
    },
    [val]
  );
  let radioCtx: IRadioContext = {
    value: val,
    inGroup: true,
    change,
  };
  return (
    <RadioContext.Provider value={radioCtx}>
      {props.children}
    </RadioContext.Provider>
  );
}

namespace RadioGroup {
  export const displayName: string = `${prefix.toUpperCase()}RadioGroup`;
}

namespace Radio {
  export const displayName: string = `${prefix.toUpperCase()}Radio`;
  export const Group = RadioGroup;
}

export default Radio;
