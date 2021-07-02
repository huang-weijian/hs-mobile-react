import { prefix } from "../../../../string/txt";
import {
  getClassName,
  getCursorClassName,
  getLineClassName,
  getLineContainerClassName,
} from "../func";
import { CSSProperties } from "react";

export declare interface IDataItem<T> {
  text: "";
  value: T;

  [props: string]: any;
}

export declare interface IPickerScrollItemProps<T = any> {
  data: Array<IDataItem<T>>;
  style?: CSSProperties;
  select?: (data: IDataItem<T>) => void;
}

export const COM_PREFIX = `${prefix}-picker-scroll-item`;

function PickerScrollItem(props: IPickerScrollItemProps) {
  let style: CSSProperties = {
    ...{ height: "100%" },
    ...props.style,
  };
  let className = getClassName(props);
  let cursorClassName = getCursorClassName(props);
  let lineContainerClassName = getLineContainerClassName(props);
  let lineClassName = getLineClassName(props);
  return (
    <div className={className} style={style}>
      {/*cursor*/}
      <div className={cursorClassName}></div>
      {/*scroll container*/}
      <div className={lineContainerClassName}>
        {/*scroll line*/}
        <div className={lineClassName}></div>
      </div>
    </div>
  );
}

namespace PickerScrollItem {
  export const displayName: string = `${prefix.toUpperCase()}PickerScrollItem`;
}

export default PickerScrollItem;
