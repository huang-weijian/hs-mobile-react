import "./style/index";
import { toastTypes } from "../../types/types";
import ToastIcon from "./components/ToastIcon";

export declare interface IToastMsg {
  /**
   * 消息的类型  toast theme type
   */
  type?: toastTypes;
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
};

function Toast(msg: IToastMsg) {
  return (
    <div className={"hs-toast"}>
      {/*toast图标 toast icon*/}
      <ToastIcon.Loading></ToastIcon.Loading>
      <div className={"hs-toast-msg"}>{msg.msg}</div>
    </div>
  );
}

namespace Toast {
  export const primary = function () {};
}

export default Toast;
