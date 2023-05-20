import React from "react";
import { FiBookmark } from "react-icons/fi";
import Modal from "@/components/Modal/Modal";
import ItemModal from "@/components/Modal/ItemModal";
import SelectCategory from "../Select/SelectCategory";
import DeleteModal from "../Modal/DeleteModal";
import IconBookmark from "../Button/IconBookmark";

function CryptoMateri({ title, level, body, id }) {
  const getLevel = (level) => {
    switch (level) {
      case 1:
        return "Pemula";
      case 2:
        return "Menengah";
      case 3:
        return "Ahli";
    }
  };

  const getColor = (level) => {
    if (level == 1) {
      return "#29BF9F";
    } else if (level == 2) {
      return "#FACA21";
    } else if (level == 3) {
      return "#E96E70";
    }
  };

  const isAdmin = (id) => {
    if (id == 1) {
      return "visible";
    } else {
      return "none";
    }
  };

  return (
    <>
      <a className="sharing-card" href="#">
        <div className="flex flex-col gap-[5px]">
          <div className="flex text-h5 items-center justify-between">
            <span>{title}</span>
            <div>
              <IconBookmark />
            </div>
          </div>
          <div className="level" style={{ background: getColor(level) }}>
            {getLevel(level)}
          </div>
        </div>
        <div>{body}</div>
        <div className="flex-center gap-3" style={{ display: isAdmin(id) }}>
          <DeleteModal title="Hapus Materi" />

          <Modal
            icon={0}
            name="Buat Diskusi"
            button={1}
            size={550}
            title="Edit"
            Children={[
              <ItemModal
                label="Judul"
                id="title"
                type="text"
                placeholder="Masukkan judul"
              />,
              <ItemModal label="Tag" id="tag" type="text" placeholder="Tag" />,
              <div>
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
                  <SelectCategory value="tren" label="Tren" style="category" />
                  <SelectCategory
                    value="teknikal"
                    label="Teknikal & Fundamental"
                    style="category"
                  />
                  <SelectCategory
                    value="general"
                    label="General"
                    style="category"
                  />
                </ul>
              </div>,
            ]}
          ></Modal>
        </div>
      </a>
    </>
  );
}

export default CryptoMateri;
