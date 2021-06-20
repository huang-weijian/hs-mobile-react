import "./style";
import { toastPositions, toastTypes } from "../../types/types";
import ToastIcon from "./components/ToastIcon";
import { getToastClass } from "./func";
import ToastContainerUtil from "./components/ToastContainer";
import {
  CSSProperties,
  MutableRefObject,
  ReactChild,
  useEffect,
  useRef,
} from "react";
import { prefix } from "../../string/txt";
import { clone, operaIndex } from "../../util";

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
  position: "normal",
  duration: 2500,
};
let key = 0;

function ToastComponent(msg: IToastMsg) {
  let className = getToastClass(msg);
  let ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    setTimeout(
      () => {
        if (ref.current) {
          ref.current.style.display = "none";
        }
      },
      msg.duration === -1 ? 1000 * 100000000000000 : msg.duration
    );
  }, []);
  let style: CSSProperties = {
    zIndex: operaIndex.get(),
  };
  ["info", "loading"].indexOf(msg.type || "") > -1
    ? (style.height = "auto")
    : "";
  let msgStyle: CSSProperties = msg.iconNode ? {} : { marginTop: 0 };
  return (
    <div className={`hs-toast ${className}`} ref={ref} style={{ ...style }}>
      {/*toast图标 toast icon*/}
      {msg.iconNode}
      {msg.msg ? (
        <div className={"hs-toast-msg"} style={{ ...msgStyle }}>
          {msg.msg}
        </div>
      ) : null}
    </div>
  );
}

namespace ToastComponent {
  export const displayName = `${prefix.toUpperCase()}ToastComponent`;
}

function Toast(msg: IToastMsg = clone(defaultIToastMsg)) {
  msg = Object.assign<IToastMsg, IToastMsg>(clone(defaultIToastMsg), msg);
  if (msg.type !== "info" && !msg.iconNode) {
    switch (msg.type) {
      case "success":
        msg.iconNode = <ToastIcon.Success></ToastIcon.Success>;
        break;
      case "loading":
        msg.iconNode = <ToastIcon.Loading></ToastIcon.Loading>;
        break;
      case "error":
        msg.iconNode = <ToastIcon.Error></ToastIcon.Error>;
        break;
    }
  }
  ToastContainerUtil.setToast([
    <ToastComponent key={++key} {...msg}></ToastComponent>,
  ]);
}

namespace Toast {
  export const loading = function (msg: IToastMsg = clone(defaultIToastMsg)) {
    let errorMsg: IToastMsg = {
      type: "loading",
    };
    msg = Object.assign<IToastMsg, IToastMsg>(msg, errorMsg);
    Toast(msg);
  };
  export const success = function (msg: IToastMsg = clone(defaultIToastMsg)) {
    let errorMsg: IToastMsg = {
      type: "success",
    };
    msg = Object.assign<IToastMsg, IToastMsg>(msg, errorMsg);
    Toast(msg);
  };
  export const error = function (msg: IToastMsg = clone(defaultIToastMsg)) {
    let errorMsg: IToastMsg = {
      type: "error",
    };
    msg = Object.assign<IToastMsg, IToastMsg>(msg, errorMsg);
    Toast(msg);
  };
}

export default Toast;
