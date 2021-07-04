import {
  createElement,
  CSSProperties,
  MutableRefObject,
  ReactChild,
  ReactNode,
  useRef,
  useState,
} from "react";
import "./style";
import { positions } from "../../types/types";
import { prefix } from "../../string/txt";
import { getPopupBodyStyle } from "./func";
import { operaIndex } from "../../util";
import {
  CSSTransition,
  Transition,
  TransitionStatus,
} from "react-transition-group";

export declare interface PopupProps {
  /**
   * 是否展示popup  show or hide popup
   */
  show: boolean;
  /**
   * popup body的style  popup body style
   */
  bodyStyle?: CSSProperties;
  /**
   * popup body的className  popup body className
   */
  bodyClassName?: string;
  /**
   * 是否展示遮罩层  show or hide mask
   */
  showMask?: boolean;
  position?: positions;
  /**
   * 遮罩层的class  mask class
   */
  maskClassName?: string;
  /**
   * 遮罩层的style  mask style
   */
  maskStyle?: CSSProperties;
  /**
   * 动画持续时间单位ms animated duration time unit number
   * todo
   */
  duration?: number;
  /**
   * 是否是圆角  is round
   */
  round?: boolean;
  /**
   * popup body radius
   */
  radius?: string;
  /**
   *  是否适配手机安全区域  phone safe area
   */
  safeArea?: boolean;
  bodyTitleNode?: ReactChild;
  /**
   * 是否展示右上角关闭按钮  show or hide top-right close btn
   */
  showClose?: boolean;
  children?: ReactNode;
  /**
   *  popup打开后的事件 on Popup opened
   */
  onOpened?: () => any;
  /**
   *  popup关闭后的事件 on Popup closed
   */
  onClosed?: () => any;
  /**
   * 取消popup  cancel popup
   */
  onCancel: () => any;
}

const defaultProps: PopupProps = {
  onCancel(): any {},
  show: true,
  position: "top",
  bodyClassName: "",
  showMask: true,
  maskClassName: "",
  showClose: true,
};

function Popup(props: PopupProps) {
  props = Object.assign({}, defaultProps, props);
  // position index
  let { get } = operaIndex;
  let [zIndex, setZIndex] = useState(get());
  // ref
  let popupRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  let bodyRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  // popup body transition style
  let { enterStyle, exitStyle } = getPopupBodyStyle(props);
  enterStyle.zIndex = zIndex + 2;
  exitStyle.zIndex = zIndex + 2;
  const transitionStyles: { [props: string]: CSSProperties } = {
    entering: enterStyle,
    entered: enterStyle,
    exiting: exitStyle,
    exited: exitStyle,
  };
  let popBody = (state: TransitionStatus) => {
    return (
      <div
        ref={bodyRef}
        style={{ ...enterStyle, ...transitionStyles[state] }}
        className={`hs-popup-body ${
          props.safeArea && props.position !== "top"
            ? "hs-popup-body-safearea"
            : ""
        } ${props.bodyClassName}`}
      >
        {/*popup body title*/}
        {props.showClose && !props.bodyTitleNode ? (
          <div className={`hs-popup-body-title`}>
            <span onClick={props.onCancel} className={`hs-popup-close-btn`}>
              +
            </span>
          </div>
        ) : null}
        {/*popup body title*/}
        {props.bodyTitleNode}
        {/*popup body content*/}
        <div className={`hs-popup-body-content`}>
          {/*完全挂载之后再展示*/}
          {/*display children after mounted complete*/}
          {props.show&&state==="entered" ? props.children : null}
        </div>
      </div>
    );
  };
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={"hs-popup-css"}
      addEndListener={() => {}}
      nodeRef={popupRef}
      onEnter={() => setZIndex(get())}
      onEntered={props.onOpened}
      onExited={props.onClosed}
    >
      <div className={"hs-popup"} style={{ zIndex: zIndex }} ref={popupRef}>
        {/*遮罩层 mask*/}
        <div
          style={{
            zIndex: zIndex + 1,
            ...props.maskStyle,
            ...(props.showMask ? {} : { opacity: 0 }),
          }}
          className={`hs-popup-mask ${props.maskClassName}`}
          onClick={() => props.onCancel()}
        ></div>
        {/*popup body*/}
        <Transition
          nodeRef={bodyRef}
          in={props.show}
          timeout={200}
          addEndListener={() => {}}
        >
          {popBody}
        </Transition>
      </div>
    </CSSTransition>
  );
}

namespace Popup {
  export const displayName: string = `${prefix.toUpperCase()}Popup`;
}

export default Popup;
