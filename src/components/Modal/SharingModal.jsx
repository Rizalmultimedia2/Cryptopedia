import React from "react";
import Modal from "./Modal";
import ItemModal from "./ItemModal";
import SelectCategory from "../Select/SelectCategory";

function SharingModal({ name, title, button, icon, show }) {
  console.log(`${show} showw`);
  return (
    <>
      {console.log(`${show} showw`)}
      <Modal
        icon={icon}
        name={name}
        button={button}
        size={550}
        title={title}
        show={show}
        Children={[
          <ItemModal
            label="Judul"
            id="title"
            type="text"
            placeholder="Masukkan judul"
          />,
          <ItemModal label="Tag" id="tag" type="text" placeholder="Tag" />,
          <div className="flex gap-2 flex-col">
            <label for="comment" class="text-p2">
              Masukkan isi diskusi
            </label>
            <textarea
              id="comment"
              rows="4"
              class="textarea-modal"
              placeholder="Masukkan isi diskusi"
              required
            ></textarea>
          </div>,
          <div className="flex flex-col w-full gap-1">
            <span class="text-p2">Category</span>
            <ul className="flex flex-row text-h7 rounded-lg w-fit overflow-hidden">
              <SelectCategory style="category" post={1} />
            </ul>
          </div>,
        ]}
      ></Modal>
    </>
  );
}

export default SharingModal;
