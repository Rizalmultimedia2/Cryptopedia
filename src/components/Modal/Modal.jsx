import React, { Children } from "react";
import ItemModal from "./ItemModal";
import SelectCategory from "@/components/SelectCategory";
import { FiPlus } from "react-icons/fi";

function Modal({ Children, title }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="button-normal flex gap-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FiPlus /> Buat Diskusi
      </button>

      {showModal ? (
        <>
          <form className="flex-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="border-0 rounded-md shadow-lg flex flex-col max-w-[580px] bg-white outline-none px-4 py-4 focus:outline-none">
              <div className="flex-center border-b border-solid border-gray-4 pb-3">
                <h4 className="text-h4">{title}</h4>
              </div>
              <div className="flex-center flex-col p-6 gap-4">
                <div className="w-full flex flex-col gap-2">{Children}</div>
              </div>
              <div className="flex items-center justify-center p-4 border-t border-solid border-slate-4 gap-3">
                <button
                  className="button-normal bg-black"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Batal
                </button>
                <button
                  className="button-normal"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Buat Diskusi
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
