import React from "react";
import { CSSProperties } from "react";

export const DefaultCanvasStyle = {
  margin: "1.5rem",
} as CSSProperties;

export const FullCanvasStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "auto",
} as CSSProperties;

export const HalfCanvasStyle = {
  width: "50vw",
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "auto",
} as CSSProperties;

// const canvasCssSelector = {
//   DefaultCanvasStyle,
//   HalfCanvasStyle,
//   FullCanvasStyle,
// };

// type CanvasStyleSelectorString =
//   | "DefaultCanvasStyle"
//   | "FullCanvasStyle"
//   | "HalfCanvasStyle";

// export const canvasDecorator = (key: CanvasStyleSelectorString) => {
//   return (Story: any) => (
//     <div style={canvasCssSelector[key]}>
//       <Story />
//     </div>
//   );
// };
