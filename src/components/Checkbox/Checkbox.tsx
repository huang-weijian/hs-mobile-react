import {
  FunctionComponent,
  MouseEventHandler,
  useMemo,
} from "react";
import "./style";
import { getCheckStateIcon } from "./func";
import {prefix} from "../../string/txt";

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
   *  图标的颜色
   *  icon color
   */
  iconColor?: string;
  /**
   * 图标渲染函数
   * icon render function
   */
  iconRender?: FunctionComponent<ICheckboxProps>;
  onChange?: MouseEventHandler<HTMLLabelElement>;
}

function Checkbox(props: ICheckboxProps) {
  let iconNode = useMemo(
    () => getCheckStateIcon(props),
    [props.iconRender, props.iconColor, props.isCheck]
  );
  return (
    <label className={`hs-checkbox`} onClick={props.onChange}>
      {/*icon*/}
      {iconNode}
      {/* label*/}
      <span className={`hs-checkbox-label`}>{props.label}</span>
    </label>
  );
}



namespace Checkbox {
  export const displayName: string = `${prefix.toUpperCase()}Checkbox`;
}

export default Checkbox;
