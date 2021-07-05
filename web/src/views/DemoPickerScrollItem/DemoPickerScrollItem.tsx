import SplitLine from "@/components/SplitLine/SplitLine";
import { PickerScrollItem } from "@hs";

export declare interface IDemoPickerScrollItemProps {}

function DemoPickerScrollItem(props: IDemoPickerScrollItemProps) {
  return (
    <div>
      <SplitLine title={"PickerScorllItem"}></SplitLine>
      <div style={{ height: "200px" }}>
        <PickerScrollItem data={[]}></PickerScrollItem>
      </div>
    </div>
  );
}

namespace DemoPickerScrollItem {
  export const displayName: string = `DemoPickerScrollItem`;
}

export default DemoPickerScrollItem;
