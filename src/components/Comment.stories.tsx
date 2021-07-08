import { number, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Comment from './Comment'

export default {
  title: 'components/Comment',
  component: Comment,
  decorators: [withKnobs],
}

export const comment = () => {
  const nickname = text('nickname', '서상혁')
  const content = text('text', '댓글 내용입니다.')
  const like = number('like', 5)
  const dislike = number('dislike', 1)

  return (
    <Comment
      nickName={nickname}
      text={content}
      like={like}
      dislike={dislike}></Comment>
  )
}
