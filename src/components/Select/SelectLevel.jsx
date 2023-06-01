import React, { useState } from "react";

function SelectLevel({ style, filter, post }) {
  const [selected, setSelected] = useState("semua");

  const handleChange = (event) => {
    setSelected(event.target.value);
    const value = event.target.value;
    let num;

    switch (value) {
      case "semua":
        num = 0;
        break;
      case "pemula":
        num = 1;
        break;
      case "menengah":
        num = 2;
        break;
      case "ahli":
        num = 3;
        break;
      default:
        num = 0;
        break;
    }

    filter(num);
  };

  const data =
    post == 1
      ? [
          {
            value: "pemula",
            label: "Pemula",
          },
          {
            value: "menengah",
            label: "Menengah",
          },
          {
            value: "ahli",
            label: "Ahli",
          },
        ]
      : [
          {
            value: "semua",
            label: "Semua",
          },
          {
            value: "pemula",
            label: "Pemula",
          },
          {
            value: "menengah",
            label: "Menengah",
          },
          {
            value: "ahli",
            label: "Ahli",
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

export default SelectLevel;
