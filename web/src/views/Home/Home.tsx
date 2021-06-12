import { createElement } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./Home.less";

export declare interface HomeProps {}

function Home(props: HomeProps) {
  return (
    <div className={"view-home"}>
      <a href="#/button" className={"a"}>
        <PlayCircleOutlined></PlayCircleOutlined>button
      </a>
    </div>
  );
}

export default Home;
