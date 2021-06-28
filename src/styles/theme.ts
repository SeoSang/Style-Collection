import { blueGrey, Color, grey, indigo, pink, purple, red } from './colors'

export const themeProps = [
  'default',
  'primary',
  'secondary',
  'error',
  'pink',
  'purple',
]
export type ThemeProps =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'pink'
  | 'purple'

export const themeColor: { [key: string]: Color } = {
  default: grey,
  primary: indigo,
  secondary: blueGrey,
  error: red,
  pink: pink,
  purple: purple,
}
