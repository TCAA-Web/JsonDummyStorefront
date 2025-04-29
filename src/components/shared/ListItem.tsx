import styled from '@emotion/styled'

interface ListItemInterface {
  textAlign: 'start' | 'center' | 'end' | 'justify'
}

export const ListItem = styled.li<ListItemInterface>`
  text-decoration: none;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
`
