import './header.css'

import logo from "../../Assets/Images/logo.svg"


const Header = () => {
  return (
    <div className='headerContainer'>
      
       <img className='logo' src={logo} alt="logo" width="50" height="110"/>
       
    </div>
  )
}

export default Header