import React from "react";

function Thead({ head }) {
  // console.log({ head });
  return (
    <>
      {head.map((x, index) => (
        <th scope="col" className="px-6 py-3 text-white" key={index}>
          {x}
        </th>
      ))}
    </>
  );
}

export default Thead;
