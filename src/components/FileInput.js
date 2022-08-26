import { useEffect, useRef } from "react";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  useEffect(() => {
    console.log(inputRef);
  }, []);
  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
