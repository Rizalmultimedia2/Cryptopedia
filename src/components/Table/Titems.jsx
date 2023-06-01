import React from "react";

function Titems({ no, items }) {
  return (
    <>
      <tr className="bg-white border-b ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {no}
        </th>
        {items.map((x, index) => (
          <td className="px-6 py-3" key={index}>
            {x}
          </td>
        ))}
        <td className="px-6 py-3 text-center">
          <button className="button-delete">Hapus</button>
        </td>
      </tr>
    </>
  );
}

export default Titems;
