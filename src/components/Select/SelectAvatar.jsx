import React from "react";

function SelectAvatar({ value, setAvatar }) {
  return (
    <>
      <li>
        <input
          type="radio"
          name="avatar"
          id={value}
          value={value}
          className="peer sr-only"
          onClick={(e) =>
            setAvatar((prev) => ({
              ...prev,
              avatar: e.target.value,
            }))
          }
        />
        <label className={`select-avatar`} htmlFor={value}></label>
      </li>
    </>
  );
}

export default SelectAvatar;
