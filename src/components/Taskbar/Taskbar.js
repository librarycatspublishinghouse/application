
import style from './Taskbar.module.css';
import React from 'react';
import { NavLink } from './TaskbarElements';


function Taskbar() {
  return (
    <div className={style.taskbar}> 
        
        <div className = {style.taskbar_container}>

            <div className = {style.nav_list_item_container}>

                <NavLink to = "/">
                <li className = {style.nav_list_item}>
                    HOME
                </li>
                </ NavLink>

                <NavLink to = "/publications">
                <li className = {style.nav_list_item}>
                    PUBLICATIONS
                </li>
                </ NavLink>

                <NavLink to = "/send">
                <li className = {style.nav_list_item}>
                    SEND
                </li>
                </ NavLink >
                

                <NavLink to = "/services">
                <li className = {style.nav_list_item}>
                    SERVICES
                </li>
                </ NavLink >

                <NavLink to = "/about">
                <li className = {style.nav_list_item}>
                    ABOUT
                </li>
                </ NavLink >
            </div>


        </div>
        
    </div>
  );
}

export default Taskbar;