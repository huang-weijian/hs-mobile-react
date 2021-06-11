import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import { createElement } from "react";
import { render } from "react-dom";
import fastclick from "fastclick";
import App from "./App";

// @ts-ignore
fastclick.attach(document.body);
render(<App></App>, document.getElementById("app"));
