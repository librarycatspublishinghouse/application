
import style from './Header.module.css';
import { NavLink } from './HeaderElements';


const Header = ({toggle}) => {
  return (
    <div className={style.header}> 
        <div className = {style.header_container}>
            <div className = {style.grid_container}>

                <div className = {style.bars_container}>
                    <svg className = {style.bars_icon} onClick= {toggle} >
                            <path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"></path>
                            <path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M-0.000,8.000 L17.000,8.000 L17.000,10.000 L-0.000,10.000 L-0.000,8.000 Z"></path>
                            <path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z"></path>
                    </svg>  
                </div>      
                        
                <div className = {style.header_logo_container}>
                   
                    <div className = {style.header_logo} >
                        <NavLink to = "/">
                            <img src = "/pictures/SpreadTheWord-Logo-png.webp" alt = "logo"/>
                        </NavLink>
                    </div>
                </div>

                <div className ={style.header_inner_container}>
                    <a className = {style.logo_texts} href = "https://www.spreadthewordbooks.com/">
                        <div className = "page-title-container">
                            <div className = {style.page_title_text}>
                                <span> SPREAD THE WORD </span>
                                
                            </div>
                        </div>
                        <div className = {style.page_slogan_container}>
                            <div className = {style.page_slogan_text}>
                                The Digital Book Publisher
                            </div> 
                        </div>
                    </ a>
                </div>
                <div className  = {style.navbar_items_container}>
                    <div className = {style.nav_list_container}>

                        <NavLink to = "/books">
                            <li className = {style.nav_list_item}>
                                Books
                            </li>
                        </ NavLink>
                        <NavLink to = "/authors">
                            <li className = {style.nav_list_item}>
                                Authors
                            </li>
                        </ NavLink>
                        <NavLink to = "/contests">
                            <li className = {style.nav_list_item}>
                                Contests
                            </li>
                        </ NavLink>
                        <NavLink to = "/send">
                            <li className = {style.nav_list_item}>
                                Send us
                            </li>
                        </ NavLink>

                    </div>
                </div>

            </div>


        </div>
    </div>
  );
}

export default Header;