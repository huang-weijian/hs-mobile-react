import { createElement } from "react";
import { Button } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface PlainButtonProps {}

function PlainButton(props: PlainButtonProps) {
  return (
    <div>
      <SplitLine title={"plain button"}></SplitLine>
      <Button className={"demo-button"} type={"primary"} plain>
        plain primary
      </Button>
      <Button className={"demo-button"} type={"danger"} plain>
        plain danger
      </Button>
      <Button className={"demo-button"} type={"success"} plain>
        plain success
      </Button>
      <Button className={"demo-button"} type={"info"} plain>
        plain info
      </Button>
      <Button className={"demo-button"} type={"warning"} plain>
        plain warning
      </Button>
      <Button className={"demo-button"} type={"default"} plain>
        plain default
      </Button>
    </div>
  );
}

export default PlainButton;
