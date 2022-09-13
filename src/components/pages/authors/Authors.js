import React from 'react';
import { useEffect, useState } from 'react';
import style from  './Authors.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Authors() {

  const[authors, setAuthors] = useState([])

  useEffect(()=>{
      async function fetchAuthors(){
          const req = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/author/get-all`);
          console.log("author get all request: ",req);
          var authorsArray = [];
       
          for (var i = 0 ; i < req.data.length; i++){
              
                  var authorObj = {};
                  
                  authorObj.id = req.data[i]._id;
                  console.log("Authorid: ",authorObj.id);
                  const authorFirstName = req.data[i].firstName ;
                  const authorOtherNames  = req.data[i].otherNames ;
                  console.log("author name: ",authorFirstName + authorOtherNames);
                  authorObj.firstName = authorFirstName;
                  authorObj.otherNames = authorOtherNames
                  authorObj.info = req.data[i].info;
                  authorObj.image = req.data[i].image;
                  authorsArray.push(authorObj);
             
          }
          console.log("Author object: ",authorsArray)
          await setAuthors(authorsArray);
          
      }
      console.log("called");
      fetchAuthors();
  },[]);
  
  return (
    <div className= {style.authors}>
 

        <div className={style.authors_grid} >
          {authors.map(author => {
            return(
            <div className={style.author_item}>
              
              <div className= {style.author_image} >
                <img className = {style.author_image_item} src={`${process.env.REACT_APP_BACKEND_URL}${author.image}`} alt = ""/> 
              </div>
              <Link to = {"/author/"+ author.id}  className ={style.author_link}>
                <div className= {style.author_info_container} >
                  {author.info}
                </div>
              </Link>
            </div>
            );
          })}


        </div>

    </div>
    );
}

export default Authors;