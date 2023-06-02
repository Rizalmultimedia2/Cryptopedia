import Link from "next/link";
import React from "react";

function Banner({ title, body, link }) {
  return (
    <>
      <div
        className="flex flex-col px-4 py-4 bg-primary-1 gap-[10px] rounded-lg
      "
      >
        <p className="text-p1 font-semibold text-white">{title}</p>
        <p className="text-p4 text-white">{body}</p>
        <Link
          href={link}
          className="button-normal font-bold w-fit"
          style={{
            backgroundColor: "#ffffff",
            color: "#29BF9F",
          }}
        >
          Klik Disini
        </Link>
      </div>
      ;
    </>
  );
}

export default Banner;
