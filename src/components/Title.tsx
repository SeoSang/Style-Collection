/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React, { HTMLProps } from 'react'
import mediaSize from '../styles/size'
import { themeColor, ThemeProps } from '../styles/theme'

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  /** Title 글씨의 색깔 */
  type?: ThemeProps
  /** h1, h2, h3, h4, h5 */
  size?: TitleSize
  children?: string
}

type TitleSize = 1 | 2 | 3 | 4 | 5

const SIZES = {
  1: {
    pc: {
      size: '38px',
      weight: '600',
      lineHeight: '1.6',
    },
    mobile: {
      size: '30px',
      weight: '600',
      lineHeight: '1.4',
    },
  },
  2: {
    pc: {
      size: '30px',
      weight: '600',
      lineHeight: '1.5',
    },
    mobile: {
      size: '24px',
      weight: '600',
      lineHeight: '1.35',
    },
  },
  3: {
    pc: {
      size: '24px',
      weight: '600',
      lineHeight: '1.4',
    },
    mobile: {
      size: '20px',
      weight: '600',
      lineHeight: '1.3',
    },
  },
  4: {
    pc: {
      size: '20px',
      weight: '600',
      lineHeight: '1.3',
    },
    mobile: {
      size: '16px',
      weight: '600',
      lineHeight: '1.25',
    },
  },
  5: {
    pc: {
      size: '16px',
      weight: '600',
      lineHeight: '1.25',
    },
    mobile: {
      size: '14px',
      weight: '600',
      lineHeight: '1.22',
    },
  },
}

const getTitleStyle = (type: ThemeProps, size: TitleSize) => css`
  font-size: ${SIZES[size].mobile.size};
  font-weight: ${SIZES[size].mobile.weight};
  line-height: ${SIZES[size].mobile.lineHeight};
  color: ${themeColor[type][900]};

  @media (min-width: ${mediaSize.md}px) {
    font-size: ${SIZES[size].pc.size};
    font-weight: ${SIZES[size].pc.weight};
    line-height: ${SIZES[size].pc.lineHeight};
  }
`
export const Title = ({
  type = 'default',
  size = 2,
  children,
  ...props
}: TitleProps) => {
  return (
    <h1 css={[getTitleStyle(type, size)]} {...props}>
      {children}
    </h1>
  )
}
