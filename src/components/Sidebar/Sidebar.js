import React from "react";

import { NavLink } from "../Header/HeaderElements";
import {FaTimes } from "react-icons/fa";
import './Sidebar.css';
import {
    ProSidebar,

} from "react-pro-sidebar";



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

            <div className="sb_nav_list_container">
                 <NavLink to = "/books">
                    <li className = {"nav_list_item"}>
                        Home
                    </li>
                </ NavLink>
                <NavLink to = "/books">
                    <li className = {"nav_list_item"}>
                        Books
                    </li>
                </ NavLink>
                <NavLink to = "/authors">
                    <li className = {"nav_list_item"}>
                        Authors
                    </li>
                </ NavLink>
                <NavLink to = "/collaborations">
                    <li className = {"nav_list_item"}>
                        Collaborations
                    </li>
                </ NavLink>
                <NavLink to = "/send">
                    <li className = {"nav_list_item"}>
                        Send Us
                    </li>
                </ NavLink>
                <NavLink to = "/donate">
                    <li className = "nav_list_item">
                        Support Us
                    </li>
                </ NavLink>

            </div>

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
             
                <NavLink to = "/terms-and-conditions">
                    <li className = "nav_list_item">
                        Terms and Conditions
                    </li>
                </ NavLink>

                

            </div>
        </ProSidebar>
    </div>

)

} 
export default Sidebar


