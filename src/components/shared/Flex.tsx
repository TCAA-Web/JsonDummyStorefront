import { CSSProperties } from 'react'
import styled from '@emotion/styled'

interface FlexInterface {
  width?: string
  maxWidth?: string
  dir?: 'column' | 'row'
  sx?: CSSProperties
  marginTop?: string
  marginBottom?: string
  margin?: string
  align?: 'center' | 'flex-start' | 'flex-end'
  justify?: 'center' | 'flex-start' | 'flex-end'
  gap?: string
  padding?: string
}

export const Flex = styled.section<FlexInterface>`
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : 'auto')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1200px')};
  gap: ${(props) => props.theme.spacing.md};
  width: ${(props) => (props.width ? props.width : 'auto')};
  flex-direction: ${(props) => (props.dir ? props.dir : 'column')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : props.theme.spacing.sm)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : props.theme.spacing.sm)};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  padding: ${(props) => (props.padding ? props.padding : props.theme.spacing.sm)};
  gap: ${(props) => (props.gap ? props.gap : props.theme.spacing.sm)};
`
