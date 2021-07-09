/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Color, grey, indigo, pink, purple, red } from '../styles/colors'
import { themeColor } from '../styles/theme'

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  /** 버튼의 생김새를 설정합니다. */
  theme: 'primary' | 'secondary' | 'error' | 'pink' | 'purple'
  /** 버튼의 크기를 설정합니다. */
  size: 'small' | 'medium' | 'big'
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number
  /** 버튼의 배경 색깔을 설정합니다. */
  buttonColor?: string
  /** 버튼의 글자 색깔을 설정합니다. */
  textColor?: string
}

/** 여러 테마를 가지고 있는 `Button` */
const Button = ({
  children,
  theme,
  disabled,
  size,
  onClick,
  width,
  textColor,
  buttonColor,
}: ButtonProps) => {
  return (
    <button
      css={[
        style,
        themes[theme],
        sizes[size],
        { width, color: textColor, backgroundColor: buttonColor },
      ]}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
}

const ANIMATION_DURATION = 0.2
const ANIMATION_EASING = 'ease-in-out'

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

  &:disabled {
    cursor: not-allowed;
  }
`

const getButtonCSS = (colorObject: Color, textColor = 'white') => {
  return css`
    background: ${colorObject[500]};
    color: ${textColor};
    &:hover:enabled {
      background: ${textColor};
      color: ${colorObject[500]};
    }
    &:active:enabled {
      background: ${colorObject[50]};
    }
    &:disabled {
      color: ${colorObject[200]};
    }
  `
}

const themes = {
  primary: getButtonCSS(themeColor.primary),
  secondary: getButtonCSS(themeColor.secondary, 'black'),
  error: getButtonCSS(themeColor.error),
  pink: getButtonCSS(themeColor.pink),
  purple: getButtonCSS(themeColor.purple),
}

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
}

export default Button
