import React from "react";

const ShowReview = ({ review }) => {
  const { Review } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-2xl">Review Text: {Review}</p>
      </div>
    </div>
  );
};

export default ShowReview;
