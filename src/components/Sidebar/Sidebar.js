import React from "react";

import { NavLink } from "../Header/HeaderElements";
import { FaRegMap, FaTimes } from "react-icons/fa";
import style from './Sidebar.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFoooter,
    SidebarContent,
} from "react-pro-sidebar";

import { useState } from "react";

const Sidebar =  ({menuCollapse, toggle}) => {



return(
    <div id = "sidebar">
        <ProSidebar className = 'sidebar_page' 
        collapsed = {!menuCollapse}>
        </ProSidebar>
        <ProSidebar collapsed = {menuCollapse} 
        className = "sidebar_container" 
        onClick = {toggle}>
            <div className = "close_icon_container" onClick = {toggle} >
                <FaTimes className = "close_icon"/>

            </div>
            <div className = "menu_list_container">

                <NavLink to = "/services">
                    <li className = "nav_list_item">
                        About Us - Services
                    </li>
                </ NavLink>
                <NavLink to = "/mission">
                    <li className = "nav_list_item">
                        About Us - Mission
                    </li>
                </ NavLink>
                <NavLink to = "/team">
                    <li className = "nav_list_item">
                        Team
                    </li>
                </ NavLink>
                <NavLink to = "/contact">
                    <li className = "nav_list_item">
                        Contact
                    </li>
                </ NavLink>

            </div>
        </ProSidebar>
    </div>

)

} 
export default Sidebar


