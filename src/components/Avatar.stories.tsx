import React from 'react'
import {
  withKnobs,
  text as knobsText,
  boolean,
  select,
  color as knobsColor,
} from '@storybook/addon-knobs'
import Avatar from './Avatar'

export default {
  title: 'components/Avatar',
  component: Avatar,
  decorators: [withKnobs],
}

const DEFAULT_TEXT = 'test user'

export const avatar = () => {
  const text = knobsText('text', DEFAULT_TEXT)
  const src = knobsText('src', '')
  const shape = select('shape', ['square', 'circle'], 'square')
  const size = select(
    'size',
    Array.from(Array(100).keys()).map((num) => num.toString()),
    '40',
  )
  const unstyled = boolean('unstyled', false)
  const color = knobsColor('color', '#78DEC7')
  return (
    <Avatar
      text={text}
      src={src}
      size={size}
      shape={shape}
      unstyled={unstyled}
      color={color}
    />
  )
}

export const circleAvatar = () => {
  return <Avatar text="circle" shape={'circle'} color={'skyblue'} />
}

export const bigAvatar = () => {
  return <Avatar text={'big user'} size={100} />
}

export const unstyledAvatar = () => {
  return <Avatar text={'big user'} size={100} unstyled />
}
