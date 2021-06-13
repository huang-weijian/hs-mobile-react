import { createElement } from "react";
import { prefix } from "../../string/txt";

export declare interface CellProps {}

function Cell(props: CellProps) {
  return <div></div>;
}

namespace Cell {
  export const displayName: string = `${prefix}Cell`;
}

export default Cell;
