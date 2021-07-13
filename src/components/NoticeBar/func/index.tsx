import { COM_PREFIX, INoticeBarProps } from "../NoticeBar";

export function getClassName(props: INoticeBarProps): string {
  let className = `${COM_PREFIX}`;
  let propsClassName = props.className ? `${props.className}` : "";
  return `${className} ${propsClassName}`.trim();
}

export function getMaskClassName(props: INoticeBarProps): string {
  let className = `${COM_PREFIX}-mask`;
  let propsClassName = props.maskClassName ? `${props.maskClassName}` : "";
  let typeClassName = "";
  switch (props.type) {
    case "primary":
      typeClassName = `${className}_primary`;
      break;
    case "danger":
      typeClassName = `${className}_danger`;
      break;
    case "success":
      typeClassName = `${className}_success`;
      break;
    case "warning":
      typeClassName = `${className}_warning`;
      break;
    case "info":
      typeClassName = `${className}_info`;
      break;
    default:
      typeClassName = `${className}_default`;
      break;
  }
  return `${className} ${propsClassName} ${typeClassName}`.trim();
}

export function getBodyClassName(props: INoticeBarProps): string {
  let className = `${COM_PREFIX}-body`;
  let propsClassName = props.bodyClassName ? `${props.bodyClassName}` : "";
  let typeClassName = "";
  switch (props.type) {
    case "primary":
      typeClassName = `${className}_primary`;
      break;
    case "danger":
      typeClassName = `${className}_danger`;
      break;
    case "success":
      typeClassName = `${className}_success`;
      break;
    case "warning":
      typeClassName = `${className}_warning`;
      break;
    case "info":
      typeClassName = `${className}_info`;
      break;
    default:
      typeClassName = `${className}_default`;
      break;
  }
  return `${className} ${propsClassName} ${typeClassName}`.trim();
}

export function getMsgClassName(props: INoticeBarProps): string {
  let className = `${COM_PREFIX}-body-msg`;
  let propsClassName = props.msgClassName || "";
  return `${className} ${propsClassName}`.trim();
}

export function getCloseClassName(props: INoticeBarProps): string {
  let className = `${COM_PREFIX}-body-close`;
  let propsClassName = props.closeClassName || "";
  return `${className} ${propsClassName}`.trim();
}
