/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { spacing } from '../styles/size'
import Avatar from './Avatar'

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
  /** 답글 여부 */
  reComment?: boolean
  /** 강조된 댓글인지 여부 */
  highlight?: boolean
}

const Comment = ({
  nickName = 'U',
  src,
  like = 0,
  dislike = 0,
  createdAt = 'Sun Jul 04 2021 23:48:38 GMT+0900',
  reComment = true,
  highlight = false,
}: CommentProps) => {
  return (
    <CommentContainer>
      <AvatarContainer>
        <FlexDiv height="100%">
          <Avatar text={nickName} src={src} />
        </FlexDiv>
      </AvatarContainer>
      <TextContainer>
        <div></div>
      </TextContainer>
      <DataContainer />
    </CommentContainer>
  )
}

const CommentContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
  background-color: yellowgreen;
  padding: ${spacing.xs.one};
`
const AvatarContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / 2;
  background-color: blue;
  padding: ${spacing.xs.one};
`
const TextContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: red;
  padding: ${spacing.xs.one};
`
const DataContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: green;
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
