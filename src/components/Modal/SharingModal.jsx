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
    id: "",
    category: 0,
    like: 0,
    dislike: 0,
    total_bookmark: 0,
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
            key="item1"
            label="Judul"
            id="sharing_title"
            type="text"
            placeholder="Masukkan judul"
            setform={setFormValues}
          />,
          <ItemModal
            key="item2"
            label="Tag"
            id="tags"
            type="text"
            placeholder="Tag"
            setform={setFormValues}
          />,
          <div className="flex gap-2 flex-col" key="item3">
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
          <div className="flex flex-col w-full gap-1" key="item4">
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
