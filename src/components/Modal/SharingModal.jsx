import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import ItemModal from "./ItemModal";
import SelectCategory from "../Select/SelectCategory";
import { FiX } from "react-icons/fi";

function SharingModal({ name, title, button, icon, show }) {
  const [num, setNum] = useState(0);
  const [formValues, setFormValues] = useState({
    sharing_title: "",
    tags: [],
    sharing_body: "",
    id: "",
    category: 0,
    likes: 0,
    dislikes: 0,
    total_bookmark: 0,
    total_comments: 0,
    user_likes: [],
    user_dislike: [],
    user_bookmarked: [],
  });

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [maxTag, setMaxTag] = useState(false);

  const handleInputKeyDown = (e) => {
    if (e.key === " ") {
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
    setFormValues((prev) => ({
      ...prev,
      category: num,
    }));
  }, [num]);

  return (
    <>
      <Modal
        setTagInput={setTagInput}
        setTags={setTags}
        icon={icon}
        name={name}
        button={button}
        size={550}
        title={title}
        show={show}
        alert="Forum"
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
          // <ItemModal
          //   key="item2"
          //   label="Tag"
          //   id="tags"
          //   type="text"
          //   placeholder="Tag"
          //   setform={setFormValues}
          // />,
          <div key="item2" className="flex flex-col gap-1 transition-all">
            <label htmlFor="tags" className="">
              Tag (max 3 tag)
            </label>
            <input
              type="text"
              id="tags"
              placeholder="Tag"
              className={`form-input-modal ${
                isInputInvalid ? "focus:ring-red-1" : ""
              }`}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
            />
            {isInputInvalid && (
              <p className="text-red-1 text-p3">Tag maksimal 8 karakter</p>
            )}
            {maxTag && <p className="text-red-1 text-p3">Tag maksimal 3</p>}
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
          </div>,
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
