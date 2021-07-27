import { createElement, MouseEvent } from "react";
import { Button, Cell } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface DemoCellProps {}

const propsStr = `interface CellProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * 是否需要底部边框    need bottom border
   */
  bottomBorder?: boolean;
  title?: string;
  subTitle?: string;
  showTitle?: boolean;
  showSubTitle?: boolean;
  value?: string;
  showValueIcon?: boolean;
  leftChild?: ReactChild;
  rightChild?: ReactChild;
  onClick?: MouseEventHandler<HTMLDivElement>;
}`;

function DemoCell(props: DemoCellProps) {
  return (
    <div>
      <SplitLine title={"Cell"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <Cell
        title={"姓名"}
        subTitle={"中文"}
        value={"huang-weijian"}
        showSubTitle={true}
      ></Cell>
      <Cell
        leftChild={<div>年龄</div>}
        rightChild={<input placeholder={"请输入年龄"} />}
      ></Cell>
      <Cell
        title={"Test click"}
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          console.info("hs-cell test click");
        }}
      ></Cell>
      <Cell
        title={"Blog"}
        rightChild={
          <Button plain={true} type={"primary"}>
            go to blog
          </Button>
        }
      ></Cell>
      <Cell title={"Email"} bottomBorder={false}></Cell>
    </div>
  );
}

export default DemoCell;
