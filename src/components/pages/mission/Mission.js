import React from 'react';
import ComingSoon from '../../ComingSoon/ComingSoon';
import style from  './Mission.module.css';


function Mission() {
  return (
    <div className= {style.mission}>
      <div className=  {style.mission_container}>
        <div className= { style.mission_title}>
          OUR GOAL 
        </div>

        <div className={style.mission_info_container}>
        <img className = {style.white_box_image} src="pictures/mission/white-box.png"  alt=""/> 
          <div className={style.mission_info}>
            <p>
              Our main goal is to promote the activities of writing and reading.  
            </p>
            <p>
              By providing the opportunity to have their manuscripts published professionally we are motivating inexperienced, first-time, amateur writers to finally take the decisive step to write and have their manuscripts read by other people.  
            </p>
            <p>
              We understand that writing a book is a complex and arduous process. By providing help, editing services, constructive feedback, and a platform from where to spread the writer’s work, we hope to incentivise the beautiful art of writing. 
            </p>
            <p>
              By inviting people to write we are also expanding the act of reading; in order to write you have to read. Good writers are normally excellent and passionate readers. These two acts complement each other in a way that increasing one should also lead to an increase in the other.  
            </p>
  
          </div>

        </div>
      </div>


        
    </div>
    );
}

export default Mission;