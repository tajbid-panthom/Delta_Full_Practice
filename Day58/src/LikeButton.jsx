import { useState } from "react";

const LikeButton = () => {
  let [isLike, setIsLike] = useState(false);
  const handleClick = () => {
    setIsLike(!isLike);
  };

  return (
    <div>
      <h1>Like button activity</h1>
      <p onClick={handleClick}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
};

export default LikeButton;
