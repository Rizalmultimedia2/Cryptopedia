import React from "react";
import { FiTrash } from "react-icons/fi";

function DeleteModal({ title, button }) {
  const [showModal, setShowModal] = React.useState(false);
  const clickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {button == 1 ? (
        <button
          className="button-delete flex gap-3"
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
          <div className="flex-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
            <div
              className={`border-0 rounded-md shadow-lg flex flex-col max-w-[350px] bg-white outline-none px-4 py-4 focus:outline-none w-full`}
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
                  onClick={() => setShowModal(false)}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default DeleteModal;
