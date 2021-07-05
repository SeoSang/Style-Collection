const size = {
  xs: 750,
  sm: 970,
  md: 1170,
  lg: 1500,
}

const DEFAULT_PADDING_INVERSE = 3000

export const spacing = {
  xs: {
    one: `${size.xs / DEFAULT_PADDING_INVERSE}rem`,
    two: `${(size.xs / DEFAULT_PADDING_INVERSE) * 1.5}rem`,
    three: `${(size.xs / DEFAULT_PADDING_INVERSE) * 2}rem`,
    four: `${(size.xs / DEFAULT_PADDING_INVERSE) * 2.5}rem`,
  },
  sm: {
    one: `${size.sm / DEFAULT_PADDING_INVERSE}rem`,
    two: `${(size.sm / DEFAULT_PADDING_INVERSE) * 1.5}rem`,
    three: `${(size.sm / DEFAULT_PADDING_INVERSE) * 2}rem`,
    four: `${(size.sm / DEFAULT_PADDING_INVERSE) * 2.5}rem`,
  },
  md: {
    one: `${size.md / DEFAULT_PADDING_INVERSE}rem`,
    two: `${(size.md / DEFAULT_PADDING_INVERSE) * 1.5}rem`,
    three: `${(size.md / DEFAULT_PADDING_INVERSE) * 2}rem`,
    four: `${(size.md / DEFAULT_PADDING_INVERSE) * 2.5}rem`,
  },
  lg: {
    one: `${size.lg / DEFAULT_PADDING_INVERSE}rem`,
    two: `${(size.lg / DEFAULT_PADDING_INVERSE) * 1.5}rem`,
    three: `${(size.lg / DEFAULT_PADDING_INVERSE) * 2}rem`,
    four: `${(size.lg / DEFAULT_PADDING_INVERSE) * 2.5}rem`,
  },
}

export default size
