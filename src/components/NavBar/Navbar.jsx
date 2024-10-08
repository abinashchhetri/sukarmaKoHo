import React, { useContext, useState } from 'react'
import'./NavBar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("Home")
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout=() =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }
  return (
    <div className='navbar'>
       
    <Link to=''><img src={assets.final} alt="Sainik Hardware Logo" className="logo"  /> </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</Link>
        <a href='#explore-product' onClick={ ()=>setMenu('Products')} className={menu==='Products'?'active':''}>Products</a>
       
        <a href='#footer' onClick={ ()=>setMenu('Contact-Us')} className={menu==='Contact-Us'?'active':''}>Contact-Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.searchi} alt=""  height={45} width={45}/>
        <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.carti}  alt="" height={40} width={40} /> </Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>:<div className='navbar-profile'>
        <img src={assets.profile} alt="" width={50} height={50} />
        
        <ul className="nav-profile-dropdown">
          <li><img src={assets.bagy} alt=""  width={20} height={20}/><p>Orders</p></li>
          <hr/>
          <li onClick={logout}><img src={assets.logout} alt="" width={20} height={20} /><p>Logout</p></li>
        </ul>
        
        </div>}
      
      </div>
      </div>

   
  )
}

export default Navbar
