import React from "react";
import Modal from "@/components/Modal/Modal";
import ItemModal from "@/components/Modal/ItemModal";
import SelectLevel from "../Select/SelectLevel";

function MateriModal({ name, icon, button, title }) {
  return (
    <>
      <Modal
        icon={icon}
        name={name}
        button={button}
        size={550}
        title={title}
        Children={[
          <ItemModal
            label="Judul"
            key="item1"
            id="title"
            type="text"
            placeholder="Masukkan judul"
          />,
          <div key="item2">
            <label for="comment" class="text-p2">
              Masukkan isi materi
            </label>
            <textarea
              id="comment"
              rows="4"
              class="textarea-modal"
              placeholder="Masukkan isi diskusi"
              required
            ></textarea>
          </div>,
          <div className="flex flex-col w-full gap-1" key="item3">
            <span class="text-p2">Category</span>
            <ul className="flex flex-row text-h7 rounded-lg w-fit overflow-hidden">
              <SelectLevel style="category" />
            </ul>
          </div>,
        ]}
      ></Modal>
    </>
  );
}

export default MateriModal;
