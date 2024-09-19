import React from 'react';
import styles from './EventCard.module.css'; // CSS 모듈 import
import FavoriteIcon from '@mui/icons-material/Favorite'; // 하트 아이콘 import
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // 시계 아이콘 import
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'; // 티켓 아이콘 import

const EventCard = ({ event }) => {
  const { title, description, startTime, ticketsLeft, location, likes, coverImageUrl } = event;

  // 현재 시간과 이벤트 시작 시간의 차이를 계산
  const timeDiff = new Date(startTime).getTime() - new Date().getTime();
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const timeRemaining = hoursDiff > 0 ? `${hoursDiff} hours later` : `${minutesDiff} minutes later`;

  return (
    <div className={styles.cardContainer}>
      {/* 카드 이미지 */}
      <img src={coverImageUrl} alt={title} className={styles.cardImage} onError={(e) => e.target.src = "default-image-url"} />

      {/* 좋아요 버튼 */}
      <button className={styles.likeButton}>
        <FavoriteIcon />
        <span>{likes}</span>
      </button>

      {/* 마우스 오버 시 보여질 오버레이 */}
      <div className={styles.cardOverlay}>
        <div className={styles.ticketInfo}>
          <p>{location}</p>
        </div>
      </div>

      {/* 카드 내용 */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>

      {/* 카드 하단 정보 */}
      <div className={styles.cardFooter}>
        <span>
          <AccessTimeIcon className={styles.icon} />
          <span>{timeRemaining}</span>
        </span>
        <span>
          <ConfirmationNumberIcon className={styles.icon} />
          <span>{ticketsLeft}</span>
        </span>
      </div>
    </div>
  );
};

export default EventCard;