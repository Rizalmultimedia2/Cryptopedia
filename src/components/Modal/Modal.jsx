import React, { Children, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import EditButton from "../Button/EditButton";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { useUser } from "@/context/user";

function Modal({ Children, title, button, size, name, icon, data, nameTable }) {
  const [showModal, setShowModal] = React.useState(false);
  const user = useUser();

  const onSubmit = async (e) => {
    try {
      const combineData = {
        ...data,
        user_id: user.uid,
        date: serverTimestamp(),
      };
      const collectionRef = collection(db, nameTable);
      const docRef = await addDoc(collectionRef, combineData);
      console.log(
        "Data berhasil ditambahkan ke Firestore dengan ID:",
        docRef.id
      );

      await setDoc(
        doc(db, "Users", user.uid),
        {
          created_sharing: arrayUnion(docRef.id),
        },
        { merge: true }
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan Forum",
      });

      setShowModal(false);
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat menambahkan data ke Firestore:",
        error
      );
    }
  };

  return (
    <>
      {button == 1 ? (
        <button
          className="button-normal flex gap-3"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {icon == 1 ? <FiPlus /> : null} {name}
        </button>
      ) : (
        <EditButton setShow={setShowModal} />
      )}

      {showModal ? (
        <>
          <form className="flex-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
            <div
              className={`border-0 rounded-md shadow-lg flex flex-col max-w-[${size}px] bg-white outline-none px-4 py-4 focus:outline-none w-full`}
            >
              <div className="flex-center border-b border-solid border-gray-4 pb-3">
                <h4 className="text-h4">{title}</h4>
              </div>
              <div className="flex-center flex-col p-6 gap-4">
                <div className="w-full flex flex-col gap-2">{Children}</div>
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
                  className="button-normal"
                  type="button"
                  onClick={onSubmit}
                >
                  {name}
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

export default Modal;
