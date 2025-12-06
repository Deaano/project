import React, {useState} from 'react'
import leaf from '../../Assets/Images/leaf1.png'

import '../Nav/Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
const [Menu, setMenu] = useState('Home');

  return (
    <>
        <div className="nav">
            <div className="nav-logo-left">
                <img src={leaf} alt="" />
                <p>Grill And Grove</p>
                <img src={leaf} alt="" className="mobile-leaf" />
            </div>
            <div className="nav-links">
                <ul>
                   <Link to='/' style={{color:'#171717', textDecoration:'none'}}><li onClick={()=>{setMenu('Home')}}>Home{Menu==="Home"?<hr/>:<></>}</li></Link>
                    <Link to='/Categorys' style={{color:'#171717', textDecoration:'none'}}><li onClick={()=>{setMenu('Categorys')}}>Categorys{Menu==="Categorys"?<hr/>:<></>}</li></Link>
                    <Link to='/MustSee' style={{color:'#171717', textDecoration:'none'}}><li onClick={()=>{setMenu('MustSee')}}>Must See{Menu==="MustSee"?<hr/>:<></>}</li></Link>
                    <Link to='Blogs' style={{color:'#171717', textDecoration:'none'}}><li onClick={()=>{setMenu('Blogs')}}>Blogs{Menu==="Blogs"?<hr/>:<></>}</li></Link>
                </ul>
            </div>
            <div className="nav-logo-right">
                <p>Get Summer <br/>Ready</p>
            </div>
        </div>
        <div className="mobile-nav">
              <ul>
                   <Link to='/' style={{color:'#171717', textDecoration:'none'}}> <li onClick={()=>{setMenu('Home')}}>Home{Menu==="Home"?<hr/>:<></>}</li></Link>
                    <Link to='/Categorys' style={{color:'#171717', textDecoration:'none'}}><li onClick={()=>{setMenu('Categorys')}}>Categorys{Menu==="Categorys"?<hr/>:<></>}</li></Link>
                    <Link to='/MustSee' style={{color:'#171717', textDecoration:'none'}}><li onClick={()=>{setMenu('MustSee')}}>Must See{Menu==="MustSee"?<hr/>:<></>}</li></Link>
                    <Link to='Blogs' style={{color:'#171717', textDecoration:'none'}}><li onClick={()=>{setMenu('Blogs')}}>Blogs{Menu==="Blogs"?<hr/>:<></>}</li></Link>
                </ul>
        </div>
    </>
  )
}

export default Nav