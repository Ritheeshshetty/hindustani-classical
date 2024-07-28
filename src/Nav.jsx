import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function Nav() {
  const [menu, setMenu] = useState(100)
  const handleClick=()=>{
    if(menu===100){
      setMenu(0) 
    }
    else{
      setMenu(100)
    }
  }

  return (
    <>
    <header>
        <div className='logo' >Swar <i className="fa-solid fa-music"></i> Sangam</div>
        {/* <div className='logo' ><img src="./favicon.ico" alt="" /></div> */}
        <section>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/theory">Theory</Link></li>
                <li><Link to="/media">Media</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {/* <li><a herf="#">Explore</a></li> */}
            </ul>
        </section>
        <nav className='demo' style={{transform: `translateX(${menu}%)`}}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/theory">Theory</Link></li>
                <li><Link to="/media">Media</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><a herf="#">Explore</a></li> */}
            </ul>
        </nav>
        <button className="menu" onClick={handleClick}>
        {(menu==100?<i className="fa-solid fa-bars"></i>:
        <i className="fa-solid fa-circle-xmark"></i>)}
        </button>
    </header>
    </>
  )
}

export default Nav;