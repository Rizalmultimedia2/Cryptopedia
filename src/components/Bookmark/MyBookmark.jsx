import React from "react";
import ItemBookmark from "./ItemBookmark";

function MyBookmark() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white border border-gray-4 rounded-lg px-5 py-6 gap-5 z-10">
        <p className="text-h4 text-primary-1 font-bold">MyBookmark</p>
        <div className="flex flex-col w-full gap-3">
          <ul className="flex items-center justify-star gap-3 ">
            {[
              {
                id: "cryptosharing",
                name: "Crypto Sharing",
              },
              {
                id: "crypto101",
                name: "Crypto 101",
              },
            ].map((x) => (
              <li
              //   className="
              // //first-of-type:text-primary-1
              // "
              >
                <input
                  type="radio"
                  name="bookmark"
                  id={x.id}
                  value={x.id}
                  className="peer sr-only"
                />
                <label
                  className="cursor-pointer peer-checked:text-primary-1 font-semibold"
                  for={x.id}
                >
                  {x.name}
                </label>
              </li>
            ))}
          </ul>
          {[1, 2, 3, 4, 5].map((x) => (
            <ItemBookmark />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyBookmark;
