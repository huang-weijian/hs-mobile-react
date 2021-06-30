import "./style";
import { prefix } from "../../string/txt";
import { getBodyClassName, getClassName, getMaskClassName } from "./func";
import {
  CSSProperties,
  MutableRefObject,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import { operaIndex } from "../../util";
import { Transition, TransitionStatus } from "react-transition-group";
import { createPortal } from "react-dom";

export declare interface IDialogProps {
  show: boolean;
  className?: string;
  maskClassName?: string;
  bodyClassName?: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  /**
   * 是否隐藏mask
   * hide mask
   */
  hideMask?: boolean;
  children?: ReactNode;
  /**
   *  Dialog打开后的事件 on Dialog opened
   */
  onOpened?: () => any;
  /**
   *  Dialog关闭后的事件 on Dialog closed
   */
  onClosed?: () => any;
  /**
   * 取消Dialog  cancel Dialog
   */
  onCancel: () => any;
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
    ...props.style,
  };
  let dialogBodyStyle: CSSProperties = {
    ...dialogBodyZIndexStyle,
    ...props.bodyStyle,
  };
  const transitionStyles: { [props: string]: CSSProperties } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, height: 0 },
  };
  // event
  let cancelHandler = useCallback(() => {
    if (props.onCancel) {
      props.onCancel();
    }
  }, [props.onCancel]);
  return createPortal(
    <Transition
      in={props.show}
      nodeRef={ref}
      timeout={200}
      onEntered={props.onOpened}
      onExited={props.onClosed}
    >
      {(state: TransitionStatus) => (
        <div
          style={{ ...dialogStyle, ...transitionStyles[state] }}
          className={className}
          ref={ref}
        >
          <div style={dialogBodyStyle} className={bodyClassName}>
            {props.children}
          </div>
          <div className={maskClassName} onClick={cancelHandler}></div>
        </div>
      )}
    </Transition>,
    document.body
  );
}

namespace Dialog {
  export const displayName: string = `${prefix.toUpperCase()}Dialog`;
}

export default Dialog;
