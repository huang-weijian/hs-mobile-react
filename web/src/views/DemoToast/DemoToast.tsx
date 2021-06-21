import { Button, Toast } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";
import { RouteComponentProps } from "react-router";

export declare interface DemoToastProps {
  name?: string;
  age?: number;
  auth?: {
    email?: string;
    name?: string;
  };
}

function DemoToast(props: DemoToastProps & RouteComponentProps) {
  return (
    <div>
      <SplitLine title={"Toast"}></SplitLine>
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
