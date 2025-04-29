import styled from '@emotion/styled'

interface PaperInterface {
  width?: string
  height?: string
  bgColor?: string
  borderRadius?: string
  dir?: string
  padding?: string
  margin?: string
  elevation?: 1 | 2 | 3
  variant?: 'outlined'
  borderColor?: string
  gap?: string
}

export const Paper = styled.div<PaperInterface>`
  max-width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.pureWhite)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : props.theme.radius.primary)};
  flex-direction: ${(props) => (props.dir ? props.dir : 'column')};
  padding: ${(props) => (props.padding ? props.padding : props.theme.spacing.md)};
  margin: ${(props) => (props.margin ? `${props.margin}` : `${props.theme.spacing.sm} auto`)};
  display: flex;
  gap: ${(props) => (props.gap ? props.gap : props.theme.spacing.sm)};
  border: ${(props) =>
    props.variant === 'outlined'
      ? `1px solid ${props.borderColor || props.theme.colors.outlineColor}`
      : 'none'};
  box-shadow: ${(props) =>
    props.elevation
      ? props.elevation === 1
        ? props.theme.shadow.lighter
        : props.elevation === 2
        ? props.theme.shadow.regular
        : props.elevation === 3
        ? props.theme.shadow.darker
        : 'none'
      : 'none'};
  transition: all 0.3s ease-in-out;

  @media (max-width: ${(props) => props.theme.screenSizeMobile.default}px) {
    padding: ${(props) => props.theme.spacing.sm};
  }
`
