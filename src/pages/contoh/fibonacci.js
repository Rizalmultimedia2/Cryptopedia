import React, { useState } from "react";

function fibonacci() {
  const [hasil, setHasil] = useState();
  const [num, setNum] = useState();

  const cekFibo = (num) => {
    if (num <= 0) return "Masukkan angka lebih dari 0";
    if (num == 1) return 0;
    if (num == 2) return 1;

    return cekFibo(num - 1) + cekFibo(num - 2);
  };

  function changeNumber() {
    const n = parseInt(num);
    const result = cekFibo(n);
    setHasil(result);
  }
  return (
    <>
      <div className="container bg-primary-1 p-10 flex-center flex-col">
        <label htmlFor="angka">Masukkan index fibonacci</label>
        <input
          type="text"
          id="angka"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={changeNumber}>Cek</button>
        <div>{hasil}</div>
      </div>
    </>
  );
}

export default fibonacci;
