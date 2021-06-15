import { createElement, MouseEvent } from "react";
import { Button, Cell } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface DemoCellProps {}

function DemoCell(props: DemoCellProps) {
  return (
    <div>
      <SplitLine title={"Cell"}></SplitLine>
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
