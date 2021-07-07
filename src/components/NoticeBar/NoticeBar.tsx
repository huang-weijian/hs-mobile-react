import "./style";
import { prefix } from "../../string/txt";
import { types } from "../../types/types";
import { getClassName, getMaskClassName, getBodyClassName } from "./func";
import { useMemo } from "react";

export declare interface INoticeBarProps {
  type?: types;
  className?: string;
  maskClassName?: string;
  bodyClassNAme?: string;
  /**
   * 循环播放的次数
   * The number of times to loop
   */
  cycles?: number;
}

function NoticeBar(props: INoticeBarProps) {
  let className = useMemo(() => getClassName(props), [props.className]);
  let maskClassName = useMemo(
    () => getMaskClassName(props),
    [props.maskClassName]
  );
  let bodyClassName = useMemo(
    () => getBodyClassName(props),
    [props.bodyClassNAme]
  );
  return (
    <div className={className}>
      {/*mask 背景*/}
      <div className={maskClassName}></div>
      {/*notice 消息体*/}
      <div className={bodyClassName}></div>
    </div>
  );
}

namespace NoticeBar {
  export let displayName: string = `${prefix.toUpperCase()}NoticeBar`;
}

export const COM_PREFIX = `${prefix}-notice-bar`;

export default NoticeBar;
