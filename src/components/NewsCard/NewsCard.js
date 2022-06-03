import React, {useEffect} from 'react';
import style from  './NewsCard.module.css';
import axios from 'axios';
import { useState } from 'react';

import 'font-awesome/css/font-awesome.min.css';

import { Link } from 'react-router-dom';


function NewsCard(props) {
    
    return(
        <div className =  {style.card}>
            <div className = {style.title}>
                {props.title}
            </div>
            <div className = {style.image}>
            <img className = {style.image_item} src={`http://localhost:5000/`+props.image} alt="image thumbnail"/> 
                
            </div>
            <div className = {style.date}>
                {props.date}
            </div>
            <div className = {style.description}>
                {props.description}
            </div>
        </div>
    );
}
export default NewsCard