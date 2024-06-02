import React from "react";
import style from "./PromoBannerCard.module.css";
import { getTheme } from "../../../../../components/Themes/Themes";

export default function PromoBannerCard(props) {

    return (
        <div className={style.promo_banner} style={{
            backgroundColor: getTheme(props.themeIndex).backgroundColour
        }}>
            <div className={style.promo_banner_content}>

                < div className = {style.image_container} >
                    <img className={style.image} src={props.image} alt="banner" />
                </div>

                <div className={style.text_container} style={{
                    color: getTheme(props.themeIndex).textColour
                }}>
                    <div className={style.title}>
                        {props.title}
                    </div>

                    <div className={style.description}>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
