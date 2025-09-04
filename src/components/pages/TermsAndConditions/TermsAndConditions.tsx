import React from "react";
import style from "./TermsAndConditions.module.css";

const TermsAndConditions: React.FC = () => {

    return (
        <div className={style.terms}>
            <div className={style.terms_container}>
                <div className={style.container_1}>
                    <div className={style.description_container}>
                        <div className={style.title}>
                            Terms & Conditions
                        </div>
                        <div className={style.description}>
                            Get to know our policies and how to contribute your support to our publishing team and community of emerging writers. 
                        </div>
                        <div className={style.description_image}>
                            <img className={style.description_image_item} src={`${process.env.PUBLIC_URL}/pictures/terms-and-conditions/icon_laptop-screen.png`} alt="Terms and Conditions" />
                        </div>
                    
                    </div>
                    <div className={style.gap_container}>
                    </div>
                </div>
                <div className={style.container_2}>

                    <div className={style.document_container}>

                        <a className={style.link} href="#" target="_blank" rel="noreferrer">
                            
                            <div className={style.document}>

                                <div className={style.document_image}>
                                    <img className={style.document_image_item} src={`${process.env.PUBLIC_URL}/pictures/terms-and-conditions/icon_paper-search.png`} alt="Terms and Conditions" />
                                </div>
                
                                <div className={style.document_title}>
                                    General Terms & Conditions
                                </div>

                                <button className={style.download_button}>
                                    Download
                                </button>

                            </div>
                        </a>

                        <a className={style.link} href="#" target="_blank" rel="noreferrer">

                            <div className={style.document}>

                                <div className={style.document_image}>
                                    <img className={style.document_image_item} src={`${process.env.PUBLIC_URL}/pictures/terms-and-conditions/icon_paper-lock.png`} alt="Terms and Conditions" />
                                </div>
                
                                <div className={style.document_title}>
                                    Privacy Policy
                                </div>

                                <button className={style.download_button}>
                                    Download
                                </button>
                                
                            </div>
                        </a>
                    </div>
      
                </div>
            </div>
        </div>

    );
};

export default TermsAndConditions;