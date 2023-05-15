import React from "react";

function SelectAvatar({ value }) {
  return (
    <>
      <li>
        <input
          type="radio"
          name="avatar"
          id={value}
          value={value}
          className="peer sr-only"
        />
        <label className={`select-avatar`} for={value}></label>
      </li>
    </>
  );
}

export default SelectAvatar;
