import { ReactChild } from "react";

/**
 * 组件类型   types of component
 */
export type types =
  | "primary"
  | "warning"
  | "success"
  | "danger"
  | "info"
  | "default";

/**
 * 组件大小 size of component
 */
export type sizes = "mini" | "normal" | "large";

/**
 * 位置   position
 */
export type positions = "left" | "top" | "right" | "bottom";

/**
 * Toast类型
 * Toast types
 */
export type toastTypes = "info" | "success" | "loading" | "error";

/**
 * Toast位置
 * Toast Position
 */
export type toastPositions = "top" | "normal" | "bottom";
