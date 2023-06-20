import React, { useState } from "react";

function SelectCategory({ style, post, filter }) {
  const [selected, setSelected] = useState("semua");

  const handleChange = (event) => {
    // console.log(event.target.value);
    setSelected(event.target.value);
    const value = event.target.value;
    let num;

    switch (value) {
      case "semua":
        num = 0;
        break;
      case "tren":
      case "tren1":
        num = 1;
        break;
      case "teknikal":
      case "teknikal1":
        num = 2;
        break;
      case "general":
      case "general1":
        num = 3;
        break;
      case "mypost":
        num = 4;
        break;
      default:
        num = 0;
        break;
    }

    filter(num);
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
            value: "tren1",
            label: "Tren",
          },
          {
            value: "teknikal1",
            label: "Teknikal & Fundamental",
          },
          {
            value: "general1",
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
            required
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
