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
const DemoField = lazy(() => import("./views/DemoField/DemoField"));
const DemoRadio = lazy(() => import("./views/DemoRadio/DemoRadio"));
const DemoSwitch = lazy(() => import("./views/DemoSwitch/DemoSwitch"));
const DemoDialog = lazy(() => import("./views/DemoDialog/DemoDialog"));
const DemoBadge = lazy(() => import("./views/DemoBadge/DemoBadge"));
const DemoPicker = lazy(() => import("./views/DemoPicker/DemoPicker"));
const DemoPickerScrollItem = lazy(
  () => import("./views/DemoPickerScrollItem/DemoPickerScrollItem")
);

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
          <Route
            path={"/field"}
            component={warpRouteComponent(DemoField)}
          ></Route>
          <Route
            path={"/radio"}
            component={warpRouteComponent(DemoRadio)}
          ></Route>
          <Route
            path={"/switch"}
            component={warpRouteComponent(DemoSwitch)}
          ></Route>
          <Route
            path={"/dialog"}
            component={warpRouteComponent(DemoDialog)}
          ></Route>
          <Route
            path={"/badge"}
            component={warpRouteComponent(DemoBadge)}
          ></Route>
          <Route
            path={"/picker"}
            component={warpRouteComponent(DemoPicker)}
          ></Route>
          <Route
            path={"/pickerScrollItem"}
            component={warpRouteComponent(DemoPickerScrollItem)}
          ></Route>
          <Route path={"/*"} render={() => <div>It is nothing</div>}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
