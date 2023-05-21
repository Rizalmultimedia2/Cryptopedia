import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

function LaporkanDiskusi({ title }) {
  const [showModal, setShowModal] = React.useState(false);
  const clickHandler = () => {
    setShowModal(!showModal);
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
          <form className="flex-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
            <div
              className={`border-0 rounded-md shadow-lg flex flex-col max-w-[350px] bg-white outline-none px-4 py-4 focus:outline-none w-full`}
            >
              <div className="flex-center border-b border-solid border-gray-4 pb-3">
                <h4 className="text-h4">{title}</h4>
              </div>
              <div className="flex-center flex-col p-6 gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label for="laporcomment" class="text-p2">
                    Alasan melaporkan
                  </label>
                  <textarea
                    id="laporcomment"
                    rows="4"
                    class="textarea-modal"
                    placeholder="Masukkan isi laporan"
                    required
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
                  onClick={() => setShowModal(false)}
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

export default LaporkanDiskusi;
