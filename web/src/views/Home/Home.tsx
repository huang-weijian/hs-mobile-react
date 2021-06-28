import { createElement } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./Home.less";

export declare interface HomeProps {}

function Home(props: HomeProps) {
  return (
    <div className={"view-home"}>
      <a href="#/button" className={"a"}>
        button 按钮
      </a>
      <a href="#/cell" className={"a"}>
        cell 单元格
      </a>
      <a href="#/image" className={"a"}>
        image 图片
      </a>
      <a href="#/icon" className={"a"}>
        icon 图标
      </a>
      <a href="#/popup" className={"a"}>
        popup 弹出层
      </a>
      <a href="#/toast" className={"a"}>
        toast 轻提示
      </a>
      <a href="#/checkbox" className={"a"}>
        checkbox 复选框
      </a>
      <a href="#/field" className={"a"}>
        field 输入框
      </a>
    </div>
  );
}

export default Home;
