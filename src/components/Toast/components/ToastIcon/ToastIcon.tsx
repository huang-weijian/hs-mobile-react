import "./style";
import { ReactChild, ReactNode } from "react";

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
  Info: () => JSX.Element;
}

const ToastIcon: IToastIcon = {
  Loading() {
    return (
      <ToastIconBase>
        <div className={"hs-toast-icon-loading"}>123</div>
      </ToastIconBase>
    );
  },
  Success() {
    return <ToastIconBase>loading</ToastIconBase>;
  },
  Error() {
    return <ToastIconBase>loading</ToastIconBase>;
  },
  Info() {
    return <ToastIconBase>loading</ToastIconBase>;
  },
};

export default ToastIcon;
