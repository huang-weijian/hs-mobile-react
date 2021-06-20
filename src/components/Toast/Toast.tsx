import "./style/index";
import { toastPositions, toastTypes } from "../../types/types";
import ToastIcon from "./components/ToastIcon";
import { getToastClass } from "./func";
import ToastContainerUtil from "./components/ToastContainer";
import { ReactChild } from "react";

export declare interface IToastMsg {
  /**
   * 消息的类型
   * toast theme type
   */
  type?: toastTypes;
  /**
   * Toast位置
   * Toast Position
   */
  position?: toastPositions;
  /**
   * 展示或隐藏Icon
   * show or hide Icon
   */
  showIcon?: boolean;
  /**
   * 自定义Icon节点
   * custom Icon Node
   */
  iconNode?: ReactChild;
  /**
   * toast消息
   * toast msg
   */
  msg?: string;
  /**
   * toast持续时间
   * toast duration time unit ms
   * -1为不关闭
   */
  duration?: number;
  /**
   * 展示或隐藏遮罩层
   * show or hide mask
   */
  showMask?: boolean;
}

const defaultIToastMsg: IToastMsg = {
  type: "info",
  msg: "",
  duration: 2500,
};

function ToastComponent(msg: IToastMsg) {
  let className = getToastClass(msg);
  return (
    <div className={`hs-toast ${className}`}>
      {/*toast图标 toast icon*/}
      {msg.iconNode}
      {msg.msg ? <div className={"hs-toast-msg"}>{msg.msg}</div> : null}
    </div>
  );
}

function Toast(msg: IToastMsg = defaultIToastMsg) {
  ToastContainerUtil.addToast(<ToastComponent {...msg}></ToastComponent>);
}

namespace Toast {
  export const loading = function (msg: IToastMsg = defaultIToastMsg) {
    let loadingMsg: IToastMsg = {
      iconNode: <ToastIcon.Loading></ToastIcon.Loading>,
      msg: "loading",
    };
    Toast(loadingMsg);
  };
}

export default Toast;
