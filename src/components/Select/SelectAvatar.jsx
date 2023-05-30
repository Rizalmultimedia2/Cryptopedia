import Image from "next/image";
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
          required
          onClick={(e) =>
            setAvatar((prev) => ({
              ...prev,
              avatar: e.target.value,
            }))
          }
        />
        <label className="select-avatar flex-center" htmlFor={value}>
          <Image
            src={`/avatar/${value}.svg`}
            height={55}
            width={55}
            className="object-cover"
            alt={value}
          />
        </label>
      </li>
    </>
  );
}

export default SelectAvatar;
