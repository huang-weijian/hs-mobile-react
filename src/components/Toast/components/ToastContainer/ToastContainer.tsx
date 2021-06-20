import { render } from "react-dom";
import { prefix } from "../../../../string/txt";
import {
  createRef,
  ForwardedRef,
  forwardRef,
  ReactChild,
  ReactNode,
  useImperativeHandle,
  useState,
} from "react";
import { getToastContainerDOM } from "./func";

export declare interface IToastContainerUtil {
  addToast: (node: ReactChild) => void;
  closeToast: () => void;
}

export declare interface IToastContainerProps {}

export declare interface IToastContainerRef {
  setToast: (node: ReactNode) => void;
}

// Toast是否初始化
// Toast init flag
let ToastContainerInitFlag = false;
let ToastContainerRef = createRef<IToastContainerRef>();

function ToastContainer(
  props: IToastContainerProps,
  ref: ForwardedRef<IToastContainerRef>
) {
  let [toast, setToast] = useState<ReactNode>(<div></div>);
  useImperativeHandle<IToastContainerRef, IToastContainerRef>(
    ref,
    function init() {
      return {
        setToast: (node) => {
          setToast(node);
        },
      };
    },
    []
  );
  return <div className={`hs-toast-container`}>{toast}</div>;
}

namespace ToastContainer {
  export const displayName = `${prefix.toUpperCase()}ToastContainer`;
}

const ToastContainerForward = forwardRef(ToastContainer);

const ToastContainerUtil: IToastContainerUtil = {
  addToast(node: ReactNode) {
    if (!ToastContainerInitFlag) {
      // 如果toast container没渲染
      // 渲染toast container，再把toast插入
      // if the toast container is not rendred
      // render toast container then add toast component to toast container
      render(
        <ToastContainerForward ref={ToastContainerRef}></ToastContainerForward>,
        getToastContainerDOM(),
        () => {
          // 这是同步代码
          // sync code
          ToastContainerInitFlag = true;
        }
      );
    }
    // @ts-ignore
    ToastContainerRef.current.setToast(node);
  },
  closeToast() {},
};

export default ToastContainerUtil;
