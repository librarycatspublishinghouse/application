import React from 'react';
import style from './Services.module.css';


function Services() {
  return (
    <div className={style.services}>


      <div className = {style.info_block}>

        <div className = {style.image_container}>
          <img className = {style.image_item} src="pictures/services/hands.webp" alt=""/>  
        </div>

        <div className = {style.info_container}>
          
          <div className={style.info_title}>
            EQUAL OPPORTUNITY TO ALL MANUSCRIPTS
          </div>

          <ul >
            <li>
              The opportunity to submit a manuscript for us to read.
            </li>
            <li>
              The certainty that we will read your manuscript.
            </li>
            <li>
              Constructive criticism and tailored and personal help to improve the manuscript.
            </li>
          </ul>
        </div>
        
      </div>


      <div className = {style.info_block_left_text}>
        
        <div className = {style.info_container}>
          
        EDITING AND DESIGN
          
          <ul >
            <li>
              Professional editing of the book if we decide to publish.
            </li>
            <li>
              Design and layout of the book.            
            </li>
            
          </ul>
        </div>
        <div className = {style.image_container} style = {{justifyContent:'flex-end'}}>
        <img className = {style.image_item} src="pictures/services/design.webp"  alt=""/>  

        </div>
        
      </div>



      <div className = {style.info_block}>
        <div className = {style.image_container}>
        <img className = {style.image_item} src="pictures/services/books.webp" alt=""/>  

        </div>
        <div className = {style.info_container}>
          
        PUBLICATION AND EXPOSURE
          
          <ul >
            <li>
            Publication of the finalised book on our website.
            </li>
            <li>
            Possibility to charge for the download of a book if the author chooses to.
            </li>
            <li>
            A platform from where to expose your work and attract the attention of bigger editorials.
            </li>
            <li>
            To physically print your book using the final version that we publish.
            </li>
          </ul>
        </div>
        
      </div>

    </div>
    );
}

export default Services;