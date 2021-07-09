/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { spacing } from '../styles/size'
import Avatar from './Avatar'
import { Title } from './Title'
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from 'react-icons/ai'
import { timeForToday } from '../utils/time'
import Button from './Button'
import { useState } from 'react'

type CommentProps = {
  /** 작성자 닉네임 */
  nickName?: string
  /** 댓글 내용 */
  text: string
  /** 아바타의 이미지 src */
  src?: string | undefined
  /** 좋아요 수 */
  like?: number
  /** 싫어요 수 */
  dislike?: number
  /** 좋아요 했는지 여부 */
  liked?: boolean
  /** 싫어요 했는지 여부  */
  disliked?: boolean
  /** 댓글 작성 시간 */
  createdAt?: string | Date
  /** 강조된 댓글인지 여부 */
  highlight?: boolean
}

const Comment = ({
  nickName = 'U',
  src,
  text,
  like = 0,
  dislike = 0,
  createdAt = 'Sun Jul 04 2021 23:48:38 GMT+0900',
  liked = false,
  disliked = false,
  highlight = false,
}: CommentProps) => {
  const [recommentOpened, setRecommentOpen] = useState<boolean>(false)
  const onClickRecomment = () => {
    setRecommentOpen((ro) => !ro)
  }
  return (
    <CommentContainer>
      <AvatarContainer>
        <FlexDiv height="100%">
          <Avatar shape="circle" text={nickName} src={src} />
        </FlexDiv>
      </AvatarContainer>
      <TextContainer>
        <FlexDiv justify="flex-start">
          <Title size={5} style={{ marginRight: spacing.md.two }}>
            {nickName}
          </Title>
          <p>{timeForToday(createdAt)}</p>
        </FlexDiv>
        <p>{text}</p>
      </TextContainer>
      <DataContainer>
        <FlexDiv justify="flex-start">
          {liked ? (
            <AiFillLike
              style={{ marginRight: spacing.md.one, cursor: 'pointer' }}
            />
          ) : (
            <AiOutlineLike
              style={{ marginRight: spacing.md.one, cursor: 'pointer' }}
            />
          )}
          <p style={{ marginRight: spacing.md.two }}>{like}</p>
          {disliked ? (
            <AiFillDislike
              style={{ marginRight: spacing.md.one, cursor: 'pointer' }}
            />
          ) : (
            <AiOutlineDislike
              style={{ marginRight: spacing.md.one, cursor: 'pointer' }}
            />
          )}
          <p style={{ marginRight: spacing.md.two }}>{dislike}</p>
          <Button
            buttonColor="#476072"
            textColor="#EEEEEE"
            size="small"
            onClick={onClickRecomment}>
            답글 달기
          </Button>
        </FlexDiv>
        {recommentOpened ? (
          <FlexDiv justify="flex-start" direction="column">
            <input></input>
            <FlexDiv justify="flex-end">
              <Button size="small" theme="error">
                취소
              </Button>
              <Button size="small" theme="primary">
                답글
              </Button>
            </FlexDiv>
          </FlexDiv>
        ) : (
          ''
        )}
      </DataContainer>
    </CommentContainer>
  )
}

const CommentContainer = styled.div`
  display: grid;
  width: 100%;
  background-color: #f9f9f9;
  grid-template-columns: 0fr 3fr;
  grid-template-rows: 50px minmax(50px, auto);
  grid-gap: 10px;
  padding: ${spacing.xs.one};
`
const AvatarContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / 2;
  padding: ${spacing.xs.one};
`
const TextContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  padding: ${spacing.xs.one};
`
const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2;
  grid-row: 2;
  padding: ${spacing.xs.one};
`

interface FlexDivProps {
  background?: string
  width?: string
  height?: string
  flex?: string
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  margin?: string
  padding?: string
}

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(p: FlexDivProps) => (p.direction ? p.direction : 'row')};
  justify-content: ${(p: FlexDivProps) => (p.justify ? p.justify : 'center')};
  align-items: ${(p: FlexDivProps) => (p.align ? p.align : 'center')};
  align-content: ${(p: FlexDivProps) => (p.align ? p.align : 'center')};
  width: ${(p: FlexDivProps) => (p.width ? p.width : '100%')};
  height: ${(p: FlexDivProps) => (p.height ? p.height : 'auto')};
  background: ${(p: FlexDivProps) => (p.background ? p.background : 'inherit')};
  margin: ${(p: FlexDivProps) => (p.margin ? p.margin : 'auto')};
  padding: ${(p: FlexDivProps) => (p.padding ? p.padding : 'auto')};
`

export default Comment
