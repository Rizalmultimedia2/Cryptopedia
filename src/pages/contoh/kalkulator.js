import React, { useState } from "react";

function kalkulator() {
  const [nilai1, setNilai1] = useState();
  const [nilai2, setNilai2] = useState();
  const [hasil, setHasil] = useState();

  function tambah() {
    const pertambahan = parseInt(nilai1) + parseInt(nilai2);
    setHasil(pertambahan);
  }

  function kurang() {
    const kurangi = parseInt(nilai1) - parseInt(nilai2);
    setHasil(kurangi);
  }

  function bagi() {
    const pembagian = parseInt(nilai1) / parseInt(nilai2);
    setHasil(pembagian);
  }

  function kali() {
    const perkalian = parseInt(nilai1) * parseInt(nilai2);
    setHasil(perkalian);
  }
  return (
    <>
      <div className="container flex-center p-10 flex-col bg-slate-500">
        <label htmlFor="nilai1">Masukkan angka pertama</label>
        <input
          type="text"
          id="nilai1"
          value={nilai1}
          onChange={(e) => setNilai1(e.target.value)}
        />
        <label htmlFor="nilai1">Masukkan angka kedua</label>
        <input
          type="text"
          id="nilai2"
          value={nilai2}
          onChange={(e) => setNilai2(e.target.value)}
        />
        <div className="flex flex-row">
          <button onClick={tambah} className="button-normal">
            +
          </button>
          <button onClick={kurang} className="button-normal">
            -
          </button>
          <button onClick={bagi} className="button-normal">
            /
          </button>
          <button onClick={kali} className="button-normal">
            x
          </button>
        </div>
        <div>Hasil perhitungannya {hasil}</div>
      </div>
    </>
  );
}

export default kalkulator;
