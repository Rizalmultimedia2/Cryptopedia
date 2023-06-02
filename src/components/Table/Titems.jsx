import React from "react";
import DeleteModal from "../Modal/DeleteModal";
import Link from "next/link";

function Titems({ num, post_id, date, total }) {
  return (
    <>
      <tr
        className={`${
          num % 2 === 0 ? "even:bg-primary-4/50" : "odd:bg-white"
        } font-medium`}
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {num}
        </th>
        <td className="px-6 py-3">{post_id}</td>
        <td className="px-6 py-3">{date}</td>
        <td className="px-6 py-3">{total} Laporan</td>
        <td className="px-6 py-3 text-center flex-center flex-row gap-2">
          <Link
            className="button-normal"
            href={`/admin/daftarlaporan/${post_id}`}
          >
            Lihat Laporan
          </Link>
          <DeleteModal
            title="Hapus Diskusi ?"
            button={1}
            post_id={post_id}
            nameTable="report"
            nama="Forum"
          />
        </td>
      </tr>
    </>
  );
}

export default Titems;
