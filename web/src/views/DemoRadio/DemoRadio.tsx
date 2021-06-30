import SplitLine from "@/components/SplitLine/SplitLine";
import { Radio } from "@hs";
import "./radio.less";

export declare interface IDemoRadioProps {}

function DemoRadio(props: IDemoRadioProps) {
  return (
    <div>
      <SplitLine title={"radio"}></SplitLine>
      <Radio className={`demo-radio-item`}>primary</Radio>
      <Radio type={"danger"} className={`demo-radio-item`}>
        danger
      </Radio>
      <Radio type={"warning"} className={`demo-radio-item`}>
        warning
      </Radio>
      <SplitLine title={"disabled"}></SplitLine>
      <Radio disabled={true} className={`demo-radio-item`}>
        disabled
      </Radio>
      <SplitLine title={"group"}></SplitLine>
      <Radio.Group onChange={(val) => {}}>
        <Radio className={`demo-radio-item`} value={123}>
          primary
        </Radio>
        <Radio type={"warning"} className={`demo-radio-item`} value={456}>
          warning
        </Radio>
        <Radio type={"danger"} className={`demo-radio-item`} value={789}>
          danger
        </Radio>
      </Radio.Group>
      <SplitLine title={"icon node"}></SplitLine>
      <Radio
        iconRender={(props, check: boolean) => {
          return check ? <span>✔️</span> : <span>❌</span>;
        }}
        className={`demo-radio-item`}
      >
        icon node
      </Radio>
    </div>
  );
}

namespace DemoRadio {
  export const displayName: string = `DemoRadio`;
}

export default DemoRadio;
