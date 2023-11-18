import React from "react";
import "./Review.scss";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const ReviewComments = () => {
  return (
    <>
      <div className="reviews">
        <div className="review">
          <div className="customer">
            <IoPersonCircleOutline className="icons" />
            <div className="comment">
              <span>fr5rd081ek</span>
              <div className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="time">2023-03-21 09:24</p>
              <p className="text-commnet">sam pham tot</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewComments;
