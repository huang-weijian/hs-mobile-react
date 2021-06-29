import { prefix } from "../../string/txt";
import "./style";
import { useContext } from "react";
import RadioContext from "./context/RadioContext";

export declare interface IRadioProps {
  value?: any;
}

function Radio(props: IRadioProps) {
  const radioContext = useContext(RadioContext);
  console.info(radioContext);
  return (
    <div>
      <label htmlFor="">
        <input type={"radio"} />
        123
      </label>
    </div>
  );
}

namespace Radio {
  export const displayName: string = `${prefix.toUpperCase()}Radio`;
}

export default Radio;
