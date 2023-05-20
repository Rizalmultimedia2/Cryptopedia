import React, { useState } from "react";

function SelectLevel({ style }) {
  const [selected, setSelected] = useState("semua");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const data = [
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
      {data.map((item) => (
        <li>
          <input
            type="radio"
            name="kategori"
            id={item.value}
            value={item.value}
            checked={selected === `${item.value}`}
            onChange={handleChange}
            className="peer sr-only"
          />
          <label className={`select-${style}`} for={item.value}>
            {item.label}
          </label>
        </li>
      ))}
    </>
  );
}

export default SelectLevel;
