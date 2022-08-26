import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  function sanitize(type, value) {
    switch (type) {
      case "number":
        return Number(value) || 0;

      default:
        return value;
    }
  }

  const handleChange = (name, value, type) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: sanitize(type, value),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    handleChange(name, value, type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
