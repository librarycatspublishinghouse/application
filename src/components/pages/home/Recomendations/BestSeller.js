import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './BestSeller.module.css'
import Mockup from '../mockup/Mouckup';
import { Link } from 'react-router-dom';


function BestSeller(props) {

    const[books, setBooks] = useState([])
    const[size, setSize] = useState(0)


    const updateNumber = () => {
        if (window.innerWidth > 920){
            console.log("3")
            setSize(3)

        } else if (window.innerWidth > 640){
            console.log("2")
            setSize(2)
        } else{
            console.log("1")
            setSize(1)
        }
    }

    useEffect(()=>{
        async function fetchCards(){
            const req = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/publication/get-first-five-most-downloads`);
            console.log("Best seller response: ",req);
            var cardDicArray = [];
            var numberOfBooksShown = 3

            if (req.data.length < 3) {
                numberOfBooksShown = req.data.length;
            }
            
            for (var i = 0 ; i < numberOfBooksShown; i++){
                var cardDic = {};
                cardDic.id = req.data[i]._id;
                cardDic.thumbnailLink = req.data[i].thumbnailLink;
                cardDicArray.push(cardDic);
                

            }
            console.log("card dic: ",cardDicArray)
            await setBooks(cardDicArray);
            
        }
        updateNumber();
        console.log("called");
        fetchCards();
        window.addEventListener("resize",updateNumber);
        return() => window.removeEventListener("resize", updateNumber)
    },[props.dontInclude]);




  
 

    return (
        <div>
    
            <div className= {style.books_container}>
                
                {
                    books.map(book => {
                        return(
                            <div className= {style.mockup_item}>
                                <Link to = {"/publication/"+book.id}  >
                                    <Mockup thumbnail_link = {book.thumbnailLink}/>
                                </Link>
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
    );
}

export default BestSeller;