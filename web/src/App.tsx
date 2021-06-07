import * as React from "react";
import * as HSComponents from "@hs";

function App() {
  return (
    <div>
      123
      {Object.keys(HSComponents).map((key) => {
        // @ts-ignore
        let TempComponent = HSComponents[key];
        // @ts-ignore
        return <TempComponent key={key}></TempComponent>;
      })}
    </div>
  );
}

export default App;
