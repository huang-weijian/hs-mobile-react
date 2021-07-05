import SplitLine from "@/components/SplitLine/SplitLine";
import { PickerScrollItem } from "@hs";
import { useState } from "react";

export declare interface IDemoPickerScrollItemProps {}

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
