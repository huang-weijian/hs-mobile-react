import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import { createElement } from "react";
import * as ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App></App>, document.getElementById("app"));
