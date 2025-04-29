import styled from '@emotion/styled'
import { darken } from 'khroma'
import { CSSProperties } from 'react'

interface ButtonInterface {
  withBorder?: boolean
  withShadow?: boolean
  borderRadius?: number
  bgColor?: 'string'
  color?: 'string'
  sx?: CSSProperties
  align?: 'center' | 'start' | 'end'
  justify?: 'center' | 'start' | 'end'
  gap?: string
  width?: string
}

export const Button = styled.button<ButtonInterface>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : props.theme.spacing.sm)};
  cursor: pointer;
  justify-self: ${(props) => (props.justify ? props.justify : 'center')};
  align-self: ${(props) => (props.align ? props.align : 'center')};
  color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.pureWhite)};
  background-color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  box-shadow: ${(props) => (props.withShadow ? props.theme.shadow : 'none')};
  font-size: ${(props) => props.theme.fontSize.md};
  border: ${(props) => `solid 1px ${props.theme.colors.primary}`};
  text-align: 'center';
  border-radius: ${(props) =>
    props.borderRadius
      ? props.borderRadius + 'px'
      : props.theme.radius.primary
      ? props.theme.radius.secondary
      : 'none'};
  height: auto;
  ${(props) => (props.width ? props.width : 'auto')};
  transition: all 0.2s ease;
  padding: ${(props) => props.theme.spacing.sm};
  text-align: center;

  &:active {
    outline: ${(props) => `solid 1px ${darken(props.theme.colors.primary, 50)} `};
  }

  &:focus {
    border-color: ${(props) =>
      props.color ? darken(props.color, 50) : darken(props.theme.colors.primary, 50)};
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.pureWhite};
    border: ${(props) => `solid 1px ${props.theme.colors.primary}`};
  }
`
