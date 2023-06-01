import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal/Modal";
import ItemModal from "@/components/Modal/ItemModal";
import SelectLevel from "../Select/SelectLevel";

function MateriModal({ name, icon, button, title }) {
  const [num, setNum] = useState(0);
  const [formValues, setFormValues] = useState({
    starting_title: "",
    starting_body: "",
    level: 1,
    user_bookmarked: [],
  });

  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      level: num,
    }));
  }, [num]);

  useEffect(() => {
    console.log("form values", formValues);
  }, [formValues]);

  return (
    <>
      <Modal
        icon={icon}
        name={name}
        button={button}
        size={550}
        title={title}
        alert="Materi"
        data={formValues}
        nameTable="Starting"
        Children={[
          <ItemModal
            label="Judul"
            key="item1"
            id="starting_title"
            type="text"
            placeholder="Masukkan judul"
            setform={setFormValues}
          />,
          <div key="item2">
            <label htmlFor="starting_body" className="text-p2">
              Masukkan isi materi
            </label>
            <textarea
              id="starting_body"
              rows="4"
              className="textarea-modal"
              placeholder="Masukkan isi materi"
              required
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  [e.target.id]: e.target.value,
                }))
              }
            ></textarea>
          </div>,
          <div className="flex flex-col w-full gap-1" key="item3">
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
        ]}
      ></Modal>
    </>
  );
}

export default MateriModal;
