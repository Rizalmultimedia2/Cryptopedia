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
        <a
          href={link}
          className="button-normal font-bold w-fit"
          style={{
            backgroundColor: "#ffffff",
            color: "#29BF9F",
          }}
        >
          Klik Disini
        </a>
      </div>
      ;
    </>
  );
}

export default Banner;
