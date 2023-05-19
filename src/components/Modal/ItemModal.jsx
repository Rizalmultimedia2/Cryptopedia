import React from "react";

function ItemModal({ id, type, placeholder, label }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label for={id} className="">
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="form-input"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default ItemModal;
