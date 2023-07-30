import React, { useEffect, useState } from "react";
import SelectCategory from "../Select/SelectCategory";
import { FiPlus } from "react-icons/fi";
import EditButton from "../Button/EditButton";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { FiX } from "react-icons/fi";

function EditModal({ name, title, button, icon, show, post_id }) {
  const [num, setNum] = useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  const [formValues, setFormValues] = useState({});
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [maxTag, setMaxTag] = useState(false);

  const handleInputKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const tag = tagInput.trim().toLowerCase();

      if (tag && tag.length <= 8) {
        if (!tags.includes(tag)) {
          if (tags.length < 3) {
            setTags([...tags, tag]);
            setFormValues((prev) => ({
              ...prev,
              tags: [...prev.tags, tag],
            }));
            setIsInputInvalid(false);
            setMaxTag(false);
          } else {
            setMaxTag(true);
          }
        }
      } else {
        setIsInputInvalid(true);
      }
      setTagInput("");
    }
    console.log("itemform", formValues.tags);
  };

  const handleTagRemove = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
    setFormValues((prev) => ({
      ...prev,
      tags: updatedTags,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Sharing", post_id);
        const get = await getDoc(docRef);
        setFormValues(get.data());
        setTags(get.data().tags);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      category: num,
    }));
    // console.log("num", num);
  }, [num]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        sharing_title: formValues.sharing_title,
        tags: formValues.tags,
        sharing_body: formValues.sharing_body,
        category: num,
        date: serverTimestamp(),
      };

      const docRef = doc(db, "Sharing", formValues.id);
      await updateDoc(docRef, updateData);

      await Swal.fire({
        icon: "success",
        title: "Berhasil Mengedit Forum",
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
          <form className="form-modal z-[45]" onSubmit={onSubmit}>
            <div
              className={`border-0 rounded-md shadow-lg flex flex-col lg:w-[500px] w-[350px] bg-white outline-none px-4 py-4 focus:outline-none`}
            >
              <div className="flex-center border-b border-solid border-gray-4 pb-3">
                <h4 className="text-h4">{title}</h4>
              </div>
              <div className="flex-center flex-col p-6 gap-4">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="sharing_title" className="">
                      Judul
                    </label>
                    <input
                      type="text"
                      id="sharing_title"
                      className="form-input"
                      value={formValues.sharing_title}
                      required
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          [e.target.id]: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="tags" className="">
                      Tag (max 3 tag)
                    </label>
                    <input
                      type="text"
                      id="tags"
                      className={`form-input-modal ${
                        isInputInvalid ? "focus:ring-red-1" : ""
                      }`}
                      required
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleInputKeyDown}
                    />
                    {isInputInvalid && (
                      <p className="text-red-1 text-p3">
                        Tag maksimal 8 karakter
                      </p>
                    )}
                    {maxTag && (
                      <p className="text-red-1 text-p3">Tag maksimal 3</p>
                    )}
                    <div className="flex flex-row gap-2 my-1">
                      {tags.map((tag) => (
                        <div key={tag} className="">
                          <div className="flex flex-row gap-1 bg-primary-2 text-white py-1 px-2 rounded-lg">
                            {tag}
                            <button onClick={() => handleTagRemove(tag)}>
                              <FiX />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 flex-col">
                    <label htmlFor="sharing_body" className="text-p2">
                      Masukkan isi diskusi
                    </label>
                    <textarea
                      id="sharing_body"
                      rows="4"
                      className="textarea-modal"
                      placeholder="Masukkan isi diskusi"
                      value={formValues.sharing_body}
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
                    <span className="text-p2">Category</span>
                    <ul className="flex flex-row text-h7 rounded-lg w-fit overflow-hidden">
                      <SelectCategory
                        style="category"
                        post={1}
                        filter={setNum}
                      />
                    </ul>
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
                <button className="button-normal" type="submit">
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

export default EditModal;
