import React from 'react';
import { NavLink } from 'react-router-dom';
import style from  './Collaborations.module.css';


function Collaborations() {
  return (
    <div className= {style.contests}>
      <div className= {style.contests_container}>
        <div className= {style.contests_title}>
          LIBRARY CATS 
        </ div>
        <div className= {style.underline}>
        </div>
        <div className= {style.contests_list_title}>
          Collaborations
          <div className= {style.contest_list}>
              <li className={style.contests_list_item}> 
                <a  className={style.link} href='https://www.instagram.com/p/C50-BTgu7Y1/' target='_blank' rel="noreferrer"> Swansea Creative Writing Society Open Submission</a>
              </li>
              <li className={style.contests_list_item}> 
                <a  className={style.link} href='https://www.instagram.com/p/C4-rY59uShI/' target='_blank' rel="noreferrer"> Creative Writing Society at the University of Huddersfield Open Submission</a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/C37637-CwdF/?img_index=1' target='_blank' rel="noreferrer"> Freestyle Writing Society at Glasgow Caledonian University Submission Window </a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/Cz32QKYC-N_/' target='_blank' rel="noreferrer"> KCL Creative Writing Society Collaboration </a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/Cob8jadMwbC/?img_index=1' target='_blank' rel="noreferrer"> LibraryCatsxB&FC Short Fiction Contest </a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/Cob8XyRMMuK/?img_index=1' target='_blank' rel="noreferrer"> LibraryCatsxB&FC Poetry Contest </a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/CbFIT06s549/?img_index=1' target='_blank' rel="noreferrer"> STWxUCD Contest </a>
              </li>          
              <li className={style.contests_list_item}> 
                <a  className={style.link} href='https://www.instagram.com/p/CZezLpkMJjZ/?img_index=1' target='_blank' rel="noreferrer"> STWxUOS Contest</a>
              </li>    
          </div>
        </div>

    </div>
    </div>
    );
}

export default Collaborations;