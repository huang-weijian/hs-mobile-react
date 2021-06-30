import { COM_PREFIX, IDialogProps } from "../Dialog";

export function getClassName(props: IDialogProps): string {
  let className = `${COM_PREFIX}`;
  return `${className} ${props.className || ""}`.trim();
}

export function getBodyClassName(props: IDialogProps): string {
  let className = `${COM_PREFIX}-body`;
  return `${className} ${props.bodyClassName || ""}`.trim();
}

export function getMaskClassName(props: IDialogProps): string {
  let className = `${COM_PREFIX}-mask`;
  let hideClassName = `${props.hideMask ? className.concat("__hide") : ""}`;
  return `${className} ${props.maskClassName || ""} ${hideClassName}`.trim();
}
