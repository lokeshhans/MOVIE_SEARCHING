import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <div className='navbar-wrapper'>
        <div className="heading">
            Movie Base
        </div>
        <div className="search-box">
            <input type="text"
            placeholder='Search Novie by name....' />
        </div>
        <div className="theme">
            <button>Dark</button>
        </div>
    </div>
    </>
  )
}

export default Navbar