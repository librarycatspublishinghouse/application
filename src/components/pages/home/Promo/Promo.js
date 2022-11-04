import React from 'react';
import { Link } from 'react-router-dom';
import style from './Promo.module.css';
import axios from 'axios'


function Promo() {

    const handleDownload = async (event) => {
        //update downloads to plus one
        const id = "63610b054837a84f9da92a32";
        console.log("incrementing downloads")
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/increment-downloads/`, {id:id});

    }
    
    return (
    <div className={style.promo}>
        <div className={style.background}>
        </div>
        <div className = {style.banner}>
            <img  className ={style.banner_image} src = "/pictures/home/promos/contempary-subjects-banner.webp" alt = "banner" />
            <div className = {style.banner_button_container}>
                <Link className = {style.link} to='/publication/63610b054837a84f9da92a32'>
                    <div className = {style.banner_button}>
                        <span className={style.banner_button_text}>
                            Read now
                        </span>
                    </div>
                </Link>
            </div>
        </div>

        <div className= {style.content_container}>
            <div className = {style.content}>
                <div className = {style.content_title}>
                    CONTEMPORARY <br /> SUBJECTS
                </div>

                <div className = {style.content_text}>
                    Contemporary subjects is a collection of gripping short stories from a group of newly published writers. <br />
                </div>
                
                <div className = {style.download_text}>
                    Available for download now.
                </div>
                
                <div className = {style.content_button_container}>
                    <a className={style.link} onClick = {handleDownload} href = {`${process.env.REACT_APP_BACKEND_URL}/files/publications/PDF/ContemporarySubject.pdf`} target="_blank">
                        <div className = {style.content_button}>
                            Download
                        </div>
                    </a>
                </div>

            </ div>

            <div className= {style.content_image_container}>
            <img  className ={style.content_image} src = "/pictures/home/promos/ipad-cover.webp" alt = "banner" />
            </div>    
        
            <div className = {style.content_image_container}>
                <div className = {style.book_cover}>
                    <img  className ={style.content_image} src = "/pictures/home/promos/book.webp" alt = "banner" />
                </div>
            </div>
            <div className = {style.content}>
                <div className = {style.content_title} style = {{color: "#da5505"}}>
                    ABOUT
                </div>

                <div className = {style.content_text}>
                    Strange journeys to deliver undisclosed packages through 'non-descript names of far-off hamlets no one wants,' war diaries, oppressive loneliness and abhorrence for other people, or the depths of intergenerational trauma, all form part of what are indeed contemporary subjects. Take part in this collection of short stories and explore these themes through the prose of our newly published writers. 
                </div>
            </div>

        </div>


    </div>
  )
}
export default Promo;