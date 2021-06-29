import { createContext } from "react";

interface IRadioContext<T = any> {
  value: T;
  change: (val: T) => void;
}

let context: IRadioContext = {
  value: 1,
  change(val) {
    this.value = val;
  },
};
const RadioContext = createContext<IRadioContext>(context);
export default RadioContext;
