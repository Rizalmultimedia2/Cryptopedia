import {
  arrayRemove,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import { FiTrash } from "react-icons/fi";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useUser } from "@/context/user";

function DeleteModal({ title, button, post_id, nameTable, nama }) {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  const user = useUser();

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  const deleteData = async () => {
    try {
      const docRef = doc(db, nameTable, post_id);
      await deleteDoc(docRef);
      console.log("Dokumen berhasil dihapus");

      if (nameTable == "Sharing") {
        const docId = doc(db, "Users", user.uid);
        const updateData = {};
        updateData["created_sharing"] = arrayRemove(post_id);
        await updateDoc(docId, updateData);
      }

      await Swal.fire({
        icon: "success",
        title: `Berhasil Menghapus ${nama}`,
      });
      setShowModal(false);
      router.reload();
      router.push("/cryptosharing");
    } catch (error) {
      console.error("Terjadi kesalahan saat menghapus dokumen:", error);
    }
  };

  return (
    <>
      {button == 1 ? (
        <button
          className="button-delete flex gap-3 "
          type="button"
          onClick={() => setShowModal(true)}
        >
          Hapus
        </button>
      ) : (
        <button
          className="flex flex-row items-center gap-2 z-50"
          onClick={clickHandler}
        >
          <FiTrash /> Hapus
        </button>
      )}

      {showModal ? (
        <>
          <div></div>
          <form className="form-modal z-[100]">
            <div
              className={`border-0 relative rounded-md shadow-lg flex flex-col max-w-[350px] bg-white outline-none px-4 py-4 focus:outline-none w-full`}
            >
              <div className="flex-center border-b border-solid border-gray-4 pb-3">
                <h4 className="text-h4">{title}</h4>
              </div>
              <div className="flex-center p-4 border-t border-solid border-slate-4 gap-3">
                <button
                  className="button-normal"
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{ background: "#CDEDE6", color: "#000" }}
                >
                  Batal
                </button>
                <button
                  className="button-delete"
                  type="button"
                  onClick={deleteData}
                >
                  Hapus
                </button>
              </div>
            </div>
          </form>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default DeleteModal;
