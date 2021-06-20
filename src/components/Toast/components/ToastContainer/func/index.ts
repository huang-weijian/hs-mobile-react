import { prefix } from "../../../../../string/txt";

export function getToastContainerDOM(): HTMLDivElement {
  let ContainerDOMID = `${prefix.toUpperCase()}ToastContainerDIV`;
  let ContainerDOM = null;
  ContainerDOM = document.createElement("div");
  ContainerDOM.setAttribute("id", ContainerDOMID);
  document.body.appendChild(ContainerDOM);
  return ContainerDOM;
}
