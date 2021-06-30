import { createContext } from "react";

export interface IRadioContext<T = any> {
  value: T;
  change: (val: T) => void;
  inGroup: boolean;
}

let context: IRadioContext = {
  value: null,
  change(val) {
    this.value = val;
  },
  inGroup: false,
};
const RadioContext = createContext<IRadioContext>(context);
export default RadioContext;
