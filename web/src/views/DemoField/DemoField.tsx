import SplitLine from "@/components/SplitLine/SplitLine";
import { Cell, Field } from "@hs";

export declare interface IDemoFieldProps {}

function DemoField(props: IDemoFieldProps) {
  return (
    <div>
      <SplitLine title={"field"}></SplitLine>
      <Field></Field>
      <SplitLine title={"bottomType"}></SplitLine>
      <Cell
        title={"danger"}
        rightChild={<Field bottomType={"danger"}></Field>}
      ></Cell>
      <Cell
        title={"success"}
        rightChild={<Field bottomType={"success"}></Field>}
      ></Cell>
      <Cell
        title={"warning"}
        rightChild={<Field bottomType={"warning"}></Field>}
      ></Cell>
      <Cell
        title={"none"}
        rightChild={
          <Field placeholder={"请输入文字"} bottomType={"none"}></Field>
        }
      ></Cell>
      <SplitLine title={"textAlign"}></SplitLine>
      <Cell
        title={"right"}
        rightChild={
          <Field
            placeholder={"请输入文字"}
            bottomType={"none"}
            textAlign={"right"}
          ></Field>
        }
      ></Cell>
      <SplitLine title={"clearable"}></SplitLine>
      <Cell
        title={"clearable"}
        rightChild={
          <Field
            placeholder={"请输入文字"}
            bottomType={"none"}
            textAlign={"right"}
            clearable={true}
          ></Field>
        }
      ></Cell>
      <SplitLine title={"type"}></SplitLine>
      <Cell
        title={"int"}
        rightChild={
          <Field
            type={"int"}
            placeholder={"请输入整数"}
            bottomType={"none"}
            textAlign={"right"}
            clearable={false}
          ></Field>
        }
      ></Cell>
    </div>
  );
}

export default DemoField;
