import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Recomendations.module.css'
import Card from './Card/Card';
import { FaBusinessTime } from 'react-icons/fa';



function BestSeller(props) {

    const[Cards, setCards] = useState([])
    const[Author, setAuthor] = useState([])

    useEffect(()=>{
        async function fetchCards(){
            const req = await axios.get('/api/publication//get-first-five-most-downloads');
            console.log(req);
            var cardDicArray = [];
            var max = req.data.length
            //if max > 5 then set max to 5
            if (max > 5){
                max = 5;
            }
            
            for (var i = 0 ; i < max; i++){
                if ((props.dontInclude === null) || (props.dontInclude != req.data[i]._id)) {
                    var cardDic = {};
                    cardDic.id = req.data[i]._id;
                    cardDic.bookName = req.data[i].title;
                    const authorNames =  await getAuthor(req.data[i].authorID);
                    console.log("author name: ",authorNames);
                    cardDic.authorName = authorNames;
                    cardDic.thumbnailLink = req.data[i].thumbnailLink;
                    cardDicArray.push(cardDic);
                }
            
                else{
                    if (props.dontInclude != null){
                        if(max++ > req.data.length){
                            max++;
                        }
                    }
                }
            }
            console.log("card dic: ",cardDicArray)
            await setCards(cardDicArray);
            
        }
       
        console.log("called");
        fetchCards();
    },[props.dontInclude]);


    async function getAuthor(id) {
        console.log("getting author: ",id);
        const filt = "hey";
        const req = await axios.get("/api/author/get-authors/"+id);
        console.log("author response: ",req);
        return (req.data[0].firstName +" "+ req.data[0].otherNames);
    }

   const handleClick = (e) => {

       console.log("clicked")
       postToDB();
   }
   const postToDB = async() => {
       const response = await axios.post('/api/publication/create');
   }

    return (
        <div>
            {/*
        <div className={style.Recomendations_inner}>
            <button onClick = {handleClick}>
                bigggg button
            </button>
        </div>
    */}
        <div className= {style.cards_container}>
            
            {Cards.map((card) => {
               
                return(
                <Card className = {style.card_item} authorname = {card.authorName} bookname = {card.bookName} imageLink = {card.thumbnailLink} publicationID = {card.id}/>
                )
            })}
        </div>
        </div>
    );
}

export default BestSeller;