import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Recomendations.module.css'
import Card from './Card/Card';



function Recomendations(props) {

    const[Cards, setCards] = useState([])

    const[number, setNumber] = useState(5)


    const updateNumber = () => {
        if (window.innerWidth > 1500){
            console.log("5")
            setNumber(5)
        }
        else if (window.innerWidth > 1210){
            console.log("4")
            setNumber(4)
            
        } else if (window.innerWidth > 920){
            console.log("3")
            setNumber(3)

        } else if (window.innerWidth > 640){
            console.log("2")
            setNumber(2)
        } else{
            console.log("1")
            setNumber(1)
        }
    }

    useEffect(()=>{


        async function fetchCards(){
            console.log("recomendations")
            const req = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/publication/get-all`);
            console.log("recomendations response: ",req);
            console.log("recomendations dont include: ", props.dontInclude)
            var cardDicArray = [];
            var max = req.data.length
            //if max > 5 then set max to 5
            if (max > 5){
                max = 5;
            }
            
            for (var i = 0 ; i < max; i++){
                console.log(i)
                if ((props.dontInclude === null) || (props.dontInclude !== req.data[i]._id)) {
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
                    console.log("dont include: ",props.dontInclude)
                    if (props.dontInclude != null){
                        if(max + 1  <= req.data.length){
                            max++;
                        }
                    }
                }
            }
            console.log("card dic: ",cardDicArray)
            await setCards(cardDicArray);
            
        }
        updateNumber();
        console.log("called");
        fetchCards();
        window.addEventListener("resize",updateNumber);
        return() => window.removeEventListener("resize", updateNumber)
    },[props.dontInclude]);


    async function getAuthor(id) {

        const req = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/author/get-authors/`+id);
        console.log("author response: ",req);
        return (req.data[0].firstName +" "+ req.data[0].otherNames);
    }



   const cardObject = () => {
       if (number === 5){
            return(
                Cards.map((card, i = 0) => {
                    return(
                        <Card className = {style.card_item} authorname = {card.authorName} bookname = {card.bookName} imageLink = {card.thumbnailLink} publicationID = {card.id}/>
                    )
                
                })
           )
       }
       else if (number < 5){
           return(Cards.map((card, i=0) => {
                if (i < number){
                    return(
                        
                        <Card className = {style.card_item} authorname = {card.authorName} bookname = {card.bookName} imageLink = {card.thumbnailLink} publicationID = {card.id}/>
                        
                    )
                }
                return(<></>)
        
            })
    
                


       )
        /*<Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions1} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
                
                
                
                >
                
     
                    
                        {
                            Cards.map((card) => {
                                return(
                        
                                    <Card className = {style.card_item} authorname = {card.authorName} bookname = {card.bookName} imageLink = {card.thumbnailLink} publicationID = {card.id}/>
                                    
                                    )
                            
                                })
            
                        }

                    </Flickity> */
                    
           
                    
             
       }
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


             {  cardObject()
                 }
        </div>
        </div>
    );
}

export default Recomendations;