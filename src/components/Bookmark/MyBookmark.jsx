import React from "react";
import ItemBookmark from "./ItemBookmark";
import SelectBookmark from "../Select/SelectBookmark";

function MyBookmark() {
  return (
    <>
      <div className="flex-center flex-col bg-white border border-gray-4 rounded-lg px-5 py-6 gap-5 z-10">
        <p className="text-h4 text-primary-1 font-bold">MyBookmark</p>
        <div className="flex flex-col w-full gap-3">
          <ul className="flex items-center justify-start gap-3 ">
            <SelectBookmark />
          </ul>
          <div className="flex flex-col gap-4 my-2">
            {[1, 2, 3, 4, 5].map((x) => (
              <ItemBookmark />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBookmark;
