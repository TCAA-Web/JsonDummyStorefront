import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { Theme } from '../../theme'

interface CardInterface {
  withShadow?: boolean
  backgroundColor?: string
  maxWidth?: number
  elevation?: 1 | 2 | 3
  sx?: CSSProperties
  variant?: 'outlined'
}

export const Card = styled.div<CardInterface>`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth + 'px' : 320 + 'px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.pureWhite};
  box-shadow: ${(props) =>
    props.elevation === 1
      ? props.theme.shadow.lighter
      : props.elevation === 2
      ? props.theme.shadow.regular
      : props.elevation === 3
      ? props.theme.shadow.darker
      : 'none'};
  border-radius: ${(props) => props.theme.radius.primary};
  width: 'auto';
  margin: ${(props) => props.theme.spacing.sm};
  overflow: auto;
  border: ${(props) => (props.variant === 'outlined' ? `solid 1px ${Theme.colors.outlineColor}` : 'none')};
  justify-content: flex-end;
`
