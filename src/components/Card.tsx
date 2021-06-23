/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

type CardProps = {
  /** 카드의 제목을 설정합니다. */
  title: string
  /** 카드의 내용을 설정합니다. */
  content: string
  /** 카드 이미지의 주소를 설정합니다. */
  imgSrc?: string
  /** 카드 이미지를 원형으로 표현할 것인지 설정합니다. */
  circle?: boolean
  /** 카드 이미지의 대체값 설정합니다. */
  alt?: string
  /** 카드를 비활성화 시킵니다. */
  disabled?: boolean
  /** 카드의 너비를 임의로 설정합니다. */
  width?: string | number
  /** 카드의 종류입니다. */
  mode?: CardMode
  /** 카드 전체의 스타일입니다. */
  cardStyle?: any
  /** 이미지를 담고있는 div의 스타일입니다. */
  imgContainerStyle?: any
  /** 컨텐츠를 담고있는 div의 스타일입니다. */
  contentContainerStyle?: any
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
}

export type CardMode = 'default' | 'round' | 'very-round'

const B_R = {
  default: '0%',
  round: '4%',
  veryRound: '10%',
}

const defaultCardStyle = (disabled: boolean, mode: CardMode) => {
  return css`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    ${disabled ? `opacity: 0.5;` : ``}
    ${disabled
      ? ''
      : `:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }`}
    ${mode === 'round' ? `border-radius: ${B_R.round}` : ``}
    ${mode === 'very-round' ? `border-radius: ${B_R.veryRound}` : ``}
  `
}

const textContainerStyle = css`
  padding: 2px 16px;
`

const imageStyle = (mode: CardMode, circle: boolean) => {
  if (circle) {
    return css`
      width: 100%;
      border-radius: 50%;
    `
  }
  switch (mode) {
    case 'round':
      return css`
        width: 100%;
        border-top-left-radius: ${B_R.round} ${B_R.round};
        border-top-right-radius: ${B_R.round} ${B_R.round};
      `
    case 'very-round':
      return css`
        width: 100%;
        border-top-left-radius: ${B_R.veryRound} ${B_R.veryRound};
        border-top-right-radius: ${B_R.veryRound} ${B_R.veryRound};
      `
    default:
      return css`
        width: 100%;
      `
  }
}

export const Card = ({
  onClick,
  title,
  content,
  disabled = false,
  width = '400px',
  imgSrc,
  alt,
  mode = 'default',
  circle = false,
  cardStyle = {},
  imgContainerStyle = {},
  contentContainerStyle = {},
}: CardProps) => {
  if (imgSrc)
    return (
      <div
        css={[defaultCardStyle(disabled, mode), cardStyle, { width }]}
        onClick={onClick}>
        <div css={[imgContainerStyle]}>
          <img src={imgSrc} alt={alt} css={[imageStyle(mode, circle)]} />
        </div>
        <div css={[textContainerStyle, contentContainerStyle]}>
          <h4>
            <b>{title}</b>
          </h4>
          <p>{content}</p>
        </div>
      </div>
    )
  else
    return (
      <div css={[defaultCardStyle(disabled, mode), { width }]}>
        <div css={[contentContainerStyle]}>
          <h4>
            <b>{title}</b>
          </h4>
          <p>{content}</p>
        </div>
      </div>
    )
}
