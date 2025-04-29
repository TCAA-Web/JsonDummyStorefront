import styled from '@emotion/styled'

interface ImageInterface {
  borderRadius?: number
  width?: string
  height?: string
  margin?: string
  objectFit?: string
}

export const Image = styled.img<ImageInterface>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  height: auto;
  margin: ${(props) => (props.margin ? props.margin : 'auto')};
  border-radius: ${(props) =>
    props.borderRadius
      ? props.borderRadius + 'px'
      : props.theme.radius.primary
      ? props.theme.radius.secondary
      : 'none'};
  object-fit: ${(props) => (props.objectFit ? props.objectFit : 'cover')};
`
