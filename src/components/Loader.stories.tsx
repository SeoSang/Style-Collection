import React from 'react'
import Loader from './Loader'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { FullCanvasStyle } from '../styles/canvas'

export default {
  title: 'components/Loader',
  component: Loader,
  decorators: [
    (Story: any) => (
      <div style={FullCanvasStyle}>
        <Story />
      </div>
    ),
    withKnobs,
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const loader = () => {
  const theme = select('theme', ['dark', 'bright'], 'bright')
  const width = text('width', '')

  return <Loader theme={theme} width={width}></Loader>
}
