import "../src/index.css";

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
