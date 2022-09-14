import React from 'react';

import style from './Mockup.module.css'





function Mockup(props){
    const imageLink = props.thumbnail_link 
    return (
        <div className={style.mockup}>

        <div className={style.images_container}>
            
            <img className = {style.ipad_outline} src="pictures/home/ipad.svg"  alt=""/> 
            <img className= {style.iphone_outline} src = "pictures/home/iphone.svg" alt= ""/>
            <img className = {style.book_thumbnail_iphone} src={`${process.env.REACT_APP_BACKEND_URL}`+imageLink} alt="book cover"/> 
            <img className = {style.book_thumbnail_ipad} src={`${process.env.REACT_APP_BACKEND_URL}`+imageLink} alt="book cover"/> 

        
       
        
       
        
        </div>


        </div>
    );
}
export default Mockup ;