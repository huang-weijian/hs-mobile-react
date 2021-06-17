import { useState } from "react";

export function useFlag(initBool: boolean): {
  flag: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
} {
  const [flag, setFlag] = useState(initBool);

  function setTrue() {
    setFlag(true);
  }

  function setFalse() {
    setFlag(false);
  }

  function toggle() {
    setFlag(!flag);
  }

  return {
    flag,
    setTrue,
    setFalse,
    toggle,
  };
}
