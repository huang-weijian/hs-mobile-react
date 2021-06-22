import "./style";
import { toastPositions, toastTypes } from "../../types/types";
import ToastIcon from "./components/ToastIcon";
import { getToastBodyClass } from "./func";
import ToastContainerUtil from "./components/ToastContainer";
import {
  CSSProperties,
  MutableRefObject,
  ReactChild,
  useEffect,
  useRef,
  useState,
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
   * Toast的样式
   * Toast className
   */
  toastClassName?: string;
  /**
   * Toast的style
   * Toast style
   */
  toastStyle?: CSSProperties;
  /**
   * Toast body的样式
   * Toast body className
   */
  bodyClassName?: string;
  /**
   * Toast body的style
   * Toast body style
   */
  bodyStyle?: CSSProperties;
  /**
   * Toast msg的样式
   * Toast msg className
   */
  msgClassName?: string;
  /**
   * Toast msg的style
   * Toast msg style
   */
  msgStyle?: CSSProperties;
  /**
   * Toast mask的样式
   * Toast mask className
   */
  maskClassName?: string;
  /**
   * Toast mask的style
   * Toast mask style
   */
  maskStyle?: CSSProperties;
  /**
   * 展示或隐藏遮罩层
   * show or hide mask
   */
  showMask?: boolean;
}

interface IToastNodeEvent {
  closedResolve: () => void;
}

const defaultIToastMsg: IToastMsg = {
  type: "info",
  msg: "",
  position: "normal",
  duration: 2500,
};
let key = 0;

function ToastComponent(msg: IToastMsg & IToastNodeEvent) {
  const [zIndex] = useState<number>(operaIndex.get());
  let bodyClassName = getToastBodyClass(msg);
  let ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.display = "none";
          }
        }, 1000);
      }
      msg.closedResolve();
    }, msg.duration);
    return () => {
      msg.closedResolve();
    };
  }, []);
  let toastStyle: CSSProperties = {
    zIndex: zIndex,
  };
  let maskStyle: CSSProperties = {
    zIndex: zIndex + 1,
    ...(msg.showMask ? {} : { display: "none" }),
  };
  let toastBodyStyle: CSSProperties = {
    zIndex: zIndex + 2,
    // info或者loading类型
    // if toast type is info or loading
    ...(["info", "loading"].indexOf(msg.type || "") > -1
      ? { height: "auto" }
      : {}),
    ...msg.bodyStyle,
  };
  let msgStyle: CSSProperties = msg.iconNode ? {} : { marginTop: 0 };
  return (
    <div
      className={`hs-toast ${msg.toastClassName || ""}`}
      ref={ref}
      style={{ ...toastStyle, ...msg.toastStyle }}
    >
      <div
        className={`hs-toast-mask ${msg.maskClassName || ""}`}
        style={{ ...maskStyle, ...msg.maskStyle }}
      ></div>
      {/*消息容器*/}
      {/*msg container*/}
      <div
        className={`hs-toast-body ${bodyClassName}`}
        style={{ ...toastBodyStyle }}
      >
        {/*toast图标 toast icon*/}
        {msg.iconNode}
        {msg.msg ? (
          <div
            className={"hs-toast-msg"}
            style={{ ...msgStyle, ...msg.msgStyle }}
          >
            {msg.msg}
          </div>
        ) : null}
      </div>
    </div>
  );
}

namespace ToastComponent {
  export const displayName = `${prefix.toUpperCase()}ToastComponent`;
}

function Toast(msg: IToastMsg = clone(defaultIToastMsg)) {
  function run(openedResolve: () => void) {
    msg = Object.assign<IToastMsg, IToastMsg>(clone(defaultIToastMsg), msg);
    msg.duration = msg.duration === -1 ? 1000 * 100000000000000 : msg.duration;
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
      <ToastComponent
        key={++key}
        {...msg}
        closedResolve={openedResolve}
      ></ToastComponent>,
    ]);
  }

  return new Promise<void>((openedResolve) => {
    run(openedResolve);
  });
}

namespace Toast {
  export const loading = function (msg: IToastMsg = clone(defaultIToastMsg)) {
    let errorMsg: IToastMsg = {
      type: "loading",
    };
    msg = Object.assign<IToastMsg, IToastMsg>(msg, errorMsg);
    return Toast(msg);
  };
  export const success = function (msg: IToastMsg = clone(defaultIToastMsg)) {
    let errorMsg: IToastMsg = {
      type: "success",
    };
    msg = Object.assign<IToastMsg, IToastMsg>(msg, errorMsg);
    return Toast(msg);
  };
  export const error = function (msg: IToastMsg = clone(defaultIToastMsg)) {
    let errorMsg: IToastMsg = {
      type: "error",
    };
    msg = Object.assign<IToastMsg, IToastMsg>(msg, errorMsg);
    return Toast(msg);
  };
  export const clear = function () {
    ToastContainerUtil.setNone();
  };
}

export default Toast;
