import React, { useEffect } from 'react';

import style from './Home.module.css'


import PromoBanner from './Promo/PromoBanners/PromoBanner';
import NewsArticle from './News/NewsArticles/NewsArticles';


const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.home}>
      <PromoBanner />

      <div className={style.card_list_title}>
            News
      </div>

      <NewsArticle />
          
    </div>
    );
}

export default Home;