import React, { useState } from "react";

function SelectBookmark() {
  const [selected, setSelected] = useState("cryptosharing");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const data = [
    {
      value: "cryptosharing",
      label: "Crypto Sharing",
    },
    {
      value: "crypto101",
      label: "Crypto 101",
    },
  ];

  return (
    <>
      {data.map((item) => (
        <li>
          <input
            type="radio"
            name="bookmark"
            id={item.value}
            value={item.value}
            checked={selected === `${item.value}`}
            onChange={handleChange}
            className="peer sr-only"
          />
          <label
            className="cursor-pointer peer-checked:text-primary-1 font-semibold"
            for={item.value}
          >
            {item.label}
          </label>
        </li>
      ))}
    </>
  );
}

export default SelectBookmark;
