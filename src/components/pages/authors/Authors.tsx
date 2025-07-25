import React, { useEffect, useState } from 'react';
import styles from './Authors.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { authorData, IAuthor } from '../../../data/AuthorData.ts';


// Separate component for individual author card
const AuthorCard = ({ author }) => (
  <div className={styles.author_item}>
    <div className={styles.author_image}>
      <img 
        className={styles.author_image_item} 
        src={`${author.image}`} 
        alt={`${author.firstName} ${author.otherNames}`}
      /> 
      <h2 className={styles.author_name}>
        {author.firstName} {author.otherNames}
      </h2>
    </div>
    <Link to={`/author/${author.id}`} className={styles.author_link}>
      <div className={styles.author_info_container}>
        <p>{author.info}</p>
      </div>
    </Link>
  </div>
);
// Main Authors component
function Authors() {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const formattedAuthors = authorData.map(author => ({
          id: author.id,
          firstName: author.firstName,
          otherNames: author.otherNames,
          info: author.info,
          image: author.image
        }));
        
        setAuthors(formattedAuthors);
      } catch (err) {
        setError('Failed to fetch authors. Please try again later.');
        console.error('Error fetching authors:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading authors...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.authors}>
      <div className={styles.authors_grid}>
        {authors.map(author => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
}

export default Authors;