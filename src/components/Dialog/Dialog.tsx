import "./style";
import { prefix } from "../../string/txt";
import { getBodyClassName, getClassName, getMaskClassName } from "./func";
import { CSSProperties, MutableRefObject, ReactNode, useRef } from "react";
import { operaIndex } from "../../util";
import { Transition, TransitionStatus } from "react-transition-group";

export declare interface IDialogProps {
  show: boolean;
  className?: string;
  maskClassName?: string;
  bodyClassName?: string;
  /**
   * 是否隐藏mask
   * hide mask
   */
  hideMask?: boolean;
  children?: ReactNode;
  onCancel: () => void;
}

export const COM_PREFIX = `${prefix}-dialog`;

function Dialog(props: IDialogProps) {
  // hooks
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  // className
  let className = getClassName(props);
  let bodyClassName = getBodyClassName(props);
  let maskClassName = getMaskClassName(props);
  // index style
  let zIndex = operaIndex.get();
  let dialogZIndexStyle: CSSProperties = {
    zIndex: zIndex,
  };
  let dialogBodyZIndexStyle: CSSProperties = {
    zIndex: zIndex + 1,
  };
  let dialogStyle: CSSProperties = {
    ...dialogBodyZIndexStyle,
  };
  let dialogBodyStyle: CSSProperties = {
    ...dialogBodyZIndexStyle,
  };
  return (
    <Transition in={props.show} nodeRef={ref} timeout={200}>
      {(state: TransitionStatus) => (
        <div style={dialogStyle} className={className} ref={ref}>
          <div style={dialogBodyStyle} className={bodyClassName}>
            {props.children}
          </div>
          <div className={maskClassName}></div>
        </div>
      )}
    </Transition>
  );
}

namespace Dialog {
  export const displayName: string = `${prefix.toUpperCase()}Dialog`;
}

export default Dialog;
