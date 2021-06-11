import { prefix } from "../../../string/txt";
import { ButtonProps } from "../Button";

/**
 * 根据props返回对应的class（return class string by button props）
 */
export function getClassByProp(props: ButtonProps): string {
  // 根据样式与按钮类型（by props.type and props.className）
  let typeClass = "";
  let propClass = "";
  switch (props.type) {
    case "primary":
      typeClass = `${prefix}-button-primary`;
      break;
    case "danger":
      typeClass = `${prefix}-button-danger`;
      break;
    case "warning":
      typeClass = `${prefix}-button-warning`;
      break;
    case "success":
      typeClass = `${prefix}-button-success`;
      break;
    case "info":
      typeClass = `${prefix}-button-info`;
      break;
    default:
      typeClass = `${prefix}-button-default`;
      break;
  }
  // 按钮大小 button size
  let sizeClass = "";
  switch (props.size) {
    case "mini": {
      sizeClass = `${prefix}-button-mini`;
      break;
    }
    case "normal": {
      sizeClass = `${prefix}-button-normal`;
      break;
    }
    case "large": {
      sizeClass = `${prefix}-button-large`;
      break;
    }
  }
  // 是否是朴素按钮 is plain button
  typeClass = `${typeClass}-${props.plain ? "plain" : "normal"}`;
  propClass =
    props.className instanceof Array
      ? `${props.className.join(" ")}`
      : `${props.className}`;
  // 根据block和round（by props.block and props.round）
  let blockClass = props.block
    ? `${prefix}-button-block`
    : `${prefix}-button-inline`;
  let roundClass = props.round ? `${prefix}-button-round` : "";
  return typeClass.concat(
    " ",
    propClass,
    " ",
    blockClass,
    " ",
    roundClass,
    " ",
    sizeClass
  );
}

/**
 * 创建水波纹元素（create ripple element）
 * @param ripplePos
 */
export function createRipple(ripplePos: { x: number; y: number }): HTMLElement {
  let tempChild = document.createElement("div");
  tempChild.classList.add("hs-button-ripple");
  tempChild.style.left = `${ripplePos.x}px`;
  tempChild.style.top = `${ripplePos.y}px`;
  return tempChild;
}
