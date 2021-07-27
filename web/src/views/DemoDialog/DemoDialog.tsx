import { useState } from "react";
import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, Dialog } from "@hs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoDialogProps {}

const propsStr = `interface IDialogProps {
  show: boolean;
  className?: string;
  maskClassName?: string;
  bodyClassName?: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  /**
   * 是否隐藏mask
   * hide mask
   */
  hideMask?: boolean;
  children?: ReactNode;
  /**
   *  Dialog打开后的事件 on Dialog opened
   */
  onOpened?: () => any;
  /**
   *  Dialog关闭后的事件 on Dialog closed
   */
  onClosed?: () => any;
  /**
   * 取消Dialog  cancel Dialog
   */
  onCancel: () => any;
}`;

function DemoDialog(props: IDemoDialogProps) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <div>
      <SplitLine title={"dialog"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <Button type={"primary"} onClick={() => setShow(true)}>
        dialog
      </Button>
      <Dialog show={show} onCancel={() => setShow(false)}></Dialog>
      <SplitLine title={"dialog style"}></SplitLine>
      <Button
        type={"primary"}
        onClick={() => setShow1((preShow1) => !preShow1)}
      >
        dialog style
      </Button>
      <Dialog
        show={show1}
        bodyStyle={{ height: "30%" }}
        onCancel={() => setShow1((preShow1) => !preShow1)}
      >
        <Dialog show={show2} onCancel={() => setShow2(false)}>
          <p>I'm Child Dialog</p>
        </Dialog>
        <p>Hi!</p>
        <p>Hosy mobile ui for react</p>
        <p style={{ textAlign: "center" }}>
          <Button
            type={"primary"}
            onClick={() => setShow2((preShow) => !preShow)}
          >
            Child
          </Button>
          <Button
            type={"primary"}
            onClick={() => setShow1((preShow1) => !preShow1)}
          >
            close
          </Button>
        </p>
      </Dialog>
      <SplitLine title={"hide mask"}></SplitLine>
      <Dialog hideMask show={show3} onCancel={() => setShow3(false)}>
        I had hide the mask
      </Dialog>
      <Button type={"primary"} onClick={() => setShow3(true)}>
        hide mask
      </Button>
    </div>
  );
}

namespace DemoDialog {
  export const displayName: string = `DemoDialog`;
}

export default DemoDialog;
