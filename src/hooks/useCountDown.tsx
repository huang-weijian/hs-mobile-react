import { useEffect, useState } from "react";

export declare interface ICountDownTime {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

function useCountDown(baseTime: number) {
  // 最初剩余时间
  // Initial remaining time
  let [baseTimeState] = useState(baseTime);
  // 剩余时间
  // remaining time
  let [remaining, setRemaining] = useState(baseTime);
  // start or stop countdown flag
  let [flag, setFlag] = useState(true);

  let continueTask = function () {
    setFlag(true);
  };

  let restartTask = function () {
    setRemaining(baseTimeState);
    setFlag(true);
  };

  function stopTask() {
    setFlag(false);
  }

  useEffect(() => {
    let timeout = setTimeout(() => {});
    if (flag) {
      timeout = setTimeout(() => {
        if (remaining > 0) {
          setRemaining(remaining - 1000);
        }
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  });

  let time: ICountDownTime = {
    day: Math.floor(remaining / 1000 / 60 / 60 / 24),
    hour: Math.floor((remaining / 1000 / 60 / 60) % 24),
    minute: Math.floor((remaining / 1000 / 60) % 60),
    second: Math.floor((remaining / 1000) % 60),
  };

  return {
    time,
    remaining,
    restartTask,
    stopTask,
    continueTask,
  };
}

export default useCountDown;
