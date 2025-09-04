import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Books.module.css'
import { Link } from 'react-router-dom'
import { IBook, Books as BookData } from '../../../data/BookData.ts';
import { authorData } from '../../../data/AuthorData.ts';


const initialValues = {
    input_text: "",
};
function Books(props) {

    const [books, setBooks] = useState<IEnrichedBookData[]>([])
    const [ isLoading, setLoading] = useState<boolean>(true);
    const [sort_type, setSort] = useState<string>("relevance");
    const [search_query, setQuery] = useState<any>(initialValues);

    interface IEnrichedBookData extends IBook {
        authorNames?: string;
    }

    useEffect(()=>{
        async function fetchCards(){
            setLoading(true);

            const EnrichedBookData = BookData.map(b => {
                const author = authorData.find( ( author ) => author.id === b.authorID );
                const enrichedBook: IEnrichedBookData = b;
                if( author )
                    enrichedBook.authorNames = author?.firstName + " " + author?.otherNames; 
                 return( enrichedBook )
            });


            setBooks( EnrichedBookData );
            setLoading(false);
            
        }
       
        console.log("called");
        fetchCards();
    },[props.dontInclude,sort_type]);


   
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

//    const handleSubmit = (e) => {
//        console.log(search_query.search_term , sort_type)
//        searchPage(search_query.search_term,sort_type, 1 )

//    }
//    const searchPage = async(search , sort, page_number) => {
//         if (search === ""){
//             search = null;
//         }
//         //update books
//         setLoading(true)
//         const req = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/get-books-query`,{search_query: search, page_number: page_number, sort_by: sort});
//         console.log(req);
//         var cardDicArray = [];


//         for (var i = 0 ; i < req.data.length; i++){

//             var cardDic = {};
//             cardDic.id = req.data[i]._id;
//             cardDic.bookName = req.data[i].title;
//             const authorNames =  await getAuthor(req.data[i].authorID) || null;
//             console.log("author name: ",authorNames);
//             cardDic.authorName = authorNames;
//             cardDic.thumbnailLink = req.data[i].thumbnailLink;
//             cardDicArray.push(cardDic);

//         }
//         console.log("card dic: ",cardDicArray)
//         setLoading(false);
//         await setBooks(cardDicArray);

//    }


   const renderBookCards = () => {

        console.log("cards: ", books)

        return(
        
            <div className= {styles.cards_container_container}>
                            

            {/* <div className= {styles.search_container}>
                <div className={styles.inner_container}>
                    <div className={styles.form}>
                        <input 
                            className = {styles.textbox}
                            type="search"
                            id = "search_term"
                            name = "search_term"
                            value = {search_query.input_text}
                            onChange = {handleInputChange}
                            placeholder = "">
                            

                        </input>
                    </div>
                    <div >
                        <select className={styles.dopdown} value = {sort_type} onChange = {handleChangeSelect} id="sort_by">
                            <option value="relevance">relevance</option>
                            <option value="price">price</option>
                            <option value="upload_date">upload date</option>
                            
                        </select>
                    </div>
                    <div className={styles.submit_button}>
                        <button className = {styles.submit_butn} onClick = {handleSubmit} >
                            SEARCH
                        </button>
                    </div>
                </div>
            </div> */}

            <div className= {styles.cards_container}>
                
                
                {!books.length ? ( <div>No books found</div> ) :
                ( books.map((card, index) => {
                
                    return(
            

                        <div className={styles.card} key = {index}>
                <Link className = {styles.link} to = {"/publication/"+card.id}  >
                <div className= {styles.card_inner}>
                    <div className= {styles.image_container}>
                        <img className = {styles.image_item} src={card.thumbnailLink} alt=""/> 
                    </div>
                    <div className = {styles.info_container}>
                        { card.authorID && (
                            <div className = {styles.author_container}>
                                {card.authorNames}
                            </div>
                        ) }
                        <div className= {styles.bookname_container}>
                            {card.title}
                        </div>

                    </div>
                </div>
                </Link>
            </div>   

                    )
                }))}
            </div>
            </div>
        )
    }


    return (


        <div className={styles.books}>
            {isLoading ? (
                <></> // Maybe add a spinner
            ) : (
                renderBookCards()
            )}
        </div >
    );
}

export default Books;