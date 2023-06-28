import Image from "next/image";
import React from "react";
import DeleteModal from "../Modal/DeleteModal";
import parse, { domToReact } from "html-react-parser";
import Link from "next/link";
import EditArtikel from "../Modal/EditArtikel";

function Artikel({ title, date, body, level, id, admin, image_url }) {
  const options = {
    replace: ({ type, name, attribs, children }) => {
      if (type === "tag" && name === "h1") {
        return <p>{domToReact(children, options)}</p>;
      }
    },
  };
  const formattedImage = image_url.replace(/^Https:/, "https:");
  const getBody = parse(body, options);
  const getLevel = (level) => {
    switch (level) {
      case 1:
        return "Pemula";
      case 2:
        return "Menengah";
      case 3:
        return "Ahli";
    }
  };

  const getColor = (level) => {
    if (level == 1) {
      return "#29BF9F";
    } else if (level == 2) {
      return "#FACA21";
    } else if (level == 3) {
      return "#E96E70";
    }
  };
  const isAdmin = (admin) => {
    if (admin == 1) {
      return "visible";
    } else {
      return "none";
    }
  };

  return (
    <>
      <div className="ring-hover h-fit">
        <div className="flex flex-col w-full bg-white border border-gray-4 rounded-lg gap-[10px] overflow-hidden">
          {admin == 1 ? (
            <>
              <div className="relative h-[230px]">
                <Image
                  src={formattedImage}
                  fill
                  className="object-cover"
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-[5px] px-[7px] mb-[10px] ">
                <div className="level" style={{ background: getColor(level) }}>
                  {getLevel(level)}
                </div>
                <div className="text-p1 text-black font-bold line-clamp-2">
                  {title}
                </div>
                <p className="text-p3 text-black font-medium">{date}</p>
                <div className="line-clamp-2">{getBody}</div>
              </div>
            </>
          ) : (
            <>
              <Link className="relative h-[230px]" href={`/artikel/${id}`}>
                <Image
                  src={formattedImage}
                  fill
                  className="object-cover"
                  alt="image"
                />
              </Link>
              <Link
                className="flex flex-col gap-[5px] px-[7px] mb-[10px] "
                href={`/artikel/${id}`}
              >
                <div className="level" style={{ background: getColor(level) }}>
                  {getLevel(level)}
                </div>
                <div className="text-p1 text-black font-bold line-clamp-2">
                  {title}
                </div>
                <p className="text-p3 text-black font-medium">{date}</p>
                <div className="line-clamp-2">{getBody}</div>
              </Link>
            </>
          )}

          <div
            className="flex-center gap-3 mb-3 "
            style={{ display: isAdmin(admin) }}
          >
            <DeleteModal
              title="Hapus Artikel"
              nameTable="Articles"
              button={1}
              post_id={id}
              type="deleteModal"
              nama="Artikel"
              admin={admin}
            />
            <EditArtikel
              name="Edit artikel"
              title="Edit Artikel"
              post_id={id}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Artikel;
