import React, {  useState } from 'react'
import './Navbar.css'
function Navbar() {

  // const resultList = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    <div className='navbar-wrapper'>
        <div className="heading">
            Movie Base
        </div>
        <div className="search-box">
            <input type="text"
            onFocus={()=>setIsVisible(true)}
            onBlur={()=>setIsVisible(false)}
            placeholder='Search Novie by name....' />
            <div className="search-box-result" style={{display:(isVisible) ? 'block': 'none'}}>
              <div>class 1</div>
              <div>class 1</div>
              <div>class 1</div>
            </div>
        </div>
        <div className="theme">
            <button>Dark</button>
        </div>
    </div>
    </>
  )
}

export default Navbar