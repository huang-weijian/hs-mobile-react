import { createElement, useRef, MutableRefObject } from "react";
import { Button } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface NromalButtonProps {}

function NormalButton(props: NromalButtonProps) {
  const btnRef =
    useRef<HTMLButtonElement>() as MutableRefObject<HTMLButtonElement>;
  return (
    <div>
      <SplitLine title={"normal button"}></SplitLine>
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
      <Button className={"demo-button"} type={"danger"}>
        danger
      </Button>
      <Button className={"demo-button"} type={"success"}>
        success
      </Button>
      <Button className={"demo-button"} type={"info"}>
        info
      </Button>
      <Button className={"demo-button"} type={"warning"}>
        warning
      </Button>
      <Button className={"demo-button"} type={"default"}>
        default
      </Button>
    </div>
  );
}

export default NormalButton;
