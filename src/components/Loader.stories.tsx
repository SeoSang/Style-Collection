import React from "react";
import Loader from "./Loader";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "components/Loader",
  component: Loader,
  decorators: [withKnobs],
};

export const loader = () => {
  const theme = select("`theme", ["dark", "bright"], "bright");
  const width = text("width", "");

  return <Loader theme={theme} width={width}></Loader>;
};
