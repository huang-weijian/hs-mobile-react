import SplitLine from "@/components/SplitLine/SplitLine";
import { Button, Picker, Popup } from "@hs";
import { useState } from "react";
import { IDataItem } from "../../../../src/components/Picker/components/PickerScrollItem/PickerScrollItem";
import { clone } from "../../../../src/util";
import { IPickerProps } from "../../../../src/components/Picker/Picker";

export declare interface IDemoPickerProps {}

let count: number = 1;
let demoList: IDataItem[] = Array(15)
  .fill(1)
  .map((item) => {
    let strTempCount = `星期${String(count++)}`;
    return { text: strTempCount, value: strTempCount, id: strTempCount };
  });
let demoData: IPickerProps["columns"] = [
  { id: "1", data: clone(demoList) },
  { id: "2", data: clone(demoList) },
  {
    id: "3",
    data: clone(demoList),
  },
];

function DemoPicker(props: IDemoPickerProps) {
  // hooks
  let [data, setData] = useState(demoData);
  let [show, setShow] = useState(false);
  let [defaultValues, setDefaultValues] = useState(["星期3", "星期6", "星期2"]);
  return (
    <div>
      <SplitLine title={"picker"}></SplitLine>
      <div style={{ height: "40vh" }}>
        <Picker
          titleNode={"test"}
          columns={data}
          values={["星期2"]}
          onSelected={(item) => console.info(item)}
          onConfirm={(selected, ids, values, idxes) =>
            console.info(selected, ids, values, idxes)
          }
        ></Picker>
      </div>
      <SplitLine title={"popup-picker"}></SplitLine>
      <p>{defaultValues.join(",")}</p>
      <Button type={"primary"} onClick={() => setShow(true)}>
        show popup
      </Button>
      <Popup
        position={"bottom"}
        show={show}
        onCancel={() => setShow(false)}
        bodyStyle={{ height: "50vh" }}
        showClose={false}
      >
        <Picker
          titleNode={"popup picker"}
          cancelNode={"no"}
          confirmNode={"yes"}
          columns={data}
          values={defaultValues}
          onCancel={() => setShow(false)}
          onConfirm={(selected, ids, values) => {
            setDefaultValues(values);
            setShow(false);
          }}
        ></Picker>
      </Popup>
      <SplitLine title={"date-picker"}></SplitLine>
    </div>
  );
}

namespace DemoPicker {
  export const displayName: string = `DemoPicker`;
}

export default DemoPicker;
