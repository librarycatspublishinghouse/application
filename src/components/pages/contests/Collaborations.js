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
          Contests
          <div className= {style.contest_list}>
              <li className={style.contests_list_item}> 
                <a  className={style.link} href='https://www.instagram.com/p/CZezLpkMJjZ/?img_index=1' target='_blank'> STWxUOS Contest</a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/CbFIT06s549/?img_index=1' target='_blank'> STWxUCD Contest </a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/Cob8XyRMMuK/?img_index=1' target='_blank'> LibraryCatsxB&FC Poetry Contest </a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/Cob8jadMwbC/?img_index=1' target='_blank'> LibraryCatsxB&FC Short Fiction Contest </a>
              </li>
              <li className={style.contests_list_item}>
                <a  className={style.link} href='https://www.instagram.com/p/Cz32QKYC-N_/' target='_blank'> KCL Creative Writing Society Collaboration </a>
              </li>
          </div>
        </div>

    </div>
    </div>
    );
}

export default Collaborations;