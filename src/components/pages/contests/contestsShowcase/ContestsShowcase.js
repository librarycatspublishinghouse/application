import React from 'react';
import style from  './ContestsShowcase.module.css';


function ContestsShowcase() {
return (
<div className= {style.contests_showcase}>
    <div className={style.contests_container} >

        <div className={style.contest_card}>
            <div className={style.contest_card_logo}>
                <img className = {style.star_image} src="/stwWebFrontend/pictures/contests/star.webp" alt="uos logo" />
            </div>
            <div className={style.contest_card_title}>
                STWxUoS Contest
            </div>
            <div className={style.contest_card_date}>
                May 2022
            </div>
            <div className={style.contest_card_description}>
                    In collaboration with the UoS Filming Society from the University of Salford
            </div>

            <div className = {style.card_info_container}>
                <div className={style.info_title}>
                    Format:
                </div>
                <div className={style.info_value}>
                    Scripted or otherwise
                </div> 


                <div className={style.info_title}>
                    Topic:
                </div>
                <div className={style.info_value}>
                    Contemporaneuos subjects
                </div> 

                <div className={style.info_title}>
                    Winner:
                </div>
                <div className={style.info_value}>
                    Edgar Backhouse
                </div> 

                <div className={style.info_title}>
                    Prize:
                </div>
                <div className={style.info_value}>
                    Publication
                </div> 
            </div>


        </div>



        <div className={style.contest_card}>
            <div className={style.contest_card_logo}>
                <img className = {style.star_image} src="/stwWebFrontend/pictures/contests/star.webp" alt="uos logo" />
            </div>
            <div className={style.contest_card_title}>
                STWxUCD Contest
            </div>
            <div className={style.contest_card_date}>
                June 2022
            </div>
            <div className={style.contest_card_description}>
                    In collaboration with the UCD Lit Soc from University College Dublin
            </div>

            <div className = {style.card_info_container}>
                <div className={style.info_title}>
                    Format:
                </div>
                <div className={style.info_value}>
                    Short story/short novel
                </div> 


                <div className={style.info_title}>
                    Topic:
                </div>
                <div className={style.info_value}>
                    The act of creation
                </div> 

                <div className={style.info_title}>
                    Winner:
                </div>
                <div className={style.info_value}>
                    Colm O'Shea
                </div> 

                <div className={style.info_title}>
                    Prize:
                </div>
                <div className={style.info_value}>
                    Publication
                </div> 
            </div>


        </div>


        <div className  = {style.contests_note}>
        Future contests and collaborations coming... Stay tuned!
    </div>

    </div> 
    
    
</div>
)
}

export default ContestsShowcase;