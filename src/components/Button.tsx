/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { indigo, pink, purple, red, white } from "../styles/colors";

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme: "primary" | "secondary" | "error" | "pink" | "purple";
  /** 버튼의 크기를 설정합니다. */
  size: "small" | "medium" | "big";
};

/** 여러 테마를 가지고 있는 `Button` */
const Button = ({ children, theme, size, onClick }: ButtonProps) => {
  return (
    <button css={[style, themes[theme], sizes[size]]} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "medium",
};

const ANIMATION_DURATION = 0.2;
const ANIMATION_EASING = "ease-in-out";

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  -webkit-transition: all ${ANIMATION_DURATION}s ${ANIMATION_EASING};
  -moz-transition: all ${ANIMATION_DURATION}s ${ANIMATION_EASING};
  -o-transition: all ${ANIMATION_DURATION}s ${ANIMATION_EASING};
  -ms-transition: all ${ANIMATION_DURATION}s ${ANIMATION_EASING};
  transition: all ${ANIMATION_DURATION}s ${ANIMATION_EASING};

  :hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const themes = {
  primary: css`
    background: ${indigo[500]};
    color: white;
    &:hover {
      background: white;
      color: ${indigo[500]};
    }
    &:active {
      background: ${indigo[50]};
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:hover {
      background: #f1f3f5;
    }
    &:active {
      background: #dee2e6;
    }
  `,
  error: css`
    background: ${red[500]};
    color: ${white};
    &:hover {
      background: ${white};
      color: ${red[500]};
    }
    &:active {
      background: ${red[50]};
    }
  `,
  pink: css`
    background: ${pink[500]};
    color: ${white};
    &:hover {
      background: ${white};
      color: ${pink[500]};
    }
    &:active {
      background: ${pink[50]};
    }
  `,
  purple: css`
    background: ${purple[500]};
    color: ${white};
    &:hover {
      background: ${white};
      color: ${purple[500]};
    }
    &:active {
      background: ${purple[50]};
    }
  `,
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

export default Button;
