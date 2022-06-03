import React from 'react';
import { StyleSheetManager } from 'styled-components';
import style from './Team.module.css';


function Team() {
  return (
    <div className={style.team}>
        <div className = {style.team_title_container} >
            <div className = {style.team_title} >
                TEAM
            </div>
           
        </div>


        <div className = {style.team_member_block}>

            <div className = {style.leadership_title}>
                LEADERSHIP
            </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Marcos Echevarria
            </div>

            <div className = {style.member_role}>
            Founder & CEO
            </div>
            <div className = {style.member_info}>
            I am a final-year bachelor student at Loughborough University. I study Politics with Economics. I'm a bit of a books geek. My favourite book is Bomarzo by Manuel Mujica Lainez.
            </div>
        </div>


        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Pablo Echevarria  
            </div>

            <div className = {style.member_role}>
            Editor IN-CHIEF
            </div>
            <div className = {style.member_info}>
            I am an industrial engineer, loving work at Spread the Word. I couldn't decide which one is my favourite book between these two: Scoop by Evelyn Waugh, and Don Quixote by Miguel de Cervantes
            </div>
        </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Zori Nencheva            </div>

            <div className = {style.member_role}>
            Editor 
            </div>
            <div className = {style.member_info}>
            I am an A-Level student studying History, Spanish and English Literature. I love books, I always have, and if I had to choose my favourite book, it would be ‘Song of Achilles’ by Madeline Miller.
            </div>
        </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Neha Suryavanshi          
            </div>

            <div className = {style.member_role}>
            Editor 
            </div>
            <div className = {style.member_info}>
            I am from India. I am a multimedia journalism student from the University of Westminster. I am quite into current news, events, and politics as I am an aspiring journalist. My favourite book is 'Everybody Loves a Good Drought: Stories from India's Poorest Districts' by P. Sainath
            </div>
        </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Cristobal Echevarria             </div>

            <div className = {style.member_role}>
            Graphic Designer
            </div>
            <div className = {style.member_info}>
            I am a second-year graphic communication and illustration student at Loughborough University. I am very passionate about branding and animation. My favourite book is Zalacain the Adventurer by Pio Baroja.
            </div>
        </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Beatriz De Castro             </div>

            <div className = {style.member_role}>
            Media Rep
            </div>
            <div className = {style.member_info}>
            I am a second-year Economics and International Relations student at Lancaster University. My favourite book is Bad Karma by David Safier.
            </div>
        </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Chloe Chen             </div>

            <div className = {style.member_role}>
            Communication Rep 
            </div>
            <div className = {style.member_info}>
            I am a final year student studying Accounting and Finance at the University of Sussex. One of my favourite books is Selected Poems written by Pablo Neruda. The vintage poems in this book are amazing and it is full of romantic and touching feelings.
            </div>
        </div>

        </div>
    </div>
    );
}

export default Team;