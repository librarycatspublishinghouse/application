import React, { useEffect, useState } from 'react';
import style from './Recomendations.module.css'
import Card from './Card/Card';
import { Books, IBook } from '../../../../data/BookData';
import { authorData, IAuthor } from '../../../../data/AuthorData';

interface RecommendationsProps {
    dontInclude?: string | null;
}

interface CardData {
    id: string;
    bookName: string;
    authorName: string;
    thumbnailLink: string;
}

function Recomendations(props: RecommendationsProps): JSX.Element {

    const [Cards, setCards] = useState<CardData[]>([]);
    const [number, setNumber] = useState<number>(5);

    const updateNumber = (): void => {
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

    useEffect(() => {
        function fetchCards(): void {
            console.log("recommendations")
            
            const cardDicArray: CardData[] = [];
            let max = Books.length;
            
            // If max > 5 then set max to 5
            if (max > 5){
                max = 5;
            }
            
            for (let i = 0; i < max && cardDicArray.length < 5; i++){
                const book = Books[i];
                console.log(i)
                
                if ((props.dontInclude === null) || (props.dontInclude !== book.id)) {
                    const author = getAuthor(book.authorID);
                    const authorName = author ? `${author.firstName} ${author.otherNames}` : 'Unknown Author';
                    
                    const cardDic: CardData = {
                        id: book.id,
                        bookName: book.title,
                        authorName: authorName,
                        thumbnailLink: book.thumbnailLink
                    };
                    
                    cardDicArray.push(cardDic);
                } else {
                    console.log("dont include: ", props.dontInclude)
                    // Extend the search if we're excluding a book
                    if (props.dontInclude != null && max + 1 <= Books.length){
                        max++;
                    }
                }
            }
            
            console.log("card dic: ", cardDicArray)
            setCards(cardDicArray);
        }
        
        updateNumber();
        console.log("called");
        fetchCards();
        
        window.addEventListener("resize", updateNumber);
        return () => window.removeEventListener("resize", updateNumber)
    }, [props.dontInclude]);

    function getAuthor(id: string): IAuthor | undefined {
        return authorData.find(author => author.id === id);
    }

    const cardObject = (): JSX.Element[] => {
        if (number === 5){
            return Cards.map((card, i) => {
                return(
                    <Card 
                        key={`card-${i}`}
                        className={style.card_item} 
                        authorname={card.authorName} 
                        bookname={card.bookName} 
                        imageLink={card.thumbnailLink} 
                        publicationID={card.id}
                    />
                )
            });
        }
        else if (number < 5){
            return Cards.slice(0, number).map((card, i) => {
                return(
                    <Card 
                        key={`card-${i}`}
                        className={style.card_item} 
                        authorname={card.authorName} 
                        bookname={card.bookName} 
                        imageLink={card.thumbnailLink} 
                        publicationID={card.id}
                    />
                )
            });
        }
        return [];
    }

    return (
        <div>
            <div className={style.cards_container}>
                {cardObject()}
            </div>
        </div>
    );
}

export default Recomendations;