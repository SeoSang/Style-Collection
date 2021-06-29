/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import ReactAvatar from 'react-avatar'

type AvatarProps = {
  /** 아바타 내용을 설정합니다 */
  text?: string
  /** 아바타의 이미지 src를 받습니다. */
  src?: string
  /** 아바타의 사이즈를 결정합니다. */
  size?: string | number
  /** 아바타 모양을 설정합니다. */
  shape?: 'square' | 'circle'
  /** 아바타의 스타일을 없애고 텍스트만 보이게끔 합니다. */
  unstyled?: boolean
  /** 아바타의 색상을 임의로 결정합니다 */
  color?: string
}

/** 여러 테마를 가지고 있는 `Button` */
const Avatar = ({
  text = 'U',
  shape = 'square',
  size = '40',
  src,
  unstyled = false,
  color = '#CDF0EA',
}: AvatarProps) => {
  const round = shape !== 'square'
  const _size = typeof size === 'string' ? size : size.toString()
  return (
    <ReactAvatar
      color={color}
      round={round}
      src={src}
      name={text}
      size={_size}
      unstyled={unstyled}
    />
  )
}

export default Avatar
