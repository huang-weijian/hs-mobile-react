import { createElement, useState } from "react";
import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, Popup } from "@hs";

export declare interface DemoPopupProps {}

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
        <div>
          <Button type={"primary"} onClick={() => setSecond(!second)}>
            second
          </Button>
        </div>
        {Array(10)
          .fill("这是第一段话，真的不知道说什么了，好烦啊，我tmd的，我日哦")
          .map(
            (function () {
              let count = 0;
              return (item: string) => (
                <div key={item.concat(String(++count))}>{item}</div>
              );
            })()
          )}
      </Popup>
      <Button type={"primary"} onClick={() => setFirst(!bodyStyle)}>
        first
      </Button>
    </div>
  );
}

export default DemoPopup;
