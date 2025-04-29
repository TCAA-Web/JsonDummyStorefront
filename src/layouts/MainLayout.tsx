import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/app/Navbar'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
