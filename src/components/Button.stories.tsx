import css from '@emotion/css'
import React from 'react'
import { withKnobs, text, boolean, select, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'components/Button',
  component: Button,
  decorators: [withKnobs],
}

export const button = () => {
  const label = text('label', 'BUTTON')
  const textColor = color('textColor', '')
  const buttonColor = color('buttonColor', '')
  const size = select('size', ['small', 'medium', 'big'], 'medium')
  const theme = select(
    'theme',
    ['primary', 'secondary', 'error', 'pink', 'purple'],
    'primary',
  )
  const disabled = boolean('disabled', false)
  const width = text('width', '')
  return (
    <Button
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action('onClick')}
      textColor={textColor}
      buttonColor={buttonColor}>
      {label}
    </Button>
  )
}

button.story = {
  name: 'Default',
}

export const primaryButton = () => {
  return <Button>PRIMARY</Button>
}

export const secondaryButton = () => {
  return <Button theme="secondary">SECONDARY</Button>
}

export const errorButton = () => {
  return <Button theme="error">ERROR</Button>
}

export const pinkButton = () => {
  return <Button theme="pink">PINK</Button>
}
export const purpleButton = () => {
  return <Button theme="purple">PURPLE</Button>
}

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  )
}

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <br />
      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
    </div>
  )
}

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <br />
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  )
}
