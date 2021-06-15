import { Fragment, ReactChild, createElement } from "react";
import { CellProps } from "../Cell";

/**
 * 返回左右的子节点 return left node and right node
 * @param props
 */
export function getChild(props: CellProps): {
  leftNode: ReactChild;
  rightNode: ReactChild;
} {
  // 左边节点 left node
  let leftNode = props.leftChild ? (
    props.leftChild
  ) : (
    <Fragment>
      <div className={"hs-cell-title"}>{props.title}</div>
      {props.showSubTitle ? (
        <div className={"hs-cell-sub-title"}>{props.subTitle}</div>
      ) : null}
    </Fragment>
  );
  // 右边节点 right node
  let rightNode = props.rightChild ? (
    props.rightChild
  ) : (
    <Fragment>
      <div className={"hs-cell-value"}>{props.value}</div>
      {props.showValueIcon ? <div className={"hs-cell-icon"}>&gt;</div> : null}
    </Fragment>
  );
  return {
    leftNode,
    rightNode,
  };
}
