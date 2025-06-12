import React, { useState } from "react";

const Form = () => {
  let [formData, setFromData] = useState({
    fullName: "",
    username: "",
  });
  //   const handleFullNameChange = (e) => {
  //     setFullName(e.target.value);
  //   };
  //   const handleUsernameChange = (e) => {
  //     setUsername(e.target.value);
  //   };
  const handleFormChange = (e) => {
    setFromData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFromData({
      fullName: "",
      username: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            id="fullname"
            value={formData.fullName}
            onChange={handleFormChange}
            name="fullName"
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your full name"
            id="username"
            value={formData.username}
            onChange={handleFormChange}
            name="username"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
