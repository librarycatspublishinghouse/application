import React, { useState } from 'react';
import axios from 'axios';
import style from './News.module.css'





function News(props){
    
return (
    //news listed newest first 
    //contains the title "news" folled by,
    //the news title in bold
    //and the news description underneath
    // there would also be a further image to the right 
    //aswell as any jsx/html code passed through incase you want to make a new uniquer news piece 
    <div className={style.news} >
        <div className={style.news_container}>
            <div className={style.left_container}>
                <div className={style.news_header}>
                    NEWS
                </div>
                <div className={style.news_title}>
                    {props.title}
                </div>
                <div className={style.news_description}>
                    {props.description}
                </div>

                <div className = {style.html_code}>
                    {props.html_code}
                </div> 

            </div>

            <div className={style.right_container}>
                <div className={style.news_image}>
                    <img className = {style.image} src = "https://via.placeholder.com/150"></img>
                </div>
            </div>
        </div>
    </div>   
);
}

export default News;