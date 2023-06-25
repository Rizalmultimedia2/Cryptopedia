import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import ItemModal from "./ItemModal";
import Swal from "sweetalert2";

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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
    } else {
      e.target.value = null;
      Swal.fire({
        icon: "error",
        title: "File harus dalam bentuk image",
      });
    }
  };

  return (
    <>
      <Modal
        icon={icon}
        name={name}
        button={1}
        size={700}
        title={title}
        selectedImage={selectedImage}
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
          <div key="item4" className="w-full">
            <label htmlFor="image_url" className="text-p2">
              Gambar
            </label>
            <input
              type="file"
              id="image_url"
              accept="image/*"
              className="form-input"
              required
              onChange={handleImageChange}
            />
          </div>,
        ]}
      ></Modal>
    </>
  );
}

export default ArtikelModal;
