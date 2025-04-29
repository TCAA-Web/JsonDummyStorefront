import styled from '@emotion/styled'
import { CSSProperties, ReactNode } from 'react'

interface HeadingInterface {
  textAlign?: 'start' | 'center' | 'end'
  weight?: 'light' | 'medium' | 'regular' | 'semibold' | 'bold'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  font?: 'primary' | 'secondary'
  sx?: CSSProperties
}
interface TypographyInterface extends HeadingInterface {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'b'
  children?: ReactNode
}
const H1 = styled.h1<HeadingInterface>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : props.theme.fontWeight.regular};
  font-size: ${(props) =>
    props.size ? props.theme.fontSize[props.size] + 'px' : Math.floor(props.theme.fontSizeNum.xl * 2) + 'px'};
  font-family: ${(props) => (props.font ? props.theme.font[props.font] : props.theme.font.primary)};
`
const H2 = styled.h2<HeadingInterface>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : props.theme.fontWeight.regular};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSize[props.size] + 'px'
      : Math.floor(props.theme.fontSizeNum.xl * 1.5) + 'px'};
  font-family: ${(props) => (props.font ? props.theme.font[props.font] : props.theme.font.primary)};
`
const H3 = styled.h3<HeadingInterface>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : props.theme.fontWeight.regular};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSize[props.size] + 'px'
      : Math.floor(props.theme.fontSizeNum.xl * 1.3) + 'px'};
  font-family: ${(props) => (props.font ? props.theme.font[props.font] : props.theme.font.primary)};
`
const H4 = styled.h4<HeadingInterface>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : props.theme.fontWeight.regular};
  font-size: ${(props) =>
    props.size ? props.theme.fontSize[props.size] + 'px' : Math.floor(props.theme.fontSizeNum.xl * 1) + 'px'};
  font-family: ${(props) => (props.font ? props.theme.font[props.font] : props.theme.font.primary)};
`
const H5 = styled.h5<HeadingInterface>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : props.theme.fontWeight.regular};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSize[props.size] + 'px'
      : Math.floor(props.theme.fontSizeNum.xl * 0.8) + 'px'};
  font-family: ${(props) => (props.font ? props.theme.font[props.font] : props.theme.font.primary)};
`
const H6 = styled.h6<HeadingInterface>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : props.theme.fontWeight.regular};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSize[props.size] + 'px'
      : Math.floor(props.theme.fontSizeNum.xl) * 0.75 + 'px'};
  font-family: ${(props) => (props.font ? props.theme.font[props.font] : props.theme.font.primary)};
`
const P = styled.h3<HeadingInterface>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : props.theme.fontWeight.regular};
  font-size: ${(props) =>
    props.size ? props.theme.fontSize[props.size] + 'px' : Math.floor(props.theme.fontSizeNum.md) + 'px'};
  font-family: ${(props) => (props.font ? props.theme.font[props.font] : props.theme.font.primary)};
`
const B = styled.h3<HeadingInterface>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : props.theme.fontWeight.bold};
  font-size: ${(props) =>
    props.size ? props.theme.fontSize[props.size] + 'px' : Math.floor(props.theme.fontSizeNum.md) + 'px'};
  font-family: ${(props) => (props.font ? props.theme.font[props.font] : props.theme.font.primary)};
`
export const Typography = ({
  variant,
  size,
  textAlign,
  weight,
  sx,
  children,
  ...rest
}: TypographyInterface) => {
  switch (variant) {
    case 'h1':
      return (
        <H1 style={{ ...sx }} size={size} textAlign={textAlign} weight={weight} {...rest}>
          {children}
        </H1>
      )
      break
    case 'h2':
      return (
        <H2 style={{ ...sx }} size={size} textAlign={textAlign} weight={weight} {...rest}>
          {children}
        </H2>
      )
      break
    case 'h3':
      return (
        <H3 style={{ ...sx }} size={size} textAlign={textAlign} weight={weight} {...rest}>
          {children}
        </H3>
      )
      break
    case 'h4':
      return (
        <H4 style={{ ...sx }} size={size} textAlign={textAlign} weight={weight} {...rest}>
          {children}
        </H4>
      )
      break

    case 'h5':
      return (
        <H5 style={{ ...sx }} size={size} textAlign={textAlign} weight={weight} {...rest}>
          {children}
        </H5>
      )
      break

    case 'h6':
      return (
        <H6 style={{ ...sx }} size={size} textAlign={textAlign} weight={weight} {...rest}>
          {children}
        </H6>
      )
      break

    case 'p':
      return (
        <P style={{ ...sx }} size={size} textAlign={textAlign} weight={weight} {...rest}>
          {children}
        </P>
      )
      break

    case 'b':
      return (
        <B style={{ ...sx }} size={size} textAlign={textAlign} weight={weight} {...rest}>
          {children}
        </B>
      )
      break
  }
}
