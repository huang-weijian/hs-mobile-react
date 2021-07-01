import SplitLine from "@/components/SplitLine/SplitLine";
import { Badge } from "@hs";
import { ReactChild } from "react";

export declare interface IDemoBadgeProps {}

function DemoBadge(props: IDemoBadgeProps) {
  return (
    <div>
      <SplitLine title={"badge"}></SplitLine>
      <Badge></Badge>
    </div>
  );
}

namespace DemoBadge {
  export const displayName: string = `DemoBadge`;
}

export default DemoBadge;
