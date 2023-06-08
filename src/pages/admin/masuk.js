import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetSignInErrorMessage, SignIn } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import FormError from "@/components/Form/Error";
import { FiEyeOff, FiEye } from "react-icons/fi";
import withUnProtected from "@/hoc/withUnprotected";

function Masuk() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    try {
      if (formValues.email == "admin@cryptopedia.com") {
        const res = await SignIn(formValues.email, formValues.password);
      }
      await Swal.fire({
        icon: "success",
        title: "Berhasil masuk",
      });

      router.push("/admin/daftarlaporan");
    } catch (error) {
      const message = GetSignInErrorMessage(error.code);
      await Swal.fire({
        icon: "error",
        title: `${message}`,
      });

      console.log("errornya apa", message);
      console.log("errornya apa", error.code);
      console.log("errornya apa", error);
    }
  };

  return (
    <>
      <div className="flex-center container">
        <div className="flex-center min-h-screen">
          <div className="form">
            <Image
              src="/image/Logo.svg"
              height={120}
              width={133}
              alt="cryptopedia"
            />
            <h1 className="text-primary-1 text-h5">Admin</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[20px] w-full"
            >
              <label htmlFor="email" className="sr-only"></label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Masukkan email"
                value={formValues.email}
                {...register("email", { required: true })}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
              />
              <FormError error={errors.email} />
              <div className="flex-center-between flex-row border border-gray-400 rounded-lg ">
                <label htmlFor="password" className="sr-only"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-input-lessborder"
                  placeholder="Kata sandi"
                  value={formValues.password}
                  {...register("password", { required: true, minLength: 8 })}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
                {showPassword ? (
                  <FiEye
                    className="mr-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FiEyeOff
                    className="mr-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <FormError error={errors.password} />
              <button type="submit" className="button-input-1">
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withUnProtected(Masuk);
