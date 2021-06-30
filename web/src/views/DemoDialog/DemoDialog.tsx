import { useState } from "react";
import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, Dialog } from "@hs";

export declare interface IDemoDialogProps {}

function DemoDialog(props: IDemoDialogProps) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <SplitLine title={"dialog"}></SplitLine>
      <Button type={"primary"} onClick={() => setShow((preShow) => !preShow)}>
        dialog
      </Button>
      <Dialog
        show={show}
        onCancel={() => setShow((preShow) => !preShow)}
      ></Dialog>
    </div>
  );
}

namespace DemoDialog {
  export const displayName: string = `DemoDialog`;
}

export default DemoDialog;
