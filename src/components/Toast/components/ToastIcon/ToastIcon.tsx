import "./style";
import { ReactNode } from "react";

interface IToastIconBase {
  children: ReactNode;
}

function ToastIconBase(props: IToastIconBase) {
  return <div className={`hs-toast-icon`}>{props.children}</div>;
}

interface IToastIcon {
  Loading: () => JSX.Element;
  Success: () => JSX.Element;
  Error: () => JSX.Element;
}

const ToastIcon: IToastIcon = {
  Loading() {
    return (
      <ToastIconBase>
        <div className={"hs-toast-icon-loading"}></div>
      </ToastIconBase>
    );
  },
  Success() {
    return (
      <ToastIconBase>
        <div className={"hs-toast-icon-success"}></div>
      </ToastIconBase>
    );
  },
  Error() {
    return (
      <ToastIconBase>
        <div className={"hs-toast-icon-error"}>
          <div
            className={"hs-toast-icon-error-itemone hs-toast-icon-error-item"}
          ></div>
          <div
            className={"hs-toast-icon-error-itemtwo hs-toast-icon-error-item"}
          ></div>
        </div>
      </ToastIconBase>
    );
  },
};

export default ToastIcon;
