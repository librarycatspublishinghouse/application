import React, {useEffect} from 'react';
import styles from  './Publication.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Recomendations from '../home/Recomendations/Recomendations'
import { Link } from 'react-router-dom';
import { IoIosShareAlt } from "react-icons/io";
import useAnalyticsEventTracker from "../../Hooks/googleAnalyticsEventHook";
import { IBook, Books } from '../../../data/BookData.ts'; 

function Publication() {

  const gaEventTracker = useAnalyticsEventTracker( "Publication");

  let params = useParams();
  
  const[bookData, setBookData] = useState<IBook>([]);

  useEffect(() => {
      async function fetchPublication(id){
        //book data
        const book = Books.find( (b) => b.id === id )
        if( !book )
          throw( "Could not find the book")

        setBookData(book);    
      }
    fetchPublication(params.id);
    window.scrollTo(0, 0);
  },[params.id]);

  const handleDownload = async (event) => {
    // send google analytics event
    gaEventTracker( "Publication Download", `Book: ${params.id}`)
  }

 

  return (
    <div className= {styles.publication} id = 'top'>
       
        <div className= {styles.top_container}>

          <div className = {styles.thumbnail_container} >
            <img className = {styles.image_item} src={`${bookData.thumbnailLink}`} alt=""/> 
   
          </div>

          <div className= {styles.book_main_container}>
            
            <div className= {styles.book_title}>
              {bookData.title}

            </div>
            <div className={styles.book_description}>
              {bookData.desc}
            </div>

            <div className={styles.download_container}>
              <a className={styles.download_link} onClick = {handleDownload} href = {`${bookData.downloadLink}`} download ={`${bookData.title}.pdf`} target="_blank" rel="noreferrer" ><i className="fa fa-download"></i> Download</a>
                
            </div>
            <div className={styles.donation_reminder_container}>
              <div className={styles.donation_reminder_box}>
                <div className={styles.donation_reminder_link}>
                  <Link to = {"/donate"}  className={styles.donation_reminder_link} >
                    This book is available for free. However, if you’d like to offer a donation, that’d be greatly appreciated! &nbsp; 
                    <b>Your support helps us continue our mission. <IoIosShareAlt />
                    </b> 
                  </Link>
                </div>
              </div>
            </div>
          </div>
       
            
        </div>

      {/*     
      TODO Bring back recomendations when more books are added    
              <div className= {styles.recomendations_text}>
                Recomended
              </div>
              <Recomendations id = {params.id} dontInclude = {params.id}/>
          </div> */}
    </div>

    );
}

export default Publication;