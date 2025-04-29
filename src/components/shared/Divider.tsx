import styled from '@emotion/styled'

interface DividerInterface {
  width?: string
}

export const Divider = styled.span<DividerInterface>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 1px;
  background-color: ${(props) => props.theme.colors.outlineColor};
`
