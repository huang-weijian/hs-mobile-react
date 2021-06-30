import { IRadioProps } from "../Radio";
import { prefix } from "../../../string/txt";
import { IRadioContext } from "../context/RadioContext";

/**
 * 获取icon的className
 * get icon node className by props
 */
export function getIconClassName(
  props: IRadioProps,
  check: boolean,
  context: IRadioContext
): string {
  let typeClassName = `${prefix}-radio-icon`;
  switch (props.type) {
    case "danger":
      typeClassName = typeClassName.concat(`_danger`);
      break;
    case "warning":
      typeClassName = typeClassName.concat(`_warning`);
      break;
    default:
      typeClassName = typeClassName.concat(`_primary`);
      break;
  }
  let activeClassName = "";
  if (context.inGroup && context.value === props.value) {
    activeClassName = `${typeClassName}__active`;
  } else {
    activeClassName = check ? `${typeClassName}__active` : ``;
  }
  return `${props.iconClassName || ""} ${typeClassName} ${activeClassName}`;
}
