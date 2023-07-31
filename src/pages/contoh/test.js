import React, { useEffect, useState } from "react";

function test() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [hasil, setHasil] = useState([]);

  function prima() {
    let arr = [];
    for (let n = num1; n < num2; n++) {
      let found = 1;
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          found = 0;
          console.log(n, "Bukan prima");
          break;
        }
      }
      if (found == 1) {
        arr.push(n);
        console.log(n);
      }
    }
    setHasil(arr);
  }

  console.log(hasil);
  return (
    <>
      <div className="container bg-primary-1 flex-center flex-col p-5">
        <label htmlFor="num1">Masukkan angka pertama</label>
        <input
          type="text"
          id="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <label htmlFor="num2">Masukkan angka kedua</label>
        <input
          type="text"
          id="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div>
          <button className="button-normal mt-3" onClick={prima}>
            Klik
          </button>
        </div>
        <div>
          Angka prima dari {num1} - {num2} adalah
        </div>
        {hasil.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </>
  );
}

export default test;
