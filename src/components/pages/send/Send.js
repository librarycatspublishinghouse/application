import React from 'react';
import style from  './Send.module.css';


function Send() {
  return (
    <div className= {style.send}>
      <div className = {style.title}>
      SEND US YOUR MANUSCRIPT
      </div>
      <div className = {style.undedrline}>
        {/* TODO */}
      </div>
      <div className = {style.reasons_container}>
        <div className = {style.reasons_title}>
        Reasons to send your manuscript over
        </div>
        <div className = {style.reasons_list}>
          <li>
            <ul className = {style.list_item}>
            It is completely free!
            </ul>
            <ul className = {style.list_item}>
            We read all the manuscripts
            </ul>
            <ul className = {style.list_item}>
            We offer one-to-one feedback sessions
            </ul>
            <ul className = {style.list_item}>
            We always provide constructive feedback
            </ul>
            <ul className = {style.list_item}>
            It is your chance to get published! Send us your manuscript!
            </ul>
          </li>
        </div>
      </div>
    <div className = {style.share_title}>
    Share with us here:
    </div>
    <div className = {style.share_link}>
      <a className  = {style.share_link_item} 
      href = "https://drive.google.com/drive/folders/1ks8O0zIi7s8sqypEMzI7JD9QgJBkFTvE?usp=sharing">
        https://drive.google.com/drive/folders/1ks8O0zIi7s8sqypEMzI7JD9QgJBkFTvE?usp=sharing
      </a>

    </div>
    <div className = {style.share_info}>
    Please add your name and email to the manuscript
    </div>

    </div>
    );
}

export default Send;