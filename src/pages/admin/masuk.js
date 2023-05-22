import React from "react";
import Image from "next/image";

function masuk() {
  return (
    <>
      <div className="flex-center container">
        <div className="flex-center min-h-screen">
          <div className="form">
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Admin</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <label for="username" className="sr-only"></label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Username"
              />
              <label for="password" className="sr-only"></label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="password"
              />
              <button type="submit" className="button-input-1">
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default masuk;
