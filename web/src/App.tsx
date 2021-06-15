import { ComponentType, createElement, lazy, Suspense } from "react";
import "./css/app.less";
import { HashRouter, Route, Switch } from "react-router-dom";
import { RouteComponentProps } from "react-router";

const DemoButton = lazy(() => import("./views/DemoButton"));
const Home = lazy(() => import("./views/Home/Home"));
const DemoCell = lazy(() => import("./views/DemoCell/DemoCell"));

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
          <Route path={"/home"} component={warpRouteComponent(Home)}></Route>
          <Route
            path={"/button"}
            component={warpRouteComponent(DemoButton)}
          ></Route>
          <Route
            path={"/cell"}
            component={warpRouteComponent(DemoCell)}
          ></Route>
          <Route path={"/*"} render={() => <div>It is nothing</div>}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
