import React, {useEffect} from 'react';
import style from  './Author.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Recomendations from './../home/Recomendations/Recomendations'
import { Link } from 'react-router-dom';


function Author() {
  let params = useParams();
  
  const[authorData, setAuthorData] = useState([]);
  

  
  useEffect(() => {
    async function fetchData(id){
        
        //author data
        var respAuthor = await axios.get("/api/author/get-authors/"+params.id);
        console.log("fetching book for page: ",respAuthor.data[0]);
        setAuthorData(respAuthor.data[0])
    }
    window.scrollTo(0, 0);
    fetchData(params.id);
    
  },[params.id]);

  return (
    <div className= {style.author} id = 'top'>
       
        <div className= {style.top_container}>

          <div className = {style.thumbnail_container} >
            <img className = {style.image_item} src={`http://localhost:5000/${authorData.image}`} alt="image thumbnail"/> 

          </div>

          
          <div className={style.author_main_container}>
            <div className = {style.author_name}>
              {authorData.firstName + " " + authorData.otherNames}
            </div>
            <div className= {style.author_description}>
              {authorData.info}
            </div>
          

          </div>
        </div>
        
        
    </div>

    );
}

export default Author;