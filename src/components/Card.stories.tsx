import React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { Card } from './Card'

export default {
  title: 'components/Card',
  component: Card,
  decorators: [withKnobs],
}

export const DefaultCard = () => {
  const title = text('title', 'Title')
  const content = text(
    'content.',
    'Suscipit odio omnis nostrum voluptatum et aut ratione eius suscipit. Soluta cumque exercitationem illum.',
  )
  const mode = select('mode', ['default', 'round', 'very-round'], 'default')
  const disabled = boolean('disabled', false)
  const circle = boolean('circle', false)
  const cursor = select(
    'cursor',
    [
      'default',
      'pointer',
      'help',
      'wait',
      'not-allowed',
      'no-drop',
      'copy',
      'cell',
      'crosshair',
      'grab',
      'zoom-in',
      'zoom-out',
      'move',
    ],
    'default',
  )

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
      cursor={cursor}
    />
  )
}

export const CircleCard = () => {
  const title = text('title', 'CircleCard')
  const content = text(
    'content.',
    'Suscipit odio omnis nostrum voluptatum et aut ratione eius suscipit. Soluta cumque exercitationem illum.',
  )
  const width = text('width', '400px')

  return (
    <Card
      title={title}
      content={content}
      circle={true}
      imgSrc={'http://placeimg.com/640/480/animals'}
      width={width}
    />
  )
}

export const DisabledCard = () => {
  const title = text('title', 'CircleCard')
  const content = text(
    'content.',
    'Suscipit odio omnis nostrum voluptatum et aut ratione eius suscipit. Soluta cumque exercitationem illum.',
  )

  return (
    <Card
      title={title}
      content={content}
      disabled={true}
      imgSrc={'http://placeimg.com/640/480/sports'}
    />
  )
}
