import styled from '@emotion/styled'

interface GridInterface {
  columns?: string | number
  rows?: string | number
  gap?: string | number
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end'
}

export const Grid = styled.div<GridInterface>`
  display: grid;
  grid-template-columns: ${(props) => (props.columns ? `repeat(${props.columns}, 1fr)` : `auto`)};
  grid-template-rows: ${(props) => (props.rows ? `repeat(${props.rows}, 1fr)` : `auto`)};
  gap: ${(props) => (props.gap ? props.gap : '')};
  align-items: ${(props) => (props.align ? props.align : '')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
`
