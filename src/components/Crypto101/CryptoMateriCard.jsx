import React from "react";
import DeleteModal from "../Modal/DeleteModal";
import IconBookmark from "../Button/IconBookmark";
import MateriModal from "../Modal/MateriModal";

function CryptoMateri({ title, level, body, id }) {
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

  const isAdmin = (id) => {
    if (id == 1) {
      return "visible";
    } else {
      return "none";
    }
  };

  return (
    <>
      <a className="sharing-card" href="#">
        <div className="flex flex-col gap-[5px]">
          <div className="flex-center-between text-h5">
            <span>{title}</span>
            <div>
              <IconBookmark />
            </div>
          </div>
          <div className="level" style={{ background: getColor(level) }}>
            {getLevel(level)}
          </div>
        </div>
        <div>{body}</div>
        <div className="flex-center gap-3" style={{ display: isAdmin(id) }}>
          <DeleteModal title="Hapus Materi" />
          <MateriModal
            name="Edit Materi"
            icon={0}
            button={1}
            title="Edit Materi Baru"
          />
        </div>
      </a>
    </>
  );
}

export default CryptoMateri;
