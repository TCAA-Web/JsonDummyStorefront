import styled from '@emotion/styled'

interface CardMediaInterface {
  height?: string
  width?: 'fit-content' | 'max-content' | 'stretch' | 'auto' | string
  objectPosition?: 'top' | 'bottom' | 'left' | 'right' | 'center' | string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none'
}

export const CardMedia = styled.img<CardMediaInterface>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '20vh')};
  object-position: ${(props) => (props.objectPosition ? props.objectPosition : 'center')};
  object-fit: ${(props) => (props.objectFit ? props.objectFit : 'cover')};
`
