import SplitLine from "@/components/SplitLine/SplitLine";
import { Radio } from "@hs";

export declare interface IDemoRadioProps {}

function DemoRadio(props: IDemoRadioProps) {
  return (
    <div>
      <SplitLine title={"radio"}></SplitLine>
      <Radio></Radio>
    </div>
  );
}

namespace DemoRadio {
  export const displayName: string = `DemoRadio`;
}

export default DemoRadio;
