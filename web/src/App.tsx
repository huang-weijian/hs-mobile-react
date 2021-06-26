import {
  Component,
  ComponentType,
  createElement,
  lazy,
  MutableRefObject,
  Suspense,
  useEffect,
  useRef,
} from "react";
import "./css/app.less";
import { HashRouter, Route, Switch } from "react-router-dom";
import { RouteComponentProps } from "react-router";

const DemoButton = lazy(() => import("./views/DemoButton"));
const Home = lazy(() => import("./views/Home/Home"));
const DemoCell = lazy(() => import("./views/DemoCell/DemoCell"));
const DemoImage = lazy(() => import("./views/DemoImage/DemoImage"));
const DemoIcon = lazy(() => import("./views/DemoIcon"));
const DemoPopup = lazy(() => import("./views/DemoPopup/DemoPopup"));
const DemoToast = lazy(() => import("./views/DemoToast/DemoToast"));
const DemoCheckbox = lazy(() => import("./views/DemoCheckbox/DemoCheckbox"));

function ViewLoading() {
  return <div>View Loading......</div>;
}

function warpRouteComponent(
  Component: ComponentType<RouteComponentProps>
): ComponentType<RouteComponentProps> {
  return (props: RouteComponentProps) => (
    <Suspense fallback={<ViewLoading></ViewLoading>}>
      <Component {...props}></Component>
    </Suspense>
  );
}

function App() {
  return (
    <div className={"app"}>
      <HashRouter basename={"/"}>
        <Switch>
          <Route path={"/"} exact component={warpRouteComponent(Home)}></Route>
          <Route
            path={"/button"}
            component={warpRouteComponent(DemoButton)}
          ></Route>
          <Route
            path={"/cell"}
            component={warpRouteComponent(DemoCell)}
          ></Route>
          <Route
            path={"/image"}
            component={warpRouteComponent(DemoImage)}
          ></Route>
          <Route
            path={"/icon"}
            component={warpRouteComponent(DemoIcon)}
          ></Route>
          <Route
            path={"/popup"}
            component={warpRouteComponent(DemoPopup)}
          ></Route>
          <Route
            path={"/toast"}
            component={warpRouteComponent(DemoToast)}
          ></Route>
          <Route
            path={"/checkbox"}
            component={warpRouteComponent(DemoCheckbox)}
          ></Route>
          <Route path={"/*"} render={() => <div>It is nothing</div>}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
