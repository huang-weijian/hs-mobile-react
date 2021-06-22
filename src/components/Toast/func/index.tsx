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
      className = `${prefix}-toast-body_top`;
      break;
    case "bottom":
      className = `${prefix}-toast-body_bottom`;
      break;
    default:
      className = `${prefix}-toast-body_normal`;
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
    className = `${prefix}-toast-body_icon`;
  }
  return className;
}

export function getToastBodyClass(msg: IToastMsg) {
  return `${getToastPositionClass(msg)} ${getToastIconClass(msg)}`.concat(
    ` ${msg.bodyClassName}` || ""
  );
}
