import { createElement } from "react";
import "./css/app.less";
import DemoButton from "./views/DemoButton";

function App() {
  return (
    <div className={"app"}>
      <DemoButton></DemoButton>
    </div>
  );
}

export default App;
