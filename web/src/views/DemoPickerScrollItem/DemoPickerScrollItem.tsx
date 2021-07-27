import SplitLine from "@/components/SplitLine/SplitLine";
import { PickerScrollItem } from "@hs";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoPickerScrollItemProps {}

const propsStr = `interface IDataItem {
  id: string;
  text: ReactChild;
  value: string;

  [props: string]: any;
}

interface IDeviation {
  x: number;
  y: number;
}

interface ITouchPosition {
  x: number;
  y: number;
}

interface IPickerScrollItemClassNames {
  className?: string;
  cursorClassName?: string;
  cursorMiddleClassName?: string;
  cursorSpaceClassName?: string;
  lineContainerClassName?: string;
  lineClassName?: string;
}

interface IPickerScrollItemProps
  extends IPickerScrollItemClassNames {
  data: Array<IDataItem>;
  style?: CSSProperties;
  lineHeight?: number;
  value?: IDataItem["id"];
  onSelect?: (data: IDataItem, idx: number) => void;
}`;

function DemoPickerScrollItem(props: IDemoPickerScrollItemProps) {
  let [list] = useState(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
      id: String(item),
      text: String(item),
      value: String(item),
    }))
  );
  let [current, setCurrent] = useState<any>();
  return (
    <div>
      <SplitLine title={"PickerScorllItem"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
      <p>current：{JSON.stringify(current)}</p>
      <div style={{ height: "250px" }}>
        <PickerScrollItem
          data={list}
          onSelect={(dataItem) => setCurrent(dataItem)}
        ></PickerScrollItem>
      </div>
    </div>
  );
}

namespace DemoPickerScrollItem {
  export const displayName: string = `DemoPickerScrollItem`;
}

export default DemoPickerScrollItem;
