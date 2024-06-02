import React from "react";
import style from "./PromoBanner.module.css";
import Flickity from 'react-flickity-component'
import PromoBannerCard from "./PromoBannerCard";
import { PromotionsConfig } from "../PromotionsConfig/PromotionsConfig";
import { getTheme } from "../../../../Themes/Themes";



const flickityOptions = {
    initialIndex: 0,
    pageDots: false,
}


export default function PromoBanner() {

    const getPromotions = () => {
        return Object.keys(PromotionsConfig).map((key, index ) => {
            return <PromoBannerCard {...PromotionsConfig[key]} themeIndex = {index} />
        } )

    }

    return (

  
    <>
        { Object.keys( PromotionsConfig).length ? (
            <div className = {style.promo_banner}  >
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                   
                >
                    {
                        getPromotions() 
                    }
                </Flickity>
                
            </div>
         ) : (
            <>
            </>
         ) }
    </>
    )

}
