import { createElement } from "react";
import splitLineStyle from "./SplitLine.module.less";

function SplitLine(props: { title: string }) {
  let classArr = [splitLineStyle.splitLine];
  return (
    <div className={`${splitLineStyle.splitLine}`}>
      {/*可以传一个数组*/}
      <div className={[splitLineStyle.leftLine].join(" ")}></div>
      <div className={classArr.join(" ")}>{props.title || ""}</div>
      {/*也可传一个字符串变量*/}
      <div className={splitLineStyle.rightLine}></div>
    </div>
  );
}

export default SplitLine;
