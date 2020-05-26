import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
export default function ReviewEntries({ reviews, reviewLimit }) {
 /* const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    setReviewData(reviews);
  }, [reviews]);
*/
  return (
    <div className="all-review-entry-container">
      {/*limits amount of reviews to whatever is set by reviewLimit state in parent,which is currently 8 */}
      {reviews.slice(0, reviewLimit).map((review, index) => (
        <Review review={review} key={index} />
      ))}
    </div>
  );
}
