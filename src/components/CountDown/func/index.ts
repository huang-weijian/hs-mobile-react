import { COM_PREFIX, ICountDownProps } from "../CountDown";

export function getClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}`;
  return `${className}`;
}

export function getDayClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-day`;
  return `${className}`;
}

export function getHourClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-hour`;
  return `${className}`;
}

export function getMinuteClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-minute`;
  return `${className}`;
}

export function getSecondClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-second`;
  return `${className}`;
}
