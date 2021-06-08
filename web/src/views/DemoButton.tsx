import SplitLine from "../components/SplitLine/SplitLine";
import { Button } from "../hs/index";
import { createRef } from "react";

export declare interface DemoButtonProps {}

const btnRef = createRef<HTMLButtonElement>();

function DemoButton(props: DemoButtonProps) {
  return (
    <div>
      <SplitLine title={"button"}></SplitLine>
      <Button
        className={"demo-button"}
        type={"primary"}
        ref={btnRef}
        onClick={(e) => {
          console.info(e);
        }}
      >
        primary
      </Button>
      <Button className={"demo-button"} type={"danger"} ref={btnRef}>
        danger
      </Button>
      <Button className={"demo-button"} type={"success"} ref={btnRef}>
        success
      </Button>
      <Button className={"demo-button"} type={"info"} ref={btnRef}>
        info
      </Button>
      <Button className={"demo-button"} type={"warning"} ref={btnRef}>
        warning
      </Button>
      <Button className={"demo-button"} type={"default"} ref={btnRef}>
        default
      </Button>
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
    </div>
  );
}

export default DemoButton;
