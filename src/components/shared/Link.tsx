import { css } from '@emotion/css'
import { NavLink } from 'react-router'
import { Theme } from '../../theme'

interface LinkInterface {
  children: React.ReactNode
  mode?: 'dark' | 'light'
  to: string
}

const linkCssDark = css`
  color: white;
  text-decoration: none;
  font-family: ${Theme.font.primary};
  font-size: 12pt;
  width: fit-content;
  height: fit-content;
  &:hover {
    color: ${Theme.colors.secondary};
  }
`

const linkCssLight = css`
  color: black;
  text-decoration: none;
  font-family: ${Theme.font.primary};
  font-size: 12pt;
  width: fit-content;
  height: fit-content;

  &:hover {
    color: ${Theme.colors.secondary};
  }
`

export const Link = ({ children, to, mode, ...rest }: LinkInterface) => {
  return (
    <NavLink
      style={({ isActive }) => (isActive ? { color: Theme.colors.secondary } : {})}
      className={mode === 'dark' ? linkCssDark : linkCssLight}
      to={to}
      aria-label={`link-to-${to}`}
      {...rest}
    >
      {children}
    </NavLink>
  )
}
