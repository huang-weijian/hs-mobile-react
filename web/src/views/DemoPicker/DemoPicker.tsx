import SplitLine from "@/components/SplitLine/SplitLine";
import { Picker } from "@hs";

export declare interface IDemoPickerProps {}

function DemoPicker(props: IDemoPickerProps) {
  return (
    <div>
      <SplitLine title={"picker"}></SplitLine>
      <div style={{ height: "40vh" }}>
        <Picker titleNode={"test"}></Picker>
      </div>
    </div>
  );
}

namespace DemoPicker {
  export const displayName: string = `DemoPicker`;
}

export default DemoPicker;
