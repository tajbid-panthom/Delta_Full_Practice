import React from "react";
const formHandleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted");
};
const Form = () => {
  return (
    <form onSubmit={formHandleSubmit}>
      <input type="text" placeholder="write something" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
