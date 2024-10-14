import React, { useState } from 'react';
import './StarRating.css';

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 3,
  onRatingChange,
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  
  const handleStarClick = (index: number) => {
    const newRating = index + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(index)}
        >
        ★        
        </span>
      ))}
    </div>
  );
};

export default StarRating;