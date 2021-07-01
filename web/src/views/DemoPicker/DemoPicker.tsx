import SplitLine from "@/components/SplitLine/SplitLine";
import { Picker } from "@hs";

export declare interface IDemoPickerProps {}

function DemoPicker(props: IDemoPickerProps) {
  return (
    <div>
      <SplitLine title={"picker"}></SplitLine>
      <Picker titleNode={"test"}></Picker>
    </div>
  );
}

namespace DemoPicker {
  export const displayName: string = `DemoPicker`;
}

export default DemoPicker;
