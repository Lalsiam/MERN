import { useContext } from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
export default function Topbar(){
    const {user,dispatch} = useContext(Context);

    const PF = "http://localhost:3000/images/"

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
    }
    return(
        <div className="top">
            <div className='topleft'>
            
            
            </div>
            <div className='topcenter'>
            <ul className='toplist'>
                <li className='toplistitem'><Link className='link' to="/">HOME</Link></li>
                <li className='toplistitem'><Link className='link' to="/">ABOUT</Link></li>
                <li className='toplistitem'><Link className='link' to="/">CONTACT</Link></li>
                <li className='toplistitem'><Link className='link' to="/write">WRITE</Link></li>
                <li className='toplistitem' onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
            
            </div>
            <div className='topright'>
            
            {
                user ? (
                    <Link to="/settings">
                    <img className ='profilepic' src={PF+user.profilepic} alt='default'/>
                    </Link>
                ):(
                    <ul className='toplist'>
                        <li className='toplistitem'><Link className='link' to="/login">LOGIN</Link></li>
                        
                        <li className='toplistitem'><Link className='link' to="/register">REGISTER</Link></li>
                    </ul>
                )
                
            }
            <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
            
            

            </div>
        </div>
    )
}