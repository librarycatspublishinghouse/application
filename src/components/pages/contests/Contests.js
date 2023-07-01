import React from 'react';
import { NavLink } from 'react-router-dom';
import style from  './Contests.module.css';


function Contests() {
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
              <li className={style.contests_list_item}>STWxUOS Contest</li>
              <li className={style.contests_list_item}>STWxUCD Contest</li>
          </div>
        </div>

        <NavLink className={style.link} to = "/contests/showcase">
          <div className= {style.contests_button}>
            Click and join us
          </div>
        </NavLink>
    </div>
    </div>
    );
}

export default Contests;