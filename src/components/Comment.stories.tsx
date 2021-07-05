import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Comment from './Comment'

export default {
  title: 'components/Comment',
  component: Comment,
  decorators: [withKnobs],
}

export const comment = () => {
  return <Comment></Comment>
}
