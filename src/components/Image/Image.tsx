import { createElement, MouseEventHandler, ReactChild } from "react";

export declare interface ImageProps {
  width?: number | string;
  height?: number | string;
  src: string;
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

function Image(props: ImageProps) {
  return (
    <div>
      <div></div>
      <img src={props.src} alt="" />
    </div>
  );
}

export default Image;
