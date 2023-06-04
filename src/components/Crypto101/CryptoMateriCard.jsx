import React from "react";
import DeleteModal from "../Modal/DeleteModal";
import IconBookmark from "../Button/IconBookmark";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Link from "next/link";
import EditStarting from "../Modal/EditStarting";

function CryptoMateri({ title, level, body, id, setVisible, admin }) {
  const clickHandler = async () => {
    const querySnapshot = await getDocs(collection(db, "Starting"));
    querySnapshot.forEach((doc) => {
      const documentId = doc.id;
      const documentData = doc.data();
    });
    setVisible(true);
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
            <EditStarting
              name="Edit Materi"
              title="Edit Materi Baru"
              post_id={id}
              edit={1}
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
        </Link>
      )}
    </>
  );
}

export default CryptoMateri;
