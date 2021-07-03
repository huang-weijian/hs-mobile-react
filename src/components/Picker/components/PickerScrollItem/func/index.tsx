import {
  BASE_HEIGHT,
  COM_PREFIX,
  IPickerScrollItemProps,
  LINE_HEIGHT,
} from "../PickerScrollItem";

export function getClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}`;
  return `${className}`;
}

export function getCursorClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-cursor`;
  return `${className}`;
}

export function getCursorMiddleClassName(
  props: IPickerScrollItemProps
): string {
  let className = `${COM_PREFIX}-cursor-middle`;
  return `${className}`;
}

export function getCursorSpaceClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-cursor-space`;
  return `${className}`;
}

export function getLineContainerClassName(
  props: IPickerScrollItemProps
): string {
  let className = `${COM_PREFIX}-line-container`;
  return `${className}`;
}

export function getLineClassName(props: IPickerScrollItemProps): string {
  let className = `${COM_PREFIX}-line`;
  return `${className}`;
}

/**
 * 根据当前移动距离判断是上移还是下移多少基础高度
 * Judge whether to move up or down according to the current moving distance
 * @param y 移动的距离 deviation
 */
export function getFormatDeviation(y: number): number {
  let result = 0;
  let multiple = Math.round(y / LINE_HEIGHT);
  let deviation = multiple * LINE_HEIGHT;
  console.info(multiple,deviation)
  result = deviation;
  return result;
}
