import "./style";
import { ReactNode, useEffect, useState } from "react";

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

function Ellipsis() {
  const [strArr, setStrArr] = useState(new Array<string>("."));
  useEffect(() => {
    let key = setTimeout(() => {
      if (strArr.length >= 3) {
        setStrArr(["."]);
      } else {
        setStrArr(strArr.concat("."));
      }
    }, 1000 * 1);
    return () => {
      // 防止内存泄漏
      // prevent memory leaks
      clearTimeout(key);
    };
  }, [strArr.length]);
  return <div>{strArr.join(" ")}</div>;
}

const ToastIcon: IToastIcon = {
  Loading() {
    return (
      <ToastIconBase>
        <Ellipsis></Ellipsis>
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
          <div>
            <div className={"hs-toast-icon-error-line"}></div>
          </div>
          <div style={{ lineHeight: 0 }}>
            <div className={"hs-toast-icon-error-point"}></div>
          </div>
        </div>
      </ToastIconBase>
    );
  },
};

export default ToastIcon;
