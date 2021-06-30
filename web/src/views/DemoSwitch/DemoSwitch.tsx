import SplitLine from "@/components/SplitLine/SplitLine";
import { Switch } from "@hs";

export declare interface IDemoSwitchProps {}

function DemoSwitch(props: IDemoSwitchProps) {
  return (
    <div>
      <SplitLine title={"switch"}></SplitLine>
      <Switch value={true}></Switch>
      <Switch
        activeColor={"red"}
        inactiveColor={"black"}
        onChange={(check) => console.info(check)}
      ></Switch>
      <SplitLine title={"disabled"}></SplitLine>
      <Switch value={true} disabled></Switch>
    </div>
  );
}

namespace DemoSwitch {
  export const displayName: string = `DemoSwitch`;
}

export default DemoSwitch;
