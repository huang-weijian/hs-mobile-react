import { prefix } from "../../string/txt";

export declare interface IPickerProps {}

export const COM_PREFIX = `${prefix}-picker`;

function Picker(props: IPickerProps) {
  return <div></div>;
}

namespace Picker {
  export const displayName: string = `${prefix.toUpperCase()}Picker`;
}

export default Picker;
