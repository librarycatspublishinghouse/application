import React from 'react';

import { NavLink } from '../../Taskbar/TaskbarElements';
import EmailSubmission from './EmailSubmission/EmailSubmission';
import Recomendations from './Recomendations/Recomendations';
import Card from './Recomendations/Card/Card';
import style from './Home.module.css'
import News from './News/News';

import Carousel from '../../Carousel/Carousel';
import Flickity from 'react-flickity-component'
import BestSeller from './Recomendations/BestSeller';

const flickityOptions = {
    initialIndex: 0
}



function Home() {

  const placeholder = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <div className="Home">

<Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {[
      <News title = "Test Title" description = {placeholder} html_code = {<> </>}/> ,
      <News title = "Test Title2" description = {placeholder} html_code = {<> </>}/> ]}
    </Flickity>
            
          
              
            

          
       

      <div className = {style.card_list_title}>
            Recomendations
      </div>
      <Recomendations dontInclude = {null} />
      <div className = {style.card_list_title}>
            Best Seller
      </div>
      <BestSeller />
      <EmailSubmission />
      
    </div>
    );
}

export default Home;