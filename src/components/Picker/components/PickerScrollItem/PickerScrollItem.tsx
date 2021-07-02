import { prefix } from "../../../../string/txt";
import { getClassName, getCursorClassName, getLineClassName } from "../func";

export declare interface IPickerScrollItemProps {
  data: Array<{
    text: "";
    [props: string]: any;
  }>;
}

export const COM_PREFIX = `${prefix}-picker-scroll-item`;

function PickerScrollItem(props: IPickerScrollItemProps) {
  let className = getClassName(props);
  let cursorClassName = getCursorClassName(props);
  let lineClassName = getLineClassName(props);
  return (
    <div className={className}>
      {/*cursor*/}
      <div className={cursorClassName}></div>
      {/*scroll line*/}
      <div className={lineClassName}></div>
    </div>
  );
}

namespace PickerScrollItem {
  export const displayName: string = `${prefix.toUpperCase()}PickerScrollItem`;
}

export default PickerScrollItem;
