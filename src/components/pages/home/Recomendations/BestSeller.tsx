import React, { useEffect, useState } from 'react';
import style from './BestSeller.module.css'
import Mockup from '../mockup/Mockup';
import { Link } from 'react-router-dom';
import { Books, IBook } from '../../../../data/BookData';

interface BestSellerProps {
    dontInclude?: string | null;
}

interface BookData {
    id: string;
    thumbnailLink: string;
}

function BestSeller(props: BestSellerProps): JSX.Element {

    const [books, setBooks] = useState<BookData[]>([]);
    const [size, setSize] = useState<number>(0);

    const updateNumber = (): void => {
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

    useEffect(() => {
        function fetchCards(): void {
            // Sort books by downloads in descending order and take first 5
            const sortedBooks = [...Books].sort((a, b) => b.downloads - a.downloads);
            console.log("Best seller response: ", sortedBooks);
            
            const cardDicArray: BookData[] = [];
            const numberOfBooksShown = Math.min(3, sortedBooks.length);

            for (let i = 0; i < numberOfBooksShown; i++){
                const book = sortedBooks[i];
                const cardDic: BookData = {
                    id: book.id,
                    thumbnailLink: book.thumbnailLink
                };
                cardDicArray.push(cardDic);
            }
            
            console.log("card dic: ", cardDicArray)
            setBooks(cardDicArray);
        }
        
        updateNumber();
        console.log("called");
        fetchCards();
        
        window.addEventListener("resize", updateNumber);
        return () => window.removeEventListener("resize", updateNumber)
    }, [props.dontInclude]);

    return (
        <div>
            <div className={style.books_container}>
                {
                    books.map((book, index) => {
                        return(
                            <div key={`book-${index}`} className={style.mockup_item}>
                                <Link to={"/publication/" + book.id}>
                                    <Mockup thumbnail_link={book.thumbnailLink}/>
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