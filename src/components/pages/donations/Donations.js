import React from 'react';
import { NavLink } from 'react-router-dom';
import DonateModal from './donateModal/donateModal';
import style from  './Donations.module.css';


function Donations() {

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleDonateClick = (e) => {
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  return (
    <div className= {style.donations}>
      { modalOpen && ( <DonateModal closeModal={handleModalClose}/> ) }
      <div className= {style.donations_container}>

        <div className={style.info_container}>
          <div className= {style.donations_title}>
            HELP US 
          </ div>
          <div className= {style.donations_title_highlight}>
            <div className={style.donations_title } >
              GROW OUR PROJECT
            </div>
          </div>
          <div className= {style.info_description}>
            Your donation will help us cover all the costs associated with creating a professional book.
          </div>
        </div>


        <div className= {style.donate_button_container}>
          <button className= {style.donate_button} onClick={handleDonateClick}>
            DONATE NOW
          </button>
        </div>

        <div className= {style.policy_text}>
          Library Cats Editorial is committed to protecting your privacy.
          <br />
          Your payment details will not be shared.
          <br />
          Check out our <NavLink className={style.link} to = "/terms-and-conditions">privacy policy </NavLink> and <NavLink className={style.link} to = "/terms-and-conditions">terms and conditions</NavLink>.

           </div>
      </div>
    </div>
    );
}

export default Donations;