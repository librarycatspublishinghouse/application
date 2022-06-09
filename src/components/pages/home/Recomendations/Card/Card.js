import React from 'react';

import style from './Card.module.css'
import { Link } from 'react-router-dom';






const Card = (props) => {
   
    
   

    return (
        <div className={style.card} >
            <Link to = {"/publication/"+props.publicationID}  >
            <div className= {style.card_inner}>
                <div className= {style.image_container}>
                    <img className = {style.image_item} src={`${process.env.REACT_APP_BACKEND_URL}`+props.imageLink} alt="book cover"/> 
                </div>
                <div className = {style.info_container}>
                    
                    <div className = {style.author_container}>
                        {props.authorname}
                    </div>
                    <div className= {style.bookname_container}>
                        {props.bookname}
                    </div>
    
                </div>
            </div>
            </Link>
        </div>   
    );
}

export default Card;