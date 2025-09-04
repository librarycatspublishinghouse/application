import React from "react";
import style from "./NewsCard.module.css";
import { getTheme } from "../../../../Themes/Themes";

interface NewsCardProps {
    image: string;
    text: string;
    link: string;
    themeIndex: number;
}

const NewsCard: React.FC<NewsCardProps> = (props) => {
    return (
        <div className={style.news_card}>
            <a className={style.link} href={props.link} target="_blank" rel="noreferrer">
                <div className={style.image_container}>
                    <img className={style.image} src={props.image} alt="news" />
                </div>
                <div className={style.text_container}>
                    <div className={style.text} style={{ color: getTheme(props.themeIndex).textColour}}>
                        {props.text}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default NewsCard;