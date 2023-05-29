import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import ItemModal from "./ItemModal";
import SelectCategory from "../Select/SelectCategory";

function SharingModal({ name, title, button, icon, show }) {
  const [num, setNum] = useState(0);
  const [formValues, setFormValues] = useState({
    sharing_title: "",
    tags: [],
    sharing_body: "",
    category: 0,
    like: 0,
    dislike: 0,
    total_bookmark: [],
    total_comments: 0,
    user_likes: [],
    user_dislike: [],
    user_bookmarked: [],
  });

  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      category: num,
    }));
  }, [num]);

  // console.log("form value", formValues);
  return (
    <>
      <Modal
        icon={icon}
        name={name}
        button={button}
        size={550}
        title={title}
        show={show}
        data={formValues}
        nameTable="Sharing"
        Children={[
          <ItemModal
            label="Judul"
            id="sharing_title"
            type="text"
            placeholder="Masukkan judul"
            setform={setFormValues}
          />,
          <ItemModal
            label="Tag"
            id="tags"
            type="text"
            placeholder="Tag"
            setform={setFormValues}
          />,
          <div className="flex gap-2 flex-col">
            <label htmlFor="sharing_body" className="text-p2">
              Masukkan isi diskusi
            </label>
            <textarea
              id="sharing_body"
              rows="4"
              className="textarea-modal"
              placeholder="Masukkan isi diskusi"
              required
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  [e.target.id]: e.target.value,
                }))
              }
            ></textarea>
          </div>,
          <div className="flex flex-col w-full gap-1">
            <span className="text-p2">Category</span>
            <ul className="flex flex-row text-h7 rounded-lg w-fit overflow-hidden">
              <SelectCategory style="category" post={1} filter={setNum} />
            </ul>
          </div>,
        ]}
      ></Modal>
    </>
  );
}

export default SharingModal;
