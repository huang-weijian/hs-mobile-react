import { NoticeBar } from "@hs";

export declare interface IDemoNoticeBarProps {}

function DemoNoticeBar(props: IDemoNoticeBarProps) {
  return (
    <div>
      <NoticeBar></NoticeBar>
    </div>
  );
}

namespace DemoNoticeBar {
  export let displayName: string = `DemoNoticeBar`;
}

export const COM_PREFIX = `DemoNoticeBar`;

export default DemoNoticeBar;
