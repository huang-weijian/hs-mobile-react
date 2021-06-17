import {
  createElement,
  CSSProperties,
  MutableRefObject,
  ReactChild,
  useRef,
  useState,
} from "react";
import "./style";
import { positions } from "../../types/types";
import { prefix } from "../../string/txt";
import { operaIndex } from "./func";
import { CSSTransition } from "react-transition-group";

export declare interface PopupProps {
  /**
   * 是否展示popup  show or hide popup
   */
  show: boolean;
  /**
   * popup的style  popup style
   */
  style?: CSSProperties;
  /**
   * popup的className  popup className
   */
  className?: string;
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
   */
  duration?: number;
  /**
   * 是否是圆角  is round
   */
  round?: boolean;
  /**
   *  是否适配手机安全区域  phone safa area
   */
  safaArea?: boolean;
  /**
   * 顶部左边节点 popup top-left react node
   */
  topLeftNode?: ReactChild;
  /**
   * 顶部右边节点 popup top-right react node
   */
  topRightNode?: ReactChild;
  /**
   * 是否展示右上角关闭按钮  show or hide top-right close btn
   */
  showClose?: boolean;
  children?: ReactChild;
  /**
   *  popup打开后的事件 on Popup opened
   */
  onOpened?: () => any;
  /**
   * 取消popup  cancel popup
   */
  onCancel: () => any;
}

function Popup(props: PopupProps) {
  let { get, reduc } = operaIndex;
  let [zIndex] = useState(get());
  let [maskZIndex] = useState(get() - 2);
  let [bodyZIndex] = useState(get() - 1);
  let popupRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={"hs-popup-css"}
      addEndListener={() => {}}
      mountOnEnter={true}
      nodeRef={popupRef}
    >
      <div className={"hs-popup"} style={{ zIndex: zIndex }} ref={popupRef}>
        {/*遮罩层 mask*/}
        <div
          style={{ zIndex: maskZIndex }}
          className={"hs-popup-mask"}
          onClick={() => props.onCancel()}
        ></div>
        {/*popup body*/}
        <div style={{ zIndex: bodyZIndex }} className={"hs-popup-body"}>
          {props.show ? props.children : null}
        </div>
      </div>
    </CSSTransition>
  );
}

namespace Popup {
  export const displayName: string = `${prefix.toUpperCase()}Popup`;
}

export default Popup;
