import React from "react";
import style from "./PromoBanner.module.css";
import PromoBannerCard from "./PromoBannerCard";
import { PromotionsConfig } from "../PromotionsConfig/PromotionsConfig";
import { getTheme } from "../../../../Themes/Themes";
import SimpleCarousel from '../../../../Carousel/SimpleCarousel';

const flickityOptions = {
    initialIndex: 0,
    pageDots: false,
    setGallerySize: true,
    prevNextButtons: true, // Explicitly enable navigation arrows
}

export default function PromoBanner() {
    const getPromotions = () => {
        return Object.keys(PromotionsConfig).map((key, index) => {
            return <PromoBannerCard key={key} {...PromotionsConfig[key]} themeIndex={index} />
        });
    };

    return (
        <>
            {Object.keys(PromotionsConfig).length ? (
                <div className={style.promo_banner}>
                    <SimpleCarousel options={flickityOptions}>
                        {getPromotions()}
                    </SimpleCarousel>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
