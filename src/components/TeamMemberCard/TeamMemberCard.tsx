import React, { useEffect, useRef } from 'react';
import { TeamMember } from '../../data/teamMembers';
import styles from './TeamMemberCard.module.css';

interface TeamMemberCardProps {
  member: TeamMember;
  id: string;
  direction: 'left' | 'right';
  expanded: boolean;
  onToggleExpand: () => void;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  id,
  direction,
  expanded,
  onToggleExpand,
}) => {
  const {
    name,
    position,
    links,
    description,
    thumbnailImage,
    profileImage,
  } = member;

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderSocialLinks = () => (
    <div className={styles.socialLinks}>
      {links.map((link) => {
        const iconName = link.type;
        return (
          <a
            key={link.type}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title={link.type}
          >
            <img
              src={`/stwWebFrontend/pictures/${iconName}.webp`}
              alt={link.type}
              className={styles.socialIcon}
            />
            {expanded && (
              <span className={styles.socialLabel}>
                {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );

  return (
    <div 
      ref={cardRef}
      id={id}
      className={`${styles.card} ${direction === 'right' ? styles.right : ''}`}
      role="article"
      onClick={onToggleExpand}
    >
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <img 
            src={profileImage} 
            alt={`${name}'s profile`} 
            className={styles.profileImage}
            loading="lazy"
          />
        </div>
        
        <div 
          className={styles.info} 
          
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onToggleExpand();
            }
          }}
        >
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.position}>{position}</h4>
          {expanded && (
            <p className={styles.description}>
              {description}
            </p>
          )}
          {renderSocialLinks()}
        </div>

        <div className={styles.imageSection}>
          {expanded && thumbnailImage && (
            <img 
              src={thumbnailImage} 
              alt={`${name}'s book thumbnail`} 
              className={styles.bookThumbnail}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
}; 