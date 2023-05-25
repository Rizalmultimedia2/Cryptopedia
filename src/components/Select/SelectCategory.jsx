import React, { useState } from "react";

function SelectCategory({ style, post }) {
  const [selected, setSelected] = useState("semua");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const data =
    post == 0
      ? [
          {
            value: "semua",
            label: "Semua",
          },
          {
            value: "tren",
            label: "Tren",
          },
          {
            value: "teknikal",
            label: "Teknikal & Fundamental",
          },
          {
            value: "general",
            label: "General",
          },
          {
            value: "mypost",
            label: "Postingan Saya",
          },
        ]
      : [
          {
            value: "tren",
            label: "Tren",
          },
          {
            value: "teknikal",
            label: "Teknikal & Fundamental",
          },
          {
            value: "general",
            label: "General",
          },
        ];

  return (
    <>
      {data.map((item, index) => (
        <li key={index}>
          <input
            type="radio"
            name="kategori"
            id={item.value}
            value={item.value}
            checked={selected === `${item.value}`}
            onChange={handleChange}
            className="peer sr-only"
          />
          <label className={`select-${style}`} htmlFor={item.value}>
            {item.label}
          </label>
        </li>
      ))}
    </>
  );
}

export default SelectCategory;
