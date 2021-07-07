import { COM_PREFIX, INoticeBarProps } from "../NoticeBar";

export function getClassName(props: INoticeBarProps): string {
  let className = `${COM_PREFIX}`;
  let propsClassName = props.className ? `${props.className}` : "";
  return `${className} ${propsClassName}`;
}

export function getMaskClassName(props: INoticeBarProps): string {
  let className = `${COM_PREFIX}`;
  let propsClassName = props.maskClassName ? `${props.maskClassName}` : "";
  return `${className} ${propsClassName}`;
}

export function getBodyClassName(props: INoticeBarProps): string {
  let className = `${COM_PREFIX}`;
  let propsClassName = props.bodyClassNAme ? `${props.bodyClassNAme}` : "";
  return `${className} ${propsClassName}`;
}
