import { createElement } from "react";
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
      <SplitLine title={"no icon"}></SplitLine>
      <Button type={"primary"} round onClick={() => Toast({ msg: "test" })}>
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
