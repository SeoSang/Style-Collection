/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'

type CommentProps = {
  /** 작성자 닉네임 */
  nickName?: string
  /** 아바타의 이미지 src */
  src?: string | undefined
  /** 좋아요 수 */
  like?: number
  /** 싫어요 수 */
  dislike?: number
  /** 댓글 작성 시간 */
  createdAt?: string | Date
  /** 답글 여부를 결정합니다. */
  reComment?: boolean
}

/** 여러 테마를 가지고 있는 `Button` */
const Comment = ({
  nickName = 'U',
  src,
  like = 0,
  dislike = 0,
  createdAt = 'Sun Jul 04 2021 23:48:38 GMT+0900',
  reComment = true,
}: CommentProps) => {
  return <div />
}

export default Comment
