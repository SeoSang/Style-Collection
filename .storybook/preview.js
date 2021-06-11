import "../src/index.css";
import { DefaultCanvasStyle } from "../src/styles/canvas";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "ivory",
    values: [
      {
        name: "ivory",
        value: "#FEFFEF",
      },
      {
        name: "white",
        value: "white",
      },
      {
        name: "black",
        value: "black",
      },
      {
        name: "dark",
        value: "#231e23",
      },
      {
        name: "twitter",
        value: "#00aced",
      },
      {
        name: "facebook",
        value: "#3b5998",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={DefaultCanvasStyle}>
      <Story />
    </div>
  ),
];
