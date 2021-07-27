import { createElement } from "react";
import { Image } from "@hs";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import SplitLine from "@/components/SplitLine/SplitLine";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface DemoImageProps {}

const propsStr = `interface ImageProps {
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
}`;

function DemoImage(props: DemoImageProps) {
  return (
    <div>
      <SplitLine title={"image"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <Image
        src={"https://ssl-pubpic.51yund.com/904516370.jpg"}
        fit={"contain"}
      ></Image>
      <Image
        src={"https://ssl-pubpic.51yund.com/904516370.jpg"}
        fit={"cover"}
        round={true}
      ></Image>
      <Image
        src={"https://ssl-pubpic.51yund.com/90451370.jpg"}
        fit={"cover"}
        radius={"20px"}
        round={true}
      ></Image>
      <Image
        src={"https://ssl-pubpic.51yund.com/90451370.jpg"}
        fit={"cover"}
        loadingNode={<div>hahaha</div>}
        errorNode={<div>ohno</div>}
        radius={"20px"}
        round={true}
      ></Image>
      <Image
        width={"60px"}
        height={"60px"}
        src={"https://ssl-pubpic.51yund.com/90451370.jpg"}
        fit={"cover"}
        loadingNode={<div>hahaha</div>}
        errorNode={<div>ohno</div>}
        round={true}
      ></Image>
    </div>
  );
}

export default DemoImage;
