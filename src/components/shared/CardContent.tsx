import styled from '@emotion/styled'

interface CardContentInterface {
  textAlign?: 'start' | 'end' | 'center'
  gap?: string
}

export const CardContent = styled.div<CardContentInterface>`
  padding-top: ${(props) => props.theme.spacing.sm};
  padding-bottom: ${(props) => props.theme.spacing.sm};
  margin: ${(props) => props.theme.spacing.sm};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  gap: ${(props) => (props.gap ? props.gap : props.theme.spacing.sm)};
  display: flex;
  flex-direction: column;
`
