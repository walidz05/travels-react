import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import NewContext from '../context/NavContext';
const Nav = () => {

    const {state,dispatch} = useContext(NewContext)

    return (
        <>

        {state ?  <div className="navLayer">
        </div> : ''}
       
        <div className={state ? 'nav nav--open' : 'nav nav--close'}>
            <div className="nav__content">

                    <li>
                        <Link to="/">
                            Home
                        </Link>
                     </li>

                     <li>

                        <Link to="/about">
                            About
                        </Link>
                     </li>   

                       <li>

                        <Link to="/contact">
                            Contact
                        </Link>
                     </li>     
                      
            </div>
        </div>

        </>
    )
}

export default Nav
