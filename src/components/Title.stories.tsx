import React from 'react'
import { select, withKnobs } from '@storybook/addon-knobs'
import { Title } from './Title'
import { ThemeProps, themeProps } from '../styles/theme'

export default {
  title: 'components/Title',
  component: Title,
  decorators: [withKnobs],
}

export const titles = () => {
  const type = select('type', themeProps, 'default') as ThemeProps
  return (
    <div>
      <Title type={type} size={1}>
        타이틀 1 입니다.
      </Title>
      <Title type={type} size={2}>
        타이틀 2 입니다.
      </Title>
      <Title type={type} size={3}>
        타이틀 3 입니다.
      </Title>
      <Title type={type} size={4}>
        타이틀 4 입니다.
      </Title>
      <Title type={type} size={5}>
        타이틀 5 입니다.
      </Title>
    </div>
  )
}
