import styled from '@emotion/styled'
import { Link } from '../shared/Link'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartContext'

const Nav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow.lighter};
`

export const Navbar = () => {
  const { cart } = useContext(CartContext)
  return (
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link>
      <Link to='/cart'>Cart ({cart.totalQuantity})</Link>
    </Nav>
  )
}
