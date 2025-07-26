import React from 'react';


import EmailSubmission from './EmailSubmission/EmailSubmission';
import style from './Home.module.css'
import News from './News/NewsBanner/News';

import Carousel from '../../Carousel/Carousel'; //removing breaks flickity but is never used
import Flickity from 'react-flickity-component'
import BestSeller from './Recomendations/BestSeller';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Mockup from './mockup/Mouckup';
import Promo from './Promo/PromoPages/ContemporarySubjectsPromo';
import PromoBanner from './Promo/PromoBanners/PromoBanner';
import NewsArticle from './News/NewsArticles/NewsArticles';


const flickityOptions = {
  initialIndex: 0
}

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className={style.home}>
      <PromoBanner />

      {/* <Promo /> */}
      {/* <Flickity
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
        </Flickity> */}
            
          
              
            
      <div className = {style.card_list_title}>
            News
      </div>

      <NewsArticle />
          
       

      {/* <div className = {style.card_list_title}>
            RECOMENDATIONS
      </div>

  
      <div className = {style.card_list_title}>
            BEST SELLERS
      </div>

      <BestSeller />
      <EmailSubmission />
       */}
    </div>
    );
}

export default Home;