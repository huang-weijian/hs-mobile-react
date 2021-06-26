import { CSSProperties, MutableRefObject, useRef } from "react";
import "./style";

export declare interface ICheckboxProps {
  /**
   * 复选框是否选中
   * Check box's state
   */
  isCheck: boolean;
  /**
   * checkbox选项名称
   * checkbox option name
   */
  label?: string | number;
  /**
   * 复选框 icon的附加样式
   * checkbox icon additional className
   */
  iconClassName?: string;
  /**
   * 复选框 icon的附加style
   * checkbox icon additional style
   */
  iconStyle?: CSSProperties;

}

function Checkbox(props: ICheckboxProps) {
  let ref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  return (
    <label className={`hs-checkbox`}>
      {/*real checkbox*/}
      <input ref={ref} hidden={true} type={"checkbox"} />
      {/*icon container*/}
      <span className={`hs-checkbox-icon`}>
        {/*icon*/}
        <span></span>
      </span>
      {/* label*/}
      <span className={`hs-checkbox-label`}>{props.label}</span>
    </label>
  );
}

export default Checkbox;
