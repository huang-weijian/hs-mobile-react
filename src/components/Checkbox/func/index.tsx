import { ICheckboxProps } from "../Checkbox";
import { CSSProperties, ReactNode, useMemo } from "react";

function IconNode(props: ICheckboxProps) {
  let parentStyle: CSSProperties = useMemo<CSSProperties>(
    () => ({
      display: "inline-flex",
      border: "1px solid #909399",
      boxSizing: "border-box",
      marginRight: "0.5em",
    }),
    []
  );
  let style: CSSProperties = useMemo<CSSProperties>(
    () => ({
      width: "1em",
      height: "1em",
      display: "inline-block",
      backgroundColor: props.iconColor || "#409eff",
    }),
    [props.iconColor]
  );
  let className = useMemo(
    () => `hs-checkbox-icon ${props.isCheck ? "opacity_one" : "opacity_zero"}`,
    [props.isCheck]
  );
  return (
    <span style={{ ...parentStyle }}>
      <span style={{ ...style }} className={className}></span>
    </span>
  );
}

/**
 * 根据check状态返回不同的icon
 * return different icon node by checkbox state
 */
export function getCheckStateIcon(props: ICheckboxProps): ReactNode {
  // 如果有自定义的iconRender
  // if there is iconRender
  if (props.iconRender) {
    return props.iconRender(props);
  }
  return <IconNode {...props}></IconNode>;
}
