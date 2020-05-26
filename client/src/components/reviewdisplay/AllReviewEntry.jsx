import React, { useState } from 'react';
import ReviewEntries from './ReviewEntries.jsx';

export default function AllReviewEntry({ reviewData, reviewLimit }) {

  return (

    <div className="all-review-entry-container">
        <ReviewEntries reviews={reviewData}  reviewLimit={reviewLimit}/>
    </div>
  );
}
