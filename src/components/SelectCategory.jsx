import React from "react";

function SelectCategory({ value, label, style }) {
  return (
    <>
      <li>
        <input
          type="radio"
          name="kategori"
          id={value}
          value={value}
          className="peer sr-only"
        />
        <label
          className={`select-${style} first-letter:capitalize`}
          for={value}
        >
          {label}
        </label>
      </li>
    </>
  );
}

export default SelectCategory;
