import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import { createElement } from "react";
import { render } from "react-dom";
import App from "./App";

render(<App></App>, document.getElementById("app"));
