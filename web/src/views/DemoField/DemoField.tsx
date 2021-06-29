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
        bottomBorder={false}
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
      <Cell
        title={"float"}
        rightChild={
          <Field
            type={"float"}
            placeholder={"请输入浮点数"}
            bottomType={"none"}
            textAlign={"right"}
            clearable={false}
          ></Field>
        }
      ></Cell>
      <Cell
        title={"passwd"}
        bottomBorder={false}
        rightChild={
          <Field
            type={"passwd"}
            placeholder={"请输入密码"}
            bottomType={"none"}
            textAlign={"right"}
            clearable={false}
          ></Field>
        }
      ></Cell>
      <SplitLine title={"readOnly"}></SplitLine>
      <Cell
        title={"readOnly"}
        rightChild={
          <Field
            initValue={"只读readOnly"}
            placeholder={"请输入文字"}
            bottomType={"none"}
            textAlign={"right"}
            readOnly={true}
          ></Field>
        }
      ></Cell>
      <SplitLine title={"disabled"}></SplitLine>
      <Cell
        title={"disabled"}
        rightChild={
          <Field
            placeholder={"请输入文字"}
            bottomType={"none"}
            textAlign={"right"}
            disabled={true}
          ></Field>
        }
      ></Cell>
      <SplitLine title={"initVal"}></SplitLine>
      <Cell
        title={"initVal"}
        rightChild={
          <Field
            initValue={"初始值"}
            placeholder={"请输入文字"}
            bottomType={"none"}
            textAlign={"right"}
          ></Field>
        }
      ></Cell>
    </div>
  );
}

export default DemoField;
