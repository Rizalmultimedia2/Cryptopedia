import {
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React from "react";
import { FiTrash } from "react-icons/fi";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useUser } from "@/context/user";

function DeleteModal({ title, button, post_id, nameTable, nama, admin }) {
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

      if (nameTable == "report") {
        const q = query(
          collection(db, nameTable),
          where("sharing_id", "==", post_id)
        );
        const querySnapshot = await getDocs(q);
        const getDoc = doc(db, "Sharing", post_id);
        deleteDoc(getDoc)
          .then(() => {
            console.log("Berhasil dihapus");
          })
          .catch((error) => {
            console.log("erorr", error);
          });

        const comment = query(
          collection(db, "Comments"),
          where("sharing_id", "==", post_id)
        );
        const commentSnapshot = await getDocs(comment);
        commentSnapshot.forEach((doc) => {
          deleteDoc(doc.ref)
            .then(() => {
              console.log("berhasil delete comment", comment);
            })
            .catch((error) => {
              console.log("errror comment", error);
            });
        });

        const qUser = query(
          collection(db, "Users"),
          where("saved_sharing", "array-contains", post_id)
        );

        const querySnapshotUser = await getDocs(qUser);

        querySnapshotUser.forEach(async (documentSnapshot) => {
          const documentRef = doc(db, "Users", documentSnapshot.id);

          await updateDoc(documentRef, {
            saved_sharing: arrayRemove(post_id),
          });

          console.log(
            "Data berhasil dihapus dari array pada dokumen",
            documentSnapshot.id
          );
        });

        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref)
            .then(async () => {
              console.log("Dokumen berhasil dihapus");

              await Swal.fire({
                icon: "success",
                title: "Berhasil Menghapus Forum",
              });
              setShowModal(false);
              await router.push("/admin/daftarlaporan");
            })
            .catch((error) => {
              console.error("Error saat menghapus dokumen:", error);
            });
        });
      }

      if (nameTable == "Sharing") {
        const docId = doc(db, "Users", user.uid);
        const updateData = {};
        updateData["created_sharing"] = arrayRemove(post_id);
        await updateDoc(docId, updateData);
      }

      if (nameTable == "Comments") {
        // const docRef = doc(db, "Comments", user.uid);
        // await deleteDoc(docRef);
        const docId = doc(db, "Users", user.uid);
        const updateData = {};
        updateData["comments"] = arrayRemove(post_id);
        await updateDoc(docId, updateData);
      }

      await Swal.fire({
        icon: "success",
        title: `Berhasil Menghapus ${nama}`,
      });
      setShowModal(false);
      router.reload();
      if (admin != 1) {
        router.push("/cryptosharing");
      }
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
      ) : button == 2 ? (
        <FiTrash
          className="text-red-1 text-p21 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
      ) : (
        <button
          className="flex flex-row items-center gap-2 z-40"
          onClick={clickHandler}
        >
          <FiTrash /> Hapus
        </button>
      )}

      {showModal ? (
        <>
          <form className="form-modal z-[100]">
            <div
              className={`border-0 relative rounded-md shadow-lg flex flex-col lg:w-[400px] w-[350px] bg-white outline-none px-4 py-4 focus:outline-none `}
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
