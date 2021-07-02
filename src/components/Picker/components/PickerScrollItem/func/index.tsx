import {
  COM_PREFIX,
  IPickerScrollItemProps,
} from "../PickerScrollItem";

export function getClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}`;
  return `${className}`;
}

export function getCursorClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-cursor`;
  return `${className}`;
}

export function getCursorMiddleClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-cursor-middle`;
  return `${className}`;
}

export function getCursorSpaceClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-cursor-space`;
  return `${className}`;
}

export function getLineContainerClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-line-container`;
  return `${className}`;
}

export function getLineClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-line`;
  return `${className}`;
}
