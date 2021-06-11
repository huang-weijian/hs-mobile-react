import SplitLine from "../components/SplitLine/SplitLine";
import { Button } from "@hs";
import { createElement } from "react";
import NormalButton from "@/components/NormalButton/NormalButton";
import PlainButton from "@/components/PlainButton/PlainButton";

export declare interface DemoButtonProps {}

function DemoButton(props: DemoButtonProps) {
  return (
    <div>
      <SplitLine title={"button"}></SplitLine>
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
