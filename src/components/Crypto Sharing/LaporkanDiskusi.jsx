import { useUser } from "@/context/user";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { db } from "../../../firebaseConfig";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

function LaporkanDiskusi({ title, post_id }) {
  const [showModal, setShowModal] = useState(false);
  const [report, setReport] = useState({
    reason: "",
  });
  const user = useUser();
  const router = useRouter();

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async () => {
    try {
      const combineData = {
        ...report,
        user_id: user.uid,
        sharing_id: post_id,
        date: serverTimestamp(),
      };

      const docRef = collection(db, "report");
      const set = await addDoc(docRef, combineData);
      const getId = set.id;
      await updateDoc(doc(db, "report", getId), {
        id: getId,
      });

      console.log("berhasil melaporkan dengan ID:", set.id);

      await Swal.fire({
        icon: "success",
        title: "Berhasil melaporkan diskusi",
      });

      setShowModal(false);
      await router.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <button
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={clickHandler}
      >
        <FiAlertTriangle /> Laporkan
      </button>
      {showModal ? (
        <>
          <form className="form-modal">
            <div
              className={`border-0 rounded-md shadow-lg flex flex-col max-w-[450px] bg-white outline-none px-4 py-4 focus:outline-none w-full`}
            >
              <div className="flex-center border-b border-solid border-gray-4 pb-3">
                <h4 className="text-h4">{title}</h4>
              </div>
              <div className="flex-center flex-col p-6 gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="reason" className="text-p2">
                    Alasan melaporkan
                  </label>
                  <textarea
                    id="reason"
                    rows="4"
                    className="textarea-modal"
                    placeholder="Masukkan isi laporan"
                    required
                    onChange={(e) =>
                      setReport((prev) => ({
                        ...prev,
                        reason: e.target.value,
                      }))
                    }
                  ></textarea>
                </div>
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
                  onClick={handleSubmit}
                >
                  Laporkan
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

export default LaporkanDiskusi;
