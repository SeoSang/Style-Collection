/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import React from "react";

type LoaderProps = {
  /** 로더의 테마. */
  theme: "dark" | "bright";
  /** 로더의 너비를 임의로 설정합니다. */
  width?: string | number;
};

const Loader = ({ width, theme = "dark" }: LoaderProps) => {
  return (
    <div
      css={[
        gradientStyle,
        theme === "dark" ? {} : brightTheme,
        { width },
        { height: width },
      ]}
    />
  );
};

Loader.defaultProps = {
  theme: "bright",
};

const brightTheme = css`
  &:before {
    background: inherit;
  }
`;

const animate = keyframes`
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
`;

const gradientStyle = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, cyan);
  animation: ${animate} 2s linear infinite;
  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    right: 6px;
    background: black;
    border-radius: 50%;
    z-index: 1000;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(45deg, transparent, transparent 40%, cyan);
    border-radius: 50%;
    z-index: 1;
    filter: blur(30px);
  }
`;

export default Loader;
