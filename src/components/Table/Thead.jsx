import React from "react";

function Thead({ head }) {
  console.log({ head });
  return (
    <>
      {head.map((x) => (
        <th scope="col" className="px-6 py-3">
          {x}
        </th>
      ))}
    </>
  );
}

export default Thead;
