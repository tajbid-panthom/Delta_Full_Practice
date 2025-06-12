import React, { useState } from "react";

const CommentsForm = () => {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 1,
  });
  let handleFormData = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  let handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: 1,
    });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleFormData}
            placeholder="Enter your user name"
          />
        </div>
        <div>
          <label htmlFor="remarks">Remarks</label>
          <textarea
            id="remarks"
            name="remarks"
            type="text"
            value={formData.remarks}
            onChange={handleFormData}
            placeholder="Enter your remarks"
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating">Ratings</label>
          <input
            id="rating"
            name="rating"
            type="number"
            min={1}
            max={5}
            value={formData.rating}
            onChange={handleFormData}
            style={{ width: "40px" }}
          />
        </div>
        <button>Add comment</button>
      </form>
    </div>
  );
};

export default CommentsForm;
