import React, {useEffect} from 'react';
import style from  './Publication.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Recomendations from './../home/Recomendations/Recomendations'
import { Link } from 'react-router-dom';


function Publication() {
  let params = useParams();
  
  const[bookData, setBookData] = useState([]);
  const[authorData, setAuthorData] = useState([]);

  
  useEffect(() => {
      async function fetchPublication(id){
        //book data
        const resp = await axios.get('/api/publication/get/'+id);
        console.log("fetching book for page: ",resp.data[0]);
        
        
        const authorID = resp.data[0].authorID;
        console.log("author id: ", authorID)
        
        //author data
        var respAuthor = await axios.get("/api/author/get-authors/"+authorID);
        
        console.log("fetching data for author: ",respAuthor.data[0]);

        //substring author info string
        respAuthor.data[0].info = respAuthor.data[0].info.substring(0,500)+"...";

        setBookData(resp.data[0]);
        setAuthorData(respAuthor.data[0])
      }
    console.log("hello")
    fetchPublication(params.id);
    window.scrollTo(0, 0);
    //console.log("props: ",params);
  //console.log("props: ",props.location.aboutProps);
  
    //get the id passed through
    //display the product data
  },[params.id]);

  const handleDownload = async (event) => {
    //update downloads to plus one
    console.log("incrementing downloads")
    var incrementDownloads= await axios.post("/api/publication/increment-downloads/", {id: params.id});

  }

  return (
    <div className= {style.publication} id = 'top'>
       
        <div className= {style.top_container}>

          <div className = {style.thumbnail_container} >
            <img className = {style.image_item} src={`http://localhost:5000/`+bookData.thumbnailLink} alt="image thumbnail"/> 

          </div>

          <div className= {style.book_main_container}>
            <div className={style.title_author}>
              {authorData.firstName + " " + authorData.otherNames}
            </div>
            <div className= {style.book_title}>
              {bookData.title}

            </div>
            <div className={style.book_description}>
              {bookData.desc}
            </div>

            <div className={style.download_container}>
              <a className={style.download_link} onClick = {handleDownload} href = {`http://localhost:5000/`+bookData.downloadLink} download = "bookname.pdf" target="_blank"><i className="fa fa-download"></i> Download</a>
                
            </div>
          </div>
          <div className={style.author_main_container}>
            <div className = {style.author_name}>
              {authorData.firstName + " " + authorData.otherNames}
            </div>
            <div className= {style.author_description}>
              {authorData.info}
            </div>
            <div className={style.author_link}>
              <Link to = {"/author/"+authorData._id}  >
                author link
              </Link>
            </div>
          </div>
        </div>
        <div className= {style.recomendations_text}>
          Recomended
        </div>
        <Recomendations id = {params.id} />
    </div>

    );
}

export default Publication;