import MainNav from '../routes/MainNav'
import {Outlet} from 'react-router-dom'

const Layout = () => {



    return(
        <>
            <MainNav />
            <Outlet />
        </>
    )
}

export default Layout;