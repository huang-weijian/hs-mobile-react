import { prefix } from "../../string/txt";
import "./style";

export declare interface IBadgeProps {}

export const COM_PREFIX = `${prefix}-badge`;

function Badge(props: IBadgeProps) {
  return <div></div>;
}

namespace Badge {
  export const displayName: string = `${prefix.toUpperCase()}Badge`;
}

export default Badge;
