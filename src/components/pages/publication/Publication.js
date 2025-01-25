import React, {useEffect} from 'react';
import style from  './Publication.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Recomendations from './../home/Recomendations/Recomendations'
import { Link } from 'react-router-dom';
import { IoIosShareAlt } from "react-icons/io";
import useAnalyticsEventTracker from "./../../Hooks/googleAnalyticsEventHook";

function Publication() {

  const gaEventTracker = useAnalyticsEventTracker( "Publication");

  let params = useParams();
  
  const[bookData, setBookData] = useState([]);
  const[authorData, setAuthorData] = useState([]);

  
  useEffect(() => {
      async function fetchPublication(id){
        //book data
        const resp = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/publication/get/`+id);
        console.log("fetching book for page: ",resp.data[0]);
        
        
        const authorID = resp.data[0]?.authorID;
        
        console.log("author id: ", authorID)
      
        
        //set author data
        if (authorID){
          var respAuthor = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/author/get-authors/`+authorID);
        
          console.log("fetching data for author: ",respAuthor.data[0]);
          
          //substring author info string
          respAuthor.data[0].info = respAuthor.data[0].info.substring(0,500)+"...";

        
          setAuthorData(respAuthor.data[0] );
        }
      
        
        setBookData(resp.data[0]);
    
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
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/increment-downloads/`, {id: params.id});

    // send google analytics event
    gaEventTracker( "Publication Download", `Book: ${params.id}`)

  }

  const renderAuthorName = () => {
    console.log("author data: ",authorData);
    if (authorData?.firstName || authorData?.otherNames){
      return (
        <>
          {authorData.firstName + " " + authorData.otherNames}
        </>
      )
    }
    }

  const renderAuthorData = () => {
    if (bookData?.authorID) {
      return(
        <>
          <div className = {style.author_name}>
            {renderAuthorName()}
          </div>
          <div className= {style.author_description}>
            {authorData.info}
          </div>
          <div className={style.author_link}>
            <Link to = {"/author/"+authorData._id}  >
              author link
            </Link>
          </div>
    
        </>
    
     
      );
    }
    else {
      return (
        <>
        </>
      )
    }
  }

  return (
    <div className= {style.publication} id = 'top'>
       
        <div className= {style.top_container}>

          <div className = {style.thumbnail_container} >
            <img className = {style.image_item} src={`${process.env.REACT_APP_BACKEND_URL}`+bookData.thumbnailLink} alt=""/> 
   
          </div>

          <div className= {style.book_main_container}>
            <div className={style.title_author}>
              {renderAuthorName()}
            </div>
            <div className= {style.book_title}>
              {bookData.title}

            </div>
            <div className={style.book_description}>
              {bookData.desc}
            </div>

            <div className={style.download_container}>
              <a className={style.download_link} onClick = {handleDownload} href = {`${process.env.REACT_APP_BACKEND_URL}`+bookData.downloadLink} download = "bookname.pdf" target="_blank" rel="noreferrer" ><i className="fa fa-download"></i> Download</a>
                
            </div>
            <div className={style.donation_reminder_container}>
              <div className={style.donation_reminder_box}>
                <div className={style.donation_reminder_link}>
                  <Link to = {"/donate"}  className={style.donation_reminder_link} >
                    This book is available for free. However, if you’d like to offer a donation, that’d be greatly appreciated! &nbsp; 
                    <b>Your support helps us continue our mission. <IoIosShareAlt />
                    </b> 
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={style.author_main_container}>
            {renderAuthorData()}
          </div>
            
        </div>

      {/*     
      TODO Bring back recomendations when more books are added    
              <div className= {style.recomendations_text}>
                Recomended
              </div>
              <Recomendations id = {params.id} dontInclude = {params.id}/>
          </div> */}
    </div>

    );
}

export default Publication;