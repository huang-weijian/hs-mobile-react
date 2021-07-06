import { useEffect, useState } from "react";

export declare interface ICountDownTime {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

function useCountDown(baseTime: number) {
  let [time, setTime] = useState<ICountDownTime>({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  // 最初剩余时间
  // Initial remaining time
  let [baseTimeState] = useState(baseTime);
  // 剩余时间
  // remaining time
  let [remaining, setRemaining] = useState(baseTime);
  // start or stop countdown flag
  let [flag, setFlag] = useState(true);
  let [key, setKey] = useState(setTimeout(() => {}));

  let continueTask = function () {
    decrease();
  };

  let restartTask = function () {
    clearTimeout(key);
    setRemaining(baseTimeState);
    decrease();
  };

  let stopTask = function () {
    setFlag(false);
  };

  let decrease = function () {
    clearTimeout(key);
    let tempKey = setTimeout(() => {
      if (remaining > 0 && flag) {
        let now = remaining - 1000;
        setTime({
          day: Math.floor(now / 1000 / 60 / 60 / 24),
          hour: Math.floor((now / 1000 / 60 / 60) % 24),
          minute: Math.floor((now / 1000 / 60) % 60),
          second: Math.floor((now / 1000) % 60),
        });
        setRemaining(now);
        setKey(tempKey);
      }
    }, 1000);
  };

  useEffect(() => {
    decrease();
  }, [remaining]);
  return {
    time,
    remaining,
    restartTask,
    stopTask,
    continueTask,
    decrease,
  };
}

export default useCountDown;
