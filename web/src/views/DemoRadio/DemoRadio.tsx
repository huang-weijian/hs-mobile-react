import SplitLine from "@/components/SplitLine/SplitLine";
import { Radio } from "@hs";
import "./radio.less";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

export declare interface IDemoRadioProps {}

const propsStr = `interface IRadioProps {
  value?: any;
  type?: "primary" | "danger" | "warning";
  /**
   * radio标签
   * radio txt label
   */
  label?: string;
  className?: string;
  iconClassName?: string;
  disabled?: boolean;
  iconRender?: (props: IRadioProps, check: boolean) => ReactNode;
  onChange?: (val: any, check: boolean) => void;
  children?: ReactNode;
}`;

function DemoRadio(props: IDemoRadioProps) {
  return (
    <div>
      <SplitLine title={"radio"}></SplitLine>
      <SplitLine title={"props"}></SplitLine>
      <SyntaxHighlighter language={"typescript"} style={androidstudio}>
        {propsStr}
      </SyntaxHighlighter>
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
