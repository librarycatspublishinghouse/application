import React, { useState } from 'react';
import styles from './Team.module.css';
import { TeamMemberCard } from '../../TeamMemberCard/TeamMemberCard.tsx';
import { currentTeamMembers, formerTeamMembers } from '../../../data/teamMembers.ts';

const Team: React.FC = () => {
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);
  const [expandMemberCards, setExpandMemberCards] = useState<boolean>(true);
  const [showFormerMembers, setShowFormerMembers] = useState(false);

  const handleMemberClick = (memberId: string) => {
    setExpandedMemberId(expandedMemberId === memberId ? null : memberId);
    setExpandMemberCards( !expandMemberCards)
    // Add this new code to scroll the clicked card into view
    setTimeout(() => {
      const clickedCard = document.getElementById(`team-member-${memberId}`);
      if (clickedCard) {
        clickedCard.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 50); // Small delay to ensure the card has expanded
  };

  const toggleFormerMembers = () => {
    setShowFormerMembers(!showFormerMembers);
  };

  return (
    <div className={styles.team}>
      <div className={styles.team_container}>
        <h1 className={styles.team_title}>Our Team</h1>

        <div className={styles.team_content}>
          {currentTeamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              id={`team-member-${member.id}`} // Add this line
              member={member}
              direction={index % 2 === 0 ? 'left' : 'right'}
              expanded={expandMemberCards}
              onToggleExpand={() => handleMemberClick(member.id)}
            />
          ))}
        </div>

        <button 
          className={styles.former_members_label}
          onClick={toggleFormerMembers}
          aria-expanded={showFormerMembers}
        >
          {showFormerMembers ? 'Hide Former Members' : 'Show Former Members'}
        </button>

        {showFormerMembers && (
          <div className={styles.former_members_container}>
            {formerTeamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                id={`team-member-${member.id}`} // Add this line
                member={member}
                direction={index % 2 === 0 ? 'left' : 'right'}
                expanded={expandedMemberId === member.id}
                onToggleExpand={() => handleMemberClick(member.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;