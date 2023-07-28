import React, { useState } from "react";

function linear() {
  const array = [1, 45, 2, 3, 4, 6, 3, 23, 42, 12];
  const [search, setSearch] = useState();
  const [hasil, setHasil] = useState();

  const linearSearch = (e) => {
    e.preventDefault();
    let found = false;
    for (const num of array) {
      if (parseInt(search) == num) {
        found = true;
        break;
      }
    }

    if (found) {
      setHasil("Angka ada dalam array");
    } else {
      setHasil("angka tidak ada dalam array");
    }
  };
  return (
    <>
      <div className="container flex-center flex-col bg-primary-1 p-10">
        <form onSubmit={linearSearch}>
          <label htmlFor="angka">Masukkan angka yang ingin dicari</label>
          <input
            type="text"
            id="angka"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" onClick={linearSearch}>
            Cek angka
          </button>
        </form>
        <div>{hasil}</div>
      </div>
    </>
  );
}

export default linear;
