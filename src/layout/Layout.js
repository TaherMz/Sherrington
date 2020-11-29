import React from 'react'
import Footer from './footer'
import NavBar from './navBar'

const Layout =({ children }) =>{
return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
)


}

export default Layout