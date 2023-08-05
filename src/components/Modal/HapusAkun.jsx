import React from "react";
import { auth, db } from "../../../firebaseConfig";
import { useRouter } from "next/router";
import { useUser } from "@/context/user";
import { deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

function HapusAkun() {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  const user = useUser();

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  const deleteAkun = async () => {
    try {
      await auth.currentUser.delete();
      await deleteDoc(doc(db, "Users", user.uid));
      await Swal.fire({
        icon: "success",
        title: "Berhasil Menghapus Akun",
      });
      setShowModal(false);
      console.log("Akun berhasil dihapus.");
    } catch (error) {
      console.error("Gagal menghapus akun:", error);
      console.error("Terjadi kesalahan saat menghapus dokumen:", error);
    }
  };

  console.log(user.uid);

  return (
    <>
      <button
        className="button-delete flex gap-3 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Hapus Akun
      </button>

      {showModal ? (
        <>
          <form className="form-modal z-[100]">
            <div
              className={`border-0 relative rounded-md shadow-lg flex flex-col lg:w-[400px] w-[350px] bg-white outline-none px-4 py-4 focus:outline-none `}
            >
              <div className="flex-center border-b border-solid border-gray-4 pb-3">
                <h4 className="text-h4 text-center">Yakin untuk hapus akun?</h4>
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
                  onClick={deleteAkun}
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

export default HapusAkun;
