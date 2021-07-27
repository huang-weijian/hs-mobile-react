import { Button, Toast } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";
import { RouteComponentProps } from "react-router";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface DemoToastProps {
  name?: string;
  age?: number;
  auth?: {
    email?: string;
    name?: string;
  };
}

const propsStr = `interface IToastMsg {
  /**
   * 消息的类型
   * toast theme type
   */
  type?: toastTypes;
  /**
   * Toast位置
   * Toast Position
   */
  position?: toastPositions;
  /**
   * 展示或隐藏Icon
   * show or hide Icon
   */
  showIcon?: boolean;
  /**
   * 自定义Icon节点
   * custom Icon Node
   */
  iconNode?: ReactChild;
  /**
   * toast消息
   * toast msg
   */
  msg?: string;
  /**
   * toast持续时间
   * toast duration time unit ms
   * -1为不关闭
   */
  duration?: number;
  /**
   * Toast的样式
   * Toast className
   */
  toastClassName?: string;
  /**
   * Toast的style
   * Toast style
   */
  toastStyle?: CSSProperties;
  /**
   * Toast body的样式
   * Toast body className
   */
  bodyClassName?: string;
  /**
   * Toast body的style
   * Toast body style
   */
  bodyStyle?: CSSProperties;
  /**
   * Toast msg的样式
   * Toast msg className
   */
  msgClassName?: string;
  /**
   * Toast msg的style
   * Toast msg style
   */
  msgStyle?: CSSProperties;
  /**
   * Toast mask的样式
   * Toast mask className
   */
  maskClassName?: string;
  /**
   * Toast mask的style
   * Toast mask style
   */
  maskStyle?: CSSProperties;
  /**
   * 展示或隐藏遮罩层
   * show or hide mask
   */
  showMask?: boolean;
}`;

function DemoToast(props: DemoToastProps & RouteComponentProps) {
  return (
    <div>
      <SplitLine title={"Toast"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <p>Toast的自带图标是dom和css</p>
      <p>Toast's icons are dom node</p>
      <p>Toast是单例模式</p>
      <p>Toast is Singleton mode</p>
      <SplitLine title={"no icon"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() => Toast({ msg: "test info", duration: 3000 })}
      >
        noicon toast
      </Button>
      <SplitLine title={"loading"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() => Toast.loading({ msg: "loading" })}
      >
        loading toast
      </Button>
      <SplitLine title={"success"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() => Toast.success({ msg: "success" })}
      >
        success toast
      </Button>
      <SplitLine title={"error"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() => Toast.error({ msg: "error" })}
      >
        error toast
      </Button>
      <SplitLine title={"自定义Icon custom IconNode"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() =>
          Toast({
            msg: "custom IconNode",
            iconNode: <div>custom IconNode</div>,
          }).then(() => console.info("custom IconNode is closed"))
        }
      >
        custom IconNode
      </Button>
      <SplitLine title={"持续loading continued"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() =>
          Toast({
            type: "loading",
            msg: "continued",
            duration: -1,
          })
        }
      >
        continued
      </Button>
      <Button type={"danger"} onClick={() => Toast.clear()}>
        关闭 close
      </Button>
      <SplitLine title={"关闭回调 onClosed"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() =>
          Toast({
            type: "loading",
            msg: "onClosed",
          }).then(() => console.info("on Closed Toast is closed"))
        }
      >
        onClosed
      </Button>
      <SplitLine title={"遮罩层 mask"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() =>
          Toast({
            type: "loading",
            msg: "onClosed",
            showMask: true,
          })
        }
      >
        mask
      </Button>
      <SplitLine title={"自定义消息 custom msg body"}></SplitLine>
      <Button
        type={"primary"}
        round
        block
        onClick={() =>
          Toast({
            type: "success",
            bodyStyle: { color: "#67c23a", backgroundColor: "#909399" },
            msg: "custom msg",
            showMask: true,
          })
        }
      >
        custom msg body
      </Button>
      <SplitLine title={"各个位置消息 msg position"}></SplitLine>
      <Button
        type={"primary"}
        round
        onClick={() => Toast({ position: "top", msg: "top msg" })}
      >
        top msg
      </Button>
      <Button
        type={"primary"}
        round
        onClick={() => Toast({ position: "bottom", msg: "bottom msg" })}
      >
        bottom msg
      </Button>
    </div>
  );
}

namespace DemoToast {
  export const defaultProps: DemoToastProps = {
    age: 24,
    auth: {
      name: "git+huang-weijian",
    },
  };
}

export default DemoToast;
