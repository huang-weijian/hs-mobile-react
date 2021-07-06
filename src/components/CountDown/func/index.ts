import { COM_PREFIX, ICountDownProps } from "../CountDown";

export function getClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}`;
  let propsClassName = `${props.className || ""}`;
  return `${className} ${propsClassName}`.trim();
}

export function getDayClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-day`;
  let propsClassName = `${props.dayClassName || ""}`;
  return `${className} ${propsClassName}`.trim();
}

export function getHourClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-hour`;
  let propsClassName = `${props.hourClassName || ""}`;
  return `${className} ${propsClassName}`.trim();
}

export function getMinuteClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-minute`;
  let propsClassName = `${props.minuteClassName || ""}`;
  return `${className} ${propsClassName}`.trim();
}

export function getSecondClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-second`;
  let propsClassName = `${props.secondClassName || ""}`;
  return `${className} ${propsClassName}`.trim();
}

export function getColonClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-colon`;
  let propsClassName = `${props.colonClassName || ""}`;
  return `${className} ${propsClassName}`.trim();
}
