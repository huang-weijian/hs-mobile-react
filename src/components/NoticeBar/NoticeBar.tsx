import "./style";
import { prefix } from "../../string/txt";
import { types } from "../../types/types";
import {
  getClassName,
  getMaskClassName,
  getBodyClassName,
  getMsgClassName,
  getCloseClassName,
} from "./func";
import { ReactChild, useMemo } from "react";

export declare interface INoticeBarProps {
  type?: types;
  className?: string;
  maskClassName?: string;
  bodyClassName?: string;
  msgClassName?: string;
  closeClassName?: string;
  showClose?: boolean;
  closeNode?: ReactChild;
  onClose?: () => any;
  onMsgClick?: () => any;
  children?: ReactChild;
}

function NoticeBar(props: INoticeBarProps) {
  let className = useMemo(() => getClassName(props), [props.className]);
  let maskClassName = useMemo(
    () => getMaskClassName(props),
    [props.maskClassName, props.type]
  );
  let bodyClassName = useMemo(
    () => getBodyClassName(props),
    [props.bodyClassName, props.type]
  );
  let msgClassName = useMemo(
    () => getMsgClassName(props),
    [props.msgClassName]
  );
  let closeClassName = useMemo(
    () => getCloseClassName(props),
    [props.closeClassName]
  );
  return (
    <div className={className}>
      {/*mask 背景*/}
      <div className={maskClassName}></div>
      {/*notice 消息体*/}
      <div className={bodyClassName}>
        {/*消息 msg*/}
        <div className={msgClassName} onClick={props.onMsgClick}>
          {props.children}
        </div>
        {/*关闭 close*/}
        {props.showClose && (
          <span className={closeClassName} onClick={props.onClose}>
            {props.closeNode || "C"}
          </span>
        )}
      </div>
    </div>
  );
}

namespace NoticeBar {
  export let displayName: string = `${prefix.toUpperCase()}NoticeBar`;
}

export const COM_PREFIX = `${prefix}-notice-bar`;

export default NoticeBar;
