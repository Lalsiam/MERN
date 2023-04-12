import { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Sidebar(){
    const [cats,setCats]=useState([]);

    useEffect(()=>{
        const getCats = async()=>
        {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[])
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                    <span className='sidebarTitle'>
                        ABOUT ME
                    </span>
                    <img src='https://plus.unsplash.com/premium_photo-1664439520373-c832fe4c3186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='default'/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                    <ul className='sidebarList'>
                        {cats.map((c)=>(
                            <Link to={`/?cat=${c.name}`} className='link'>
                            <li className='sidebarListitem'>{c.name}</li>
                            </Link>
                        ))}
                        
                    </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-solid fa-cube"></i>
                    <i className="sidebarIcon fa-solid fa-code-branch"></i>
                    <i className="sidebarIcon fa-solid fa-code-branch"></i>
                </div>
            </div>

        </div>
    )
}