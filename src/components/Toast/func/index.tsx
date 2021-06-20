import { IToastMsg } from "../Toast";
import { prefix } from "../../../string/txt";

/**
 * 根据Toast的位置获得对应样式
 * get Toast position className by msg's position
 * @param msg
 */
export function getToastPositionClass(msg: IToastMsg): string {
  let className = "";
  switch (msg.position) {
    case "top":
      className = `${prefix}-toast_top`;
      break;
    case "bottom":
      className = `${prefix}-toast_bottom`;
      break;
    default:
      className = `${prefix}-toast_normal`;
  }
  return className;
}

/**
 * 根据是否有Icon Node获取class
 * get className by msg's Icon Node
 * @param msg
 */
export function getToastIconClass(msg: IToastMsg): string {
  let className = "";
  if (msg.iconNode) {
    className = `${prefix}-toast_icon`;
  }
  return className;
}

export function getToastClass(msg: IToastMsg) {
  return `${getToastPositionClass(msg)} ${getToastIconClass(msg)}`;
}
