import styled from '@emotion/styled'
import { Link } from './Link'
import { darken } from 'khroma'
import { CSSProperties } from 'react'

interface ImageButtonInterface {
  width?: string
  height?: string
  circular?: boolean
  elevation?: 1 | 2 | 3
  withBackground?: boolean
  variant?: 'outlined' | 'default'
  sx?: CSSProperties
}

interface IconButtonInterface extends ImageButtonInterface {
  elevation?: 1 | 2 | 3
  to?: string
  action?: () => void
  src: string
}

export const ImageButton = styled.img<ImageButtonInterface>`
  width: ${(props) => (props.width ? props.width : '64px')};
  height: ${(props) => (props.height ? props.height : '64px')};
  cursor: pointer;
  object-fit: 'contain';
  object-position: 'center';
  padding: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => (props.withBackground ? props.theme.colors.pureWhite : 'none')};
  border-radius: ${(props) => (props.circular ? '50%' : 'none')};
  box-shadow: ${(props) =>
    props.elevation === 1
      ? props.theme.shadow.lighter
      : props.elevation === 2
      ? props.theme.shadow.regular
      : props.elevation === 3
      ? props.theme.shadow.darker
      : 'none'};
  transition: all 0.2s ease;
  border: ${(props) =>
    props.variant === 'outlined' ? `solid 1px ${props.theme.colors.outlineColor}` : 'none'};

  &:hover {
    background-color: ${(props) => darken(props.theme.colors.pureWhite, 20)};
    transform: scale(1.05);
  }
`

export const IconButton = ({
  src,
  width,
  height,
  circular,
  elevation,
  variant,
  to,
  sx,
  action,
  ...rest
}: IconButtonInterface) => {
  return to ? (
    <Link to={to}>
      <ImageButton
        style={{ ...sx }}
        variant={variant}
        alt={`link_to_${to}`}
        aria-label={`link_to_${to}`}
        circular={circular}
        src={src}
        width={width}
        height={height}
        elevation={elevation}
        {...rest}
      ></ImageButton>
    </Link>
  ) : (
    <ImageButton
      style={{ ...sx }}
      variant={variant}
      aria-label={`link_to_${to}`}
      circular={circular}
      src={src}
      width={width}
      height={height}
      elevation={elevation}
      {...rest}
      onClick={action}
    />
  )
}
