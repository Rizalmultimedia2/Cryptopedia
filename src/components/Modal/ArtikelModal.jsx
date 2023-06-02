import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import ItemModal from "./ItemModal";

function ArtikelModal({ name, title, icon }) {
  const [formValues, setFormValues] = useState({
    articles_title: "",
    articles_body: "",
    level: 1,
    likes: 0,
    dislikes: 0,
    user_likes: [],
    user_dislike: [],
    image_url: "",
  });

  useEffect(() => {
    console.log("setfomvalues", formValues);
  }, [formValues]);

  return (
    <>
      <Modal
        icon={icon}
        name={name}
        button={1}
        size={700}
        title={title}
        data={formValues}
        alert="Artikel"
        nameTable="Articles"
        Children={[
          <ItemModal
            key="item1"
            label="Judul"
            id="articles_title"
            type="text"
            placeholder="Masukkan judul"
            setform={setFormValues}
          />,
          <div className="w-full" key="item2">
            <label htmlFor="level">Level</label>
            <select
              name=""
              id="level"
              className="form-input w-full"
              defaultValue={0}
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
          </div>,
          <div key="item3">
            <label htmlFor="articles_body" className="text-p2">
              Konten
            </label>
            <textarea
              id="articles_body"
              rows="8"
              className="textarea-modal"
              placeholder="Masukkan isi article"
              required
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  [e.target.id]: e.target.value,
                }))
              }
            ></textarea>
          </div>,
          <ItemModal
            key="item4"
            label="Gambar"
            id="image_url"
            type="text"
            placeholder="Masukkan url gambar"
            setform={setFormValues}
          />,
        ]}
      ></Modal>
    </>
  );
}

export default ArtikelModal;
