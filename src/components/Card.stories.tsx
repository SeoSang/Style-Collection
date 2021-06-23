import React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { Card, CardMode } from './Card'

export default {
  title: 'components/Card',
  component: Card,
  decorators: [withKnobs],
}

export const DefaultCard = () => {
  const title = text('title', 'default title')
  const content = text('content.', 'default content')
  const mode = select('mode', ['default', 'round', 'very-round'], 'default')
  const disabled = boolean('disabled', false)
  const circle = boolean('circle', false)
  const width = text('width', '400px')
  const imgSrc = text('image source', 'http://placeimg.com/640/480/sports')
  return (
    <Card
      width={width}
      title={title}
      mode={mode}
      content={content}
      circle={circle}
      imgSrc={imgSrc}
      disabled={disabled}
    />
  )
}
