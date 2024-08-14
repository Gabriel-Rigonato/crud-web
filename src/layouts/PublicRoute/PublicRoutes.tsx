import { Link, Outlet } from 'react-router-dom'

import Logo from "/public/images/logo_tech.png"

export default function PublicRoutes() {
  return (
    <>
      <div className='flex flex-col gap-10 justify-center h-screen items-center'>
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className='w-1/3 mx-auto'/>
          </Link>
        </div>
        <div className='w-1/3'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
