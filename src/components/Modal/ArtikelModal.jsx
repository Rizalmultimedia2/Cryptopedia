import React from "react";
import Modal from "./Modal";
import ItemModal from "./ItemModal";

function ArtikelModal({ name, title, icon }) {
  return (
    <>
      <Modal
        icon={icon}
        name={name}
        button={1}
        size={700}
        title={title}
        Children={[
          <ItemModal
            icon={1}
            label="Judul"
            id="title"
            type="text"
            placeholder="Masukkan judul"
          />,
          <div className="w-full">
            <label For="level">Level</label>
            <select name="" id="level" className="form-input w-full">
              <option value="" disabled selected hidden>
                Level
              </option>
              <option value="Pemula">Pemula</option>
              <option value="Menengah">Menengah</option>
              <option value="Ahli">Ahli</option>
            </select>
          </div>,
          <div>
            <label for="body" class="text-p2">
              Konten
            </label>
            <textarea
              id="body"
              rows="8"
              class="textarea-modal"
              placeholder="Isi Konten"
              required
            ></textarea>
          </div>,
          <ItemModal label="Gambar" id="gambar" type="image" />,
        ]}
      ></Modal>
    </>
  );
}

export default ArtikelModal;
