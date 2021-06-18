import { PopupProps } from "../Popup";
import { CSSProperties } from "react";

/**
 * 获取popup的index
 * get popup index
 */
export const operaIndex = (function (): {
  get: () => number;
  reduc: () => void;
} {
  let zIndex = 2000;
  return {
    get: function () {
      return ++zIndex;
    },
    // todo
    reduc: function () {
      zIndex--;
    },
  };
})();

/**
 * 根据popup位置获取popup body的进入与离开的内联样式
 * get popup body enter and exit style by popup position
 * @param props
 */
export function getPopupBodyStyle(props: PopupProps): {
  enterStyle: CSSProperties;
  exitStyle: CSSProperties;
} {
  let radius = props.radius ? props.radius : "1em";
  // 进入时的内联样式 enter style
  let enterStyle: CSSProperties = {};
  // 离开时的内联样式 exit style
  let exitStyle: CSSProperties = {};
  switch (props.position) {
    //  在上
    case "top":
      enterStyle.width = "100%";
      enterStyle.height = "30%";
      enterStyle.top = "0";
      enterStyle.left = "0";
      exitStyle.width = "100%";
      exitStyle.height = "0%";
      exitStyle.top = "0";
      exitStyle.left = "0";
      if (props.round) {
        enterStyle.borderBottomLeftRadius = radius;
        enterStyle.borderBottomRightRadius = radius;
        exitStyle.borderBottomLeftRadius = radius;
        exitStyle.borderBottomRightRadius = radius;
      }
      break;
    //  在左
    case "left":
      enterStyle.width = "30%";
      enterStyle.height = "100%";
      enterStyle.top = "0";
      enterStyle.left = "0";
      exitStyle.width = "0%";
      exitStyle.height = "100%";
      exitStyle.top = "0";
      exitStyle.left = "0";
      if (props.round) {
        enterStyle.borderTopRightRadius = radius;
        enterStyle.borderBottomRightRadius = radius;
        exitStyle.borderTopRightRadius = radius;
        exitStyle.borderBottomRightRadius = radius;
      }
      break;
    //  在右
    case "right":
      enterStyle.width = "30%";
      enterStyle.height = "100%";
      enterStyle.top = "0";
      enterStyle.right = "0";
      exitStyle.width = "0%";
      exitStyle.height = "100%";
      exitStyle.top = "0";
      exitStyle.right = "0";
      if (props.round) {
        enterStyle.borderTopLeftRadius = radius;
        enterStyle.borderBottomLeftRadius = radius;
        exitStyle.borderTopLeftRadius = radius;
        exitStyle.borderBottomLeftRadius = radius;
      }
      break;
    //  在下
    case "bottom":
      enterStyle.width = "100%";
      enterStyle.height = "30%";
      enterStyle.bottom = "0";
      enterStyle.left = "0";
      exitStyle.width = "100%";
      exitStyle.height = "0%";
      if (props.round) {
        enterStyle.borderTopLeftRadius = radius;
        enterStyle.borderTopRightRadius = radius;
        exitStyle.borderTopLeftRadius = radius;
        exitStyle.borderTopRightRadius = radius;
      }
      break;
    default:
      enterStyle.width = "100%";
      enterStyle.height = "30%";
      enterStyle.top = "0";
      enterStyle.left = "0";
      exitStyle.width = "100%";
      exitStyle.height = "0%";
      exitStyle.top = "0";
      exitStyle.left = "0";
      if (props.round) {
        enterStyle.borderBottomLeftRadius = radius;
        enterStyle.borderBottomRightRadius = radius;
        exitStyle.borderBottomLeftRadius = radius;
        exitStyle.borderBottomRightRadius = radius;
      }
  }
  enterStyle = Object.assign({}, enterStyle, props.bodyStyle);
  return { enterStyle, exitStyle };
}
