import React from "react";

function InputForm({ id, type, placeholder }) {
  return (
    <>
      <label for={id} className="sr-only"></label>
      <input
        type={type}
        id={id}
        className="form-input"
        placeholder={placeholder}
      />
    </>
  );
}

export default InputForm;
