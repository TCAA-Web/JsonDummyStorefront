import styled from '@emotion/styled'

interface Ulinterface {
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end'
  dir?: 'column' | 'row'
}

export const ListContainer = styled.ul<Ulinterface>`
  list-style-type: none;
  padding: ${(props) => props.theme.spacing.sm};
  display: flex;
  flex-direction: ${(props) => (props.dir ? props.dir : 'column')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  gap: ${(props) => props.theme.spacing.sm};
  border-bottom: solid 1px ${(props) => props.theme.colors.outlineColor};
`
