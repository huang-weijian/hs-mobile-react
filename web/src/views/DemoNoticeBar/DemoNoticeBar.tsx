import { NoticeBar } from "@hs";
import SplitLine from "@/components/SplitLine/SplitLine";

export declare interface IDemoNoticeBarProps {}

function DemoNoticeBar(props: IDemoNoticeBarProps) {
  return (
    <div>
      <SplitLine title={"noticeBar"}></SplitLine>
      <NoticeBar>测试广播</NoticeBar>
      <NoticeBar type={"primary"}>测试广播</NoticeBar>
      <NoticeBar type={"danger"}>测试广播</NoticeBar>
      <NoticeBar type={"success"}>测试广播</NoticeBar>
      <NoticeBar type={"warning"}>测试广播</NoticeBar>
      <NoticeBar type={"info"} showClose={true}>
        测试广播
      </NoticeBar>
      <NoticeBar
        onMsgClick={() => console.info("点击了消息体")}
        type={"warning"}
        showClose={true}
        closeNode={"关闭"}
        onClose={() => console.info("点击了关闭")}
      >
        测试广播
      </NoticeBar>
    </div>
  );
}

namespace DemoNoticeBar {
  export let displayName: string = `DemoNoticeBar`;
}

export const COM_PREFIX = `DemoNoticeBar`;

export default DemoNoticeBar;
