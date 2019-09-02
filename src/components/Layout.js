import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, pageName}) => {
    return (
        <div className="wrapper">
            <Header /> 
                
            ---{pageName}
            {children}
            <Footer />
        </div>
    )
}

export default Layout
