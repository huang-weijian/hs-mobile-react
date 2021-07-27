import SplitLine from "../components/SplitLine/SplitLine";
import { Button } from "@hs";
import NormalButton from "@/components/NormalButton/NormalButton";
import PlainButton from "@/components/PlainButton/PlainButton";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface DemoButtonProps {}

const propsStr = `interface ButtonProps {
  type?: types;
  children?: ReactNode;
  className?: string | Array<string>;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
  /**
   * 是否是块级元素（is block element）
   */
  block?: boolean;
  /**
   * 是否需要圆形按钮（is round button）
   */
  round?: boolean;
  /**
   * 按钮原生type（button native type）
   */
  nativeType?: "submit" | "reset" | "button";
  disabled?: boolean;
  /**
   * 是否是朴素按钮  is plain button
   */
  plain?: boolean;
  /**
   * 按钮尺寸 button size
   */
  size?: sizes;
}`;

function DemoButton(props: DemoButtonProps) {
  return (
    <div>
      <SplitLine title={"button"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <NormalButton></NormalButton>
      <SplitLine title={"round button"}></SplitLine>
      <Button className={"demo-button"} type={"primary"} round={true}>
        Round
      </Button>
      <Button
        className={"demo-button"}
        type={"primary"}
        round={true}
        block={true}
      >
        Block Round
      </Button>
      <SplitLine title={"disabled button"}></SplitLine>
      <Button className={"demo-button"} type={"primary"} disabled round={true}>
        disabled primary
      </Button>
      <Button className={"demo-button"} type={"danger"} disabled round={true}>
        disabled danger
      </Button>
      <Button className={"demo-button"} type={"primary"} disabled plain>
        plain disabled primary
      </Button>
      <PlainButton></PlainButton>
      <SplitLine title={"button size"}></SplitLine>
      <Button className={"demo-button"} type={"primary"} size={"mini"}>
        mini primary
      </Button>
      <Button className={"demo-button"} type={"warning"} size={"normal"}>
        normal warning
      </Button>
      <Button
        className={"demo-button"}
        type={"danger"}
        size={"large"}
        block
        round
      >
        large block round danger
      </Button>
    </div>
  );
}

export default DemoButton;
