import React from "react";
import { useForm } from "react-hook-form";
import FormError from "../Form/Error";

function ItemModal({ id, type, placeholder, label, setform }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="">
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="form-input-modal"
          placeholder={placeholder}
          required
          onChange={(e) =>
            setform((prev) => ({
              ...prev,
              [e.target.id]: e.target.value,
            }))
          }
        />
      </div>
    </>
  );
}

export default ItemModal;
