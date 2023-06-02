import React, { useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function EditStarting({ name, title, post_id }) {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Starting", post_id);
      const get = await getDoc(docRef);
      setFormValues(get.data());
    };

    fetchData();
  }, []);

  const onSubmit = async (e) => {
    try {
      const updateData = {
        starting_title: formValues.starting_title,
        starting_body: formValues.starting_body,
        level: formValues.level,
        date: serverTimestamp(),
      };

      const docRef = doc(db, "Starting", post_id);
      await updateDoc(docRef, updateData);

      await Swal.fire({
        icon: "success",
        title: "Berhasil Mengedit Materi",
      });
      router.reload();

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
      <button
        className="button-normal flex gap-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {name}
      </button>
      {showModal ? (
        <>
          <form className="form-modal">
            <div
              className={`border-0 rounded-md shadow-lg flex flex-col max-w-[550px] bg-white outline-none px-4 py-4 focus:outline-none w-full`}
            >
              <div className="flex-center border-b border-solid border-gray-4 pb-3">
                <h4 className="text-h4">{title}</h4>
              </div>
              <div className="flex-center flex-col p-6 gap-4">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="starting_title" className="">
                      Judul
                    </label>
                    <input
                      type="text"
                      id="starting_title"
                      className="form-input"
                      value={formValues.starting_title}
                      required
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          [e.target.id]: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex gap-2 flex-col">
                    <label htmlFor="starting_body" className="text-p2">
                      Masukkan isi materi
                    </label>
                    <textarea
                      id="starting_body"
                      rows="4"
                      className="textarea-modal"
                      placeholder="Masukkan isi materi"
                      value={formValues.starting_body}
                      required
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          [e.target.id]: e.target.value,
                        }))
                      }
                    ></textarea>
                  </div>

                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="level">Level</label>
                    <select
                      name=""
                      id="level"
                      className="form-input w-full"
                      value={formValues.level}
                      required
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          level: parseInt(e.target.value),
                        }))
                      }
                    >
                      <option value="" disabled selected hidden>
                        Level
                      </option>
                      <option value={1}>Pemula</option>
                      <option value={2}>Menengah</option>
                      <option value={3}>Ahli</option>
                    </select>
                  </div>
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

export default EditStarting;
