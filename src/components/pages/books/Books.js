import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Books.module.css'
import { Link } from 'react-router-dom'


const initialValues = {
    input_text: "",
};
function Books(props) {

    const[Cards, setCards] = useState([])
    const [sort_type, setSort] = useState("relevance");
    const [search_query, setQuery] = useState(initialValues);

    useEffect(()=>{
        async function fetchCards(){
            const req = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/get-books-query`,{search_query: search_query.input_text, page_number: 1, sort_by: sort_type});
            console.log("fetch books: ",req);
            var cardDicArray = [];
         
            
            for (var i = 0 ; i < req.data.length; i++){
                
                    var cardDic = {};
                    cardDic.id = req.data[i]._id;
                    cardDic.bookName = req.data[i].title;
                    const authorNames = "";
                    if (req.data[i]?.authorID) {
                        authorNames = await getAuthor(req.data[i].authorID);
                    }

                    console.log("author name: ",authorNames);
                    cardDic.authorName = authorNames;
                    cardDic.thumbnailLink = req.data[i].thumbnailLink;
                    cardDicArray.push(cardDic);
               
            }
            console.log("card dic: ",cardDicArray)
            await setCards(cardDicArray);
            
        }
       
        console.log("called");
        fetchCards();
    },[props.dontInclude,sort_type]);


    async function getAuthor(id) {
        console.log("getting author: ",id);
    
        const req = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/author/get-authors/`+id);
        console.log("author response: ",req);
        return (req.data[0].firstName +" "+ req.data[0].otherNames);
    } 
   
   
   const handleInputChange = (e) => {
       const { name, value } = e.target;
       setQuery({
           ...search_query.input_text,
           [name] : value,
       });
       console.log(search_query)
   };

   const handleChangeSelect = (e) => {
       setSort(e.target.value);
    
   }

   const handleSubmit = (e) => {
       console.log(search_query.search_term , sort_type)
       searchPage(search_query.search_term,sort_type, 1 )

   }
   const searchPage = async(search , sort, page_number) => {
        if (search === ""){
            search = null;
        }
        //update books
        const req = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/get-books-query`,{search_query: search, page_number: page_number, sort_by: sort});
        console.log(req);
        var cardDicArray = [];


        for (var i = 0 ; i < req.data.length; i++){

            var cardDic = {};
            cardDic.id = req.data[i]._id;
            cardDic.bookName = req.data[i].title;
            const authorNames =  await getAuthor(req.data[i].authorID) || null;
            console.log("author name: ",authorNames);
            cardDic.authorName = authorNames;
            cardDic.thumbnailLink = req.data[i].thumbnailLink;
            cardDicArray.push(cardDic);

        }
        console.log("card dic: ",cardDicArray)
        await setCards(cardDicArray);

   }

    return (

        <>
        

        <div lassName= {style.cards_container_container}>

        <div className= {style.search_container}>
            <div className={style.inner_container}>
            <div className={style.form}>
                <input 
                    className = {style.textbox}
                    type="search"
                    id = "search_term"
                    name = "search_term"
                    value = {search_query.input_text}
                    onChange = {handleInputChange}
                    placeholder = "">
                    

                </input>
            </div>
            <div >
                <select className={style.dopdown} value = {sort_type} onChange = {handleChangeSelect} id="sort_by">
                    <option value="relevance">relevance</option>
                    <option value="price">price</option>
                    <option value="upload_date">upload date</option>
                    
                </select>
            </div>
            <div className={style.submit_button}>
                <button className = {style.submit_butn} onClick = {handleSubmit} >
                    SEARCH
                </button>
            </div>
        </div>
        </div>
        <div className= {style.cards_container}>
            
            {Cards.map((card, index) => {
               
                return(
        

                      <div className={style.card} key = {index}>
            <Link className = {style.link} to = {"/publication/"+card.id}  >
            <div className= {style.card_inner}>
                <div className= {style.image_container}>
                    <img className = {style.image_item} src={`${process.env.REACT_APP_BACKEND_URL}`+card.thumbnailLink} alt=""/> 
                </div>
                <div className = {style.info_container}>
                    
                    <div className = {style.author_container}>
                        {card.authorName}
                    </div>
                    <div className= {style.bookname_container}>
                        {card.bookName}
                    </div>
    
                </div>
            </div>
            </Link>
        </div>   

                )
            })}
        </div>
        </div>
        </ >
    );
}

export default Books;