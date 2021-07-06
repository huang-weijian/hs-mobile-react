import { COM_PREFIX, ICountDownProps } from "../CountDown";

export function getClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}`;
  return `${className}`.trim();
}

export function getDayClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-day`;
  return `${className}`.trim();
}

export function getHourClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-hour`;
  return `${className}`.trim();
}

export function getMinuteClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-minute`;
  return `${className}`.trim();
}

export function getSecondClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-second`;
  return `${className}`.trim();
}

export function getColonClassName(props: ICountDownProps): string {
  let className = `${COM_PREFIX}-colon`;
  return `${className}`.trim();
}
