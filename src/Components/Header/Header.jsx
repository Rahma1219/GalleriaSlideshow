import'./Header.css'
import Logo from '/images/shared/logo.svg'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import SlideshowContext from '../SlideshowContext/SlideshowContext';






function Header(){

    const {open,setOpen} = useContext(SlideshowContext)


    return(
        <>
         <nav className='navbar' >
        <ul >
          <li>
            <Link to="/"
            ><img src={Logo} alt="Logo" id="logo"
             /></Link>
          </li>
          <li >
            <Link to={open ? '/' : `/artist/0`} 
            id="link">
              <p onClick={() => setOpen(!open)}>  {open ? 'STOP' : 'START'} SLIDESHOW</p>
              </Link>
          </li>
        </ul>
      </nav>
      <hr />
        </>
       
    )
}

export default Header