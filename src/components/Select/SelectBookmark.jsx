import React, { useState } from "react";

function SelectBookmark({ tabel }) {
  const [selected, setSelected] = useState("cryptosharing");

  const handleChange = (event) => {
    const item = event.target.value;
    setSelected(item);
    if (item == "cryptosharing") {
      tabel("Sharing");
    } else if (item == "crypto101") {
      tabel("Starting");
    }
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
      {data.map((item, index) => (
        <li key={index}>
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
            htmlFor={item.value}
          >
            {item.label}
          </label>
        </li>
      ))}
    </>
  );
}

export default SelectBookmark;
