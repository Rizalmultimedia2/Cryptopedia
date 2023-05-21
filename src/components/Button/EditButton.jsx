import React from "react";
import { FiEdit } from "react-icons/fi";

function EditButton({ setShow }) {
  const clickHandler = () => {
    setShow(true);
  };
  return (
    <>
      <button
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={clickHandler}
      >
        <FiEdit /> Edit
      </button>
    </>
  );
}

export default EditButton;
