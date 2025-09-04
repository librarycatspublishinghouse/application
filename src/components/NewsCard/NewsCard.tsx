import React from 'react';
import style from  './NewsCard.module.css';

import 'font-awesome/css/font-awesome.min.css';

interface NewsCardProps {
    title: string;
    image: string;
    date: string;
    description: string;
}

function NewsCard(props: NewsCardProps): JSX.Element {
    
    return(
        <div className={style.card}>
            <div className={style.title}>
                {props.title}
            </div>
            <div className={style.image}>
            <img className={style.image_item} src={`${process.env.REACT_APP_BACKEND_URL}${props.image}`} alt=""/> 
                
            </div>
            <div className={style.date}>
                {props.date}
            </div>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    );
}

export default NewsCard;