import "./style";
import { prefix } from "../../string/txt";
import { CSSProperties, MouseEventHandler, ReactChild, useState } from "react";
import {
  getClassName,
  getPickerSelectedByValues,
  getSafeAreaClassName,
  getSafeAreaStyle,
  getScrollContainerClassName,
  getScrollContainerStyle,
  getStyle,
  getToolbarClassName,
  getToolbarStyle,
} from "./func";
import PickerScrollItem, {
  IDataItem,
} from "./components/PickerScrollItem/PickerScrollItem";

export declare interface IPickerDataItem {
  id: string;
  data: IDataItem[];
}

export declare type IPickerSelectDataItem = {
  /**
   * 选中项所在的IPickerDataItem的id
   * ID of the IPickerDataItem where the selected item is located
   */
  id: string;
  data: IDataItem;
  /**
   * index of IPickerDataItem's data
   */
  idx: number;
};

export declare interface IPickerProps {
  // style
  style?: CSSProperties;
  toolbarStyle?: CSSProperties;
  scrollContainerStyle?: CSSProperties;
  safeAreaStyle?: CSSProperties;
  // className
  className?: string;
  toolbarClassName?: string;
  scrollContainerClassName?: string;
  safeAreaClassName?: string;
  // normal
  safeArea?: boolean;
  titleNode?: ReactChild;
  cancelNode?: ReactChild;
  sureNode?: ReactChild;
  columns: Array<IPickerDataItem>;
  values: Array<IDataItem["value"]>;
  onSelected?: (item: IPickerSelectDataItem) => any;
  // todo
  onCancel?: MouseEventHandler<HTMLSpanElement>;
  onConfirm?: (
    selected: IPickerSelectDataItem[],
    ids?: IPickerSelectDataItem["id"][],
    values?: IPickerSelectDataItem["data"]["value"][],
    idxes?: IPickerSelectDataItem["idx"][]
  ) => any;
}

export const COM_PREFIX = `${prefix}-picker`;

function Picker(props: IPickerProps) {
  // hooks
  let [selected, setSelected] = useState<IPickerSelectDataItem[]>(
    getPickerSelectedByValues(props)
  );

  // className
  let className = getClassName(props);
  let toolBarClassName = getToolbarClassName(props);
  let scrollContainerClassName = getScrollContainerClassName(props);
  let safeAreaClassName = getSafeAreaClassName(props);

  // style
  let style = getStyle(props);
  let toolbarStyle = getToolbarStyle(props);
  let scrollContainerStyle = getScrollContainerStyle(props);
  let safeAreaStyle = getSafeAreaStyle(props);
  return (
    <div className={className} style={style}>
      {/*  工具栏*/}
      {/*  toolbar*/}
      <div className={toolBarClassName} style={toolbarStyle}>
        <span
          className={`${COM_PREFIX}-toolbar-cancel`}
          onClick={props.onCancel}
        >
          {props.cancelNode || "cancel"}
        </span>
        <span className={`${COM_PREFIX}-toolbar-title`}>{props.titleNode}</span>
        <span
          className={`${COM_PREFIX}-toolbar-sure`}
          onClick={() => {
            if (props.onConfirm) {
              let tempIds = selected.map((item) => item.id);
              let tempValues = selected.map((item) => item.data.value);
              let tempIndexes = selected.map((item) => item.idx);
              props.onConfirm(selected, tempIds, tempValues, tempIndexes);
            }
          }}
        >
          {props.sureNode || "confirm"}
        </span>
      </div>
      {/*  滚轴容器*/}
      {/*  scroll container*/}
      <div className={scrollContainerClassName} style={scrollContainerStyle}>
        {props.columns.map((item, idx) => {
          return (
            <PickerScrollItem
              style={{ flex: 1 }}
              data={item.data}
              key={item.id}
              value={props.values[idx]}
              onSelect={(selectedItem, selectedIdx) => {
                let tempSelectedItem = {
                  id: item.id,
                  data: selectedItem,
                  idx: selectedIdx,
                };
                setSelected((preSelected) => {
                  preSelected[idx] = tempSelectedItem;
                  return preSelected;
                });
                if (props.onSelected) {
                  props.onSelected(tempSelectedItem);
                }
              }}
            ></PickerScrollItem>
          );
        })}
      </div>
      {/*  安全区*/}
      {/*  safe area*/}
      {props.safeArea ? (
        <div className={safeAreaClassName} style={safeAreaStyle}></div>
      ) : null}
    </div>
  );
}

namespace Picker {
  export let displayName: string = `${prefix.toUpperCase()}Picker`;
  export let defaultProps: IPickerProps = {
    columns: [],
    values: [],
  };
}

export default Picker;
