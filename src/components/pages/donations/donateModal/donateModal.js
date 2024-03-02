

import React from "react";
import style from './donateModal.module.css';
import { NavLink } from "react-router-dom";
import { useOutSideClickAlert } from "../../../Hooks/outsideClickHook";



const DonateModal = (props) => {

    const modalRef = React.useRef(null);
    useOutSideClickAlert(modalRef, props.closeModal);

    return (
        <div className={style.modal_background}>
            <div className={style.modal}  ref={modalRef}>
                <div className={style.modal_header_banner}> </div>
                <div className={style.close} onClick={props.closeModal}>&times;</div>
         
                    
                <div className={style.modal_content}>
                    <div className={style.modal_content_inner}>
                        <div className={style.modal_text}>
                            <span>
                                Join us in spreading the word about the power of reading. <br />
                                Your support fuels our mission to share the joy of books with even more minds. <br />
                            </span>
                        </div>
                        
                        <div className={style.modal_text}>
                            <span>
                                Thank you so much for considering donating. <br />
                                We accept anything from £/$ 1 to whatever you feel like! <br />
                                Any amount helps, so thank you! <br />
                            </span>
                        </div>

                        <b >
                            <div className={style.payment_information}>
                                <div className={style.payment_information_paypal}>
                                    <div className={style.payment_info_header}> Paypal </div>
                                    <div className={style.paypal_link}>
                                        <a  className ={ style.paypal_link} href="https://www.paypal.com/donate/?hosted_button_id=7Y74U4G8L7Z9W" target="_blank">Donate Here</a>
                                    </div>
                                </div>
                                <div className={style.payment_information_bank}>
                                    <div className={style.payment_info_header}> Bank Account </div>
                                    <div className={style.Account_Info}>
                                        Account Number: 31063337
                                    </div>
                                    <div className={style.Account_Info}>
                                        Sort Code: 09-01-29
                                    </div>
                                </div>
                            </div>
                        </b>

                        <div className={style.modal_text}>
                            <span>
                                We truly appreciate your help. <br />
                                If you would like to keep track of how we use your donation, <br />
                                we will happily keep you in the loop! Please send an empty e-mail  <br />
                                to <b ><a className={style.email_link} href="mailto:librarycatseditorial@gmail.com">librarycatseditorial@gmail.com</a></b> with the line  <br />
                                <b>Keep track of donation</b> and you will be kept informed. <br />
                            </span>

                        </div>

             
                        <div className={style.policies}>
                            <div className={style.modal_text}> 
                                <span>
                                    learn how Paypal keeps your transfer secure at <a className={style.policy_link} href="https://www.paypal.com/">paypal.com</a> <br />
                                    and how we use your donations at <NavLink className={style.policy_link} to = "/terms-and-conditions">Policies</NavLink>
                                </span>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonateModal;
