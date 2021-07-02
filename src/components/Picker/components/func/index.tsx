import {
  COM_PREFIX,
  IPickerScrollItemProps,
} from "../PickerScrollItem/PickerScrollItem";

export function getClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}`;
  return `${className}`;
}

export function getCursorClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-cursor`;
  return `${className}`;
}

export function getLineClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-line`;
  return `${className}`;
}
