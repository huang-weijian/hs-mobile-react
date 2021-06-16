import { ImageProps } from "../Image";

/**
 * 根据props返回width和height    get width and height by props
 * @param props
 */
export function getRectangle(props: ImageProps): {
  width: string;
  height: string;
} {
  let pWidth = props.width;
  let pHeight = props.height;
  let rWidth = "";
  let rHeight = "";
  if (typeof pWidth === "number") {
    rWidth = pWidth + "px";
  } else if (typeof pWidth === "string") {
    rWidth = pWidth;
  } else {
    rWidth = "100px";
  }
  if (typeof pHeight === "number") {
    rHeight = pHeight + "px";
  } else if (typeof pHeight === "string") {
    rHeight = pHeight;
  } else {
    rHeight = "100px";
  }
  return {
    width: rWidth,
    height: rHeight,
  };
}

/**
 * 通过props获得radius  get radius by props
 * @param props
 */
export function getRadius(props: ImageProps): string {
  // 如果图片不需要圆形  if image isn't round
  if (!props.round) {
    return "0";
  }
  let pRadius = props.radius;
  let rRadius = "";
  if (typeof pRadius === "number") {
    rRadius = pRadius + "px";
  } else if (typeof pRadius === "string") {
    rRadius = pRadius;
  } else {
    rRadius = "50%";
  }
  return rRadius;
}
