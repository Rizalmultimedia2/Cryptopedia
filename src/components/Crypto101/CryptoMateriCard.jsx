import React from "react";
import DeleteModal from "../Modal/DeleteModal";
import IconBookmark from "../Button/IconBookmark";
import MateriModal from "../Modal/MateriModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Link from "next/link";

function CryptoMateri({
  title,
  level,
  body,
  id,
  visible,
  setVisible,
  setId,
  admin,
}) {
  const clickHandler = async () => {
    const querySnapshot = await getDocs(collection(db, "Starting"));
    querySnapshot.forEach((doc) => {
      // Mendapatkan ID dokumen
      const documentId = doc.id;

      // Mendapatkan data dokumen
      const documentData = doc.data();
    });
    console.log("kesini gak sih");
    setVisible(true);
    setId({
      sid: id,
      sbody: body,
      stitle: title,
      slevel: level,
    });
  };
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

  return (
    <>
      {admin == 1 ? (
        <div className="sharing-card" id={id}>
          <div className="flex flex-col gap-[5px]">
            <div className="flex-center-between text-h5 flex-wrap">
              <span>{title}</span>
              <div>
                <IconBookmark post_id={id} field="saved_starting" />
              </div>
            </div>
            <div className="level" style={{ background: getColor(level) }}>
              {getLevel(level)}
            </div>
          </div>
          <div className="lg:line-clamp-2 line-clamp-none">{body}</div>
          <div className="flex-center gap-3">
            <DeleteModal
              title="Hapus Materi"
              nameTable="Starting"
              button={1}
              post_id={id}
              type="deleteModal"
              nama="Materi"
            />
            <MateriModal
              name="Edit Materi"
              icon={0}
              button={1}
              title="Edit Materi Baru"
            />
          </div>
        </div>
      ) : (
        <Link
          href={`?materi=${id}`}
          className="sharing-card"
          id={id}
          onClick={clickHandler}
        >
          <div className="flex flex-col gap-[5px]">
            <div className="flex-center-between text-h5 flex-wrap">
              <span>{title}</span>
              <div>
                <IconBookmark post_id={id} field="saved_starting" />
              </div>
            </div>
            <div className="level" style={{ background: getColor(level) }}>
              {getLevel(level)}
            </div>
          </div>
          <div className="lg:line-clamp-2 line-clamp-none">{body}</div>
          <div
            className="flex-center gap-3"
            style={{ display: isAdmin(admin) }}
          >
            <DeleteModal
              title="Hapus Materi"
              nameTable="Starting"
              button={1}
              post_id={id}
              type="deleteModal"
              nama="Materi"
            />
            <MateriModal
              name="Edit Materi"
              icon={0}
              button={1}
              title="Edit Materi Baru"
            />
          </div>
        </Link>
      )}
    </>
  );
}

export default CryptoMateri;
