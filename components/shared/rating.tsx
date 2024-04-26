import { Star } from 'lucide-react';
import React from 'react';

const Rating = ({ rating, customers }: {rating: number, customers: any}) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const unfilledStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  const renderFilledStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<Star key={i} className="fas fa-star filled w-5 h-5 fill-yellow-400 text-yellow-400 "/>);
    }
    return stars;
  };

  const renderHalfStar = () => {
    return hasHalfStar ? <Star className="fas fa-star-half-alt filled w-5 h-5 fill-yellow-400 text-yellow-400"/> : null;
  };

  const renderUnfilledStars = () => {
    const stars = [];
    for (let i = 0; i < unfilledStars; i++) {
      stars.push(<Star key={filledStars + i} className="far fa-star w-5 h-5 text-gray-400"/>);
    }
    return stars;
  };

  return (
    <div className='flex justify-start item-center gap-1'>
    <div className="rating flex justify-center items-center gap-1">
      {renderFilledStars()}
      {renderHalfStar()}
      {renderUnfilledStars()}
    </div>
    <h1 className='text-sm'>by {customers} customers</h1>
    </div>
  );
};

export default Rating;
