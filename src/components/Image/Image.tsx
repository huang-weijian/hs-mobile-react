import {
  MouseEventHandler,
  ReactChild,
  CSSProperties,
  ReactEventHandler,
  useRef,
  MutableRefObject,
  useEffect,
  useState,
} from "react";
import { Property } from "csstype";
import { getClassName, getRadius, getRectangle } from "./func";
import "./style";
import { prefix } from "../../string/txt";

export declare interface ImageProps {
  width?: number | string;
  height?: number | string;
  src: string;
  style?: CSSProperties;
  className?: string;
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
  showError?: boolean;
  loadingNode?: ReactChild;
  /**
   * 图片加载失败节点 image load error node
   */
  errorNode?: ReactChild;
  /**
   * 图片加载失败 image load error event
   */
  onError?: ReactEventHandler<HTMLImageElement>;
  /**
   * 点击事件 click event
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * 图片加载完成 image load end event
   */
  onLoad?: ReactEventHandler<HTMLImageElement>;
}

const defaultProps: ImageProps = {
  errorNode: "error",
  loadingNode: "loading",
  fit: "fill",
  height: undefined,
  radius: undefined,
  round: false,
  showError: true,
  src: "",
  width: "",
};

function Image(props: ImageProps) {
  let imageRef =
    useRef<HTMLImageElement>() as MutableRefObject<HTMLImageElement>;
  useEffect(() => {}, []);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

  let rectangle = getRectangle(props);
  let radius = getRadius(props);
  props = Object.assign({}, defaultProps, props);
  let className = getClassName(props);
  let style: CSSProperties = Object.assign(
    {},
    rectangle,
    { borderRadius: radius },
    props.style
  );
  return (
    <div onClick={props.onClick} className={className} style={style}>
      {loading ? (
        <div className={"hs-image-mask"}>{props.loadingNode}</div>
      ) : null}
      {error && props.showError ? (
        <div className={"hs-image-mask"}>{props.errorNode}</div>
      ) : null}
      <img
        ref={imageRef}
        className={"hs-image"}
        style={{ opacity: error ? "0" : "1", objectFit: props.fit }}
        src={props.src}
        alt=""
        onError={(e) => {
          setLoading(false);
          setError(true);
          if (props.onError) {
            props.onError(e);
          }
        }}
        onLoad={(e) => {
          setLoading(false);
          if (props.onLoad) {
            props.onLoad(e);
          }
        }}
      />
    </div>
  );
}

namespace Image {
  export const displayName: string = `${prefix.toUpperCase()}Image`;
}

export default Image;
