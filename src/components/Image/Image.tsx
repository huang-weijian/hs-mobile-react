import {
  createElement,
  MouseEventHandler,
  ReactChild,
  MouseEvent,
} from "react";
import { Property } from "csstype";
import { getRadius, getRectangle } from "./func";
import "./style";

export declare interface ImageProps {
  width?: number | string;
  height?: number | string;
  src: string;
  /**
   * 图片填充模式 image fill mode
   */
  fit?: Property.ObjectFit;
  /**
   * 是否显示为圆形
   */
  round?: boolean;
  /**
   * 图片圆角 image radius
   */
  radius?: number | string;
  errorTxt?: string;
  showError?: boolean;
  /**
   * 图片延迟加载 image lazy load
   */
  lazy?: boolean;
  /**
   * 图片加载失败节点 image load error node
   */
  errorNode?: ReactChild;
  /**
   * 图片加载失败 image load error event
   */
  onError?: () => any;
  /**
   * 点击事件 click event
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * 图片加载完成 image load end event
   */
  onLoad?: () => any;
}

const defaultProps: ImageProps = {
  errorNode: undefined,
  errorTxt: "",
  fit: "fill",
  height: undefined,
  lazy: false,
  onClick(event: MouseEvent<HTMLDivElement>): void {},
  onError(): any {},
  onLoad(): any {},
  radius: undefined,
  round: false,
  showError: false,
  src: "",
  width: "",
};

function Image(props: ImageProps) {
  let rectangle = getRectangle(props);
  let radius = getRadius(props);
  props = Object.assign({}, defaultProps, props, rectangle, { radius: radius });
  return (
    <div
      className={"hs-image-container"}
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.radius,
      }}
    >
      <div></div>
      <img
        className={"hs-image"}
        src={props.src}
        alt=""
        style={{ objectFit: props.fit }}
      />
    </div>
  );
}

export default Image;
