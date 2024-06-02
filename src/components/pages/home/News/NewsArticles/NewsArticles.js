import React from "react";
import style from "./NewsArticles.module.css";
import NewsCard from "../NewsCard/NewsCard";



const NewsArticlesConfig = [ 
    {
        image: "/pictures/news/new-book-blue-moon.jpg",
        text: "We’re incredibly excited to announce that we’re publishing again! 🎉 Our next book is a collection of poems by @racheldeleglise. It will be available on our website for everyone to read and enjoy 😊 More info soon... 👀",
        link: "https://www.instagram.com/p/C6jdJAnRPpY/?img_index=1"
    },
    {
        image: "/pictures/news/contest-swansea.jpg",
        text: "We’re super happy to announce that we’re collaborating with the Swansea Creative Writing Society on an open submission window. We’d love to thank its members for joining our mission to help early-career authors grow! #writingcommunity #writingcontest #swanseauni Creds: @cristobal_eche (design)",
        link: "https://www.instagram.com/p/C50-BTgu7Y1/?img_index=1"
    },
    {
        image: "/pictures/news/contest-huddersfield.jpg",
        text: "We’re collaborating with the Creative Writing Society at the University of Huddersfield on an open submission window!! This collaboration is part of our mission to give amateur, aspiring writers the opportunity to get published for the first time 🤩 #bookpublishing #collaboration",
        link: "https://www.instagram.com/p/C4-rY59uShI/?img_index=1"
    },
    {
        image: "/pictures/news/contest-kcl.jpg",
        text: "Hi! Here are the details for our collaboration with King’s College London Creative Writing Society! We’re looking forward to reading some interesting manuscripts 🤩🤩📝 #writersofinstagram #creativewriting #writingcontest #bookstagram",
        link: "https://www.instagram.com/p/C4YOO9PCBbw/?img_index=1"
    },

]



export default function NewsArticle(props) {

    return (
        <div className={style.news_articles}>
            <div className={style.news_articles_container}>
                {NewsArticlesConfig.map((article, index) => <NewsCard {...article} themeIndex={index}/> )}
                
            </div>
        </div>
    )

}

