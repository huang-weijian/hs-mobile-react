import { COM_PREFIX, IPickerScrollItemProps } from "../PickerScrollItem";

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

export function getLineClassName(
  props: IPickerScrollItemProps,
  idx: number,
  selectedIdx?: number
): string {
  let className = `${COM_PREFIX}-line`;
  let selectedClassName = idx === selectedIdx ? `${className}_selected` : "";
  return `${className} ${selectedClassName}`.trim();
}

/**
 * 根据当前移动距离判断是上移还是下移多少基础高度
 * Judge whether to move up or down according to the current moving distance
 * @param y 移动的距离 deviation
 */
export function getFormatDeviation(y: number, lineHeight: number): number {
  if (y === 0) {
    return 0;
  }
  // 在选项之间
  // between data item
  let result = 0;
  let multiple = Math.round(y / lineHeight);
  let deviation = multiple * lineHeight;
  result = deviation;
  return result;
}
