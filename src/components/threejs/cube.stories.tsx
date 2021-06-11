import { withKnobs, number, color as colorKnob } from "@storybook/addon-knobs";
import React from "react";
import { FullCanvasStyle } from "../../styles/canvas";
import { purple } from "../../styles/colors";
import { Cube } from "./cube";

export default {
  title: "threejs/Cube",
  component: Cube,
  /** 테스트 */
  decorators: [
    (Story: any) => (
      <div style={FullCanvasStyle}>
        <Story />
      </div>
    ),
    withKnobs,
  ],
};

export const SpinningCube = () => {
  const options = {
    range: true,
    min: 0,
    max: 0.3,
    step: 0.01,
  };
  const rotation_x = number("rotataion_x", 0.01, options);
  const rotation_y = number("rotataion_y", 0.01, options);
  const rotation_z = number("rotataion_z", 0.01, options);
  const color = colorKnob("Color", purple[500]);
  return (
    <Cube rotation={[rotation_x, rotation_y, rotation_z]} color={color}></Cube>
  );
};

export const FastCube = () => {
  return <Cube rotation={[0.05, 0.05, 0.05]}></Cube>;
};

export const WhiteCube = () => {
  return <Cube color="white"></Cube>;
};
