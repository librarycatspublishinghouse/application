import React, { useEffect } from 'react';
import styles from './Author.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { authorData, IAuthor } from '../../../data/AuthorData.ts';

function Author() {
  const params = useParams();
  const [author, setAuthor] = useState<IAuthor|undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const filteredAuthors: IAuthor[] = authorData.filter( (author: IAuthor) => author.id == params.id )
        if( filteredAuthors.length === 0 ) 
          throw( "Unable to load Authors");

        setAuthor(filteredAuthors[0]);
      } catch (err) {
        setError('Failed to load author data');
        console.error('Error fetching author:', err);
      } finally {
        setIsLoading(false);
      }
    }

    window.scrollTo(0, 0);
    fetchData();
  }, [params.id]);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if( author )
  {
    return ( 
      <div className={styles.author} id="top">
        {author.firstName && (
          <div className={styles.container}>
            <div className={styles.authorCard}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.authorImage}
                  src={`${author.image}`}
                  alt={`${author.firstName} ${author.otherNames}`}
                />
              </div>
              
              <div className={styles.authorContent}>
                <h1 className={styles.authorName}>
                  {author.firstName} {author.otherNames}
                </h1>
                <div className={styles.authorBio}>
                  {author.info}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  else {
    return( 
    <>
    </>
    )
  }
  
}

export default Author;