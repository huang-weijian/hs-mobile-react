import { createElement, useState } from "react";
import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, Popup } from "@hs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface DemoPopupProps {}

const propsStr = `interface PopupProps {
  /**
   * 是否展示popup  show or hide popup
   */
  show: boolean;
  /**
   * popup body的style  popup body style
   */
  bodyStyle?: CSSProperties;
  /**
   * popup body的className  popup body className
   */
  bodyClassName?: string;
  /**
   * 是否展示遮罩层  show or hide mask
   */
  showMask?: boolean;
  position?: positions;
  /**
   * 遮罩层的class  mask class
   */
  maskClassName?: string;
  /**
   * 遮罩层的style  mask style
   */
  maskStyle?: CSSProperties;
  /**
   * 动画持续时间单位ms animated duration time unit number
   * todo
   */
  duration?: number;
  /**
   * 是否是圆角  is round
   */
  round?: boolean;
  /**
   * popup body radius
   */
  radius?: string;
  /**
   *  是否适配手机安全区域  phone safe area
   */
  safeArea?: boolean;
  bodyTitleNode?: ReactChild;
  /**
   * 是否展示右上角关闭按钮  show or hide top-right close btn
   */
  showClose?: boolean;
  children?: ReactNode;
  /**
   *  popup打开后的事件 on Popup opened
   */
  onOpened?: () => any;
  /**
   *  popup关闭后的事件 on Popup closed
   */
  onClosed?: () => any;
  /**
   * 取消popup  cancel popup
   */
  onCancel: () => any;
}`;

function DemoPopup(props: DemoPopupProps) {
  const [flag, setFlag] = useState(false);
  const [leftFlag, setLeftFlag] = useState(false);
  const [bottomFlag, setBottomFlag] = useState(false);
  const [rightFlag, setRightFlag] = useState(false);
  const [safearea, setSafearea] = useState(false);
  const [round, setRound] = useState(false);
  const [hideMask, setMask] = useState(false);
  const [bodyStyle, setBodyStyle] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  return (
    <div>
      <SplitLine title={"top"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <Popup show={flag} onCancel={() => setFlag(false)}>
        top
      </Popup>
      <Button type={"primary"} onClick={() => setFlag(!flag)}>
        top
      </Button>
      <SplitLine title={"left"}></SplitLine>
      <Popup
        show={leftFlag}
        position={"left"}
        onCancel={() => setLeftFlag(false)}
      >
        left
      </Popup>
      <Button type={"primary"} onClick={() => setLeftFlag(!leftFlag)}>
        left
      </Button>
      <SplitLine title={"bottom"}></SplitLine>
      <Popup
        show={bottomFlag}
        position={"bottom"}
        onCancel={() => setBottomFlag(false)}
      >
        bottom
      </Popup>
      <Button type={"primary"} onClick={() => setBottomFlag(!bottomFlag)}>
        bottom
      </Button>
      <SplitLine title={"right"}></SplitLine>
      <Popup
        show={rightFlag}
        position={"right"}
        onCancel={() => setRightFlag(false)}
      >
        right
      </Popup>
      <Button type={"primary"} onClick={() => setRightFlag(!rightFlag)}>
        right
      </Button>
      <SplitLine title={"safearea"}></SplitLine>
      <Popup
        show={safearea}
        position={"bottom"}
        onCancel={() => setSafearea(false)}
        safeArea
      >
        safearea
      </Popup>
      <Button type={"primary"} onClick={() => setSafearea(!safearea)}>
        safearea
      </Button>
      <SplitLine title={"round"}></SplitLine>
      <Popup
        show={round}
        position={"bottom"}
        onCancel={() => setRound(false)}
        round
      >
        round
      </Popup>
      <Button type={"primary"} onClick={() => setRound(!round)}>
        round
      </Button>
      <SplitLine title={"hideMask 隐藏遮罩层"}></SplitLine>
      <Popup
        show={hideMask}
        position={"bottom"}
        onCancel={() => setMask(false)}
        round
        showMask={false}
      >
        hideMask
      </Popup>
      <Button type={"primary"} onClick={() => setMask(!round)}>
        hideMask
      </Button>
      <SplitLine title={"body style"}></SplitLine>
      <Popup
        show={bodyStyle}
        position={"bottom"}
        bodyStyle={{ height: "50%" }}
        onCancel={() => setBodyStyle(false)}
        round
      >
        body style
      </Popup>
      <Button type={"primary"} onClick={() => setBodyStyle(!bodyStyle)}>
        body style
      </Button>
      <SplitLine title={"nested 嵌套 popup"}></SplitLine>
      <Popup
        show={second}
        position={"bottom"}
        onCancel={() => setSecond(false)}
        round
        showMask={false}
      >
        second
      </Popup>
      <Popup
        show={first}
        position={"bottom"}
        onCancel={() => setFirst(false)}
        round
      >
        <div style={{ height: "100%", overflow: "auto" }}>
          <div>
            <Button type={"primary"} onClick={() => setSecond(!second)}>
              second
            </Button>
          </div>
          {Array(10)
            .fill("这是第一段话，真的不知道说什么了")
            .map(
              (function () {
                let count = 0;
                return (item: string) => (
                  <div key={item.concat(String(++count))}>{item}</div>
                );
              })()
            )}
        </div>
      </Popup>
      <Button type={"primary"} onClick={() => setFirst(!bodyStyle)}>
        first
      </Button>
    </div>
  );
}

export default DemoPopup;
