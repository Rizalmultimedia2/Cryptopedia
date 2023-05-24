import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
import { GetSignUpErrorMessage, SignUp, auth, db } from "../../firebaseConfig";
import Footer from "@/components/Footer";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import FormError from "@/components/Artikel/Form/Error";
import { FiEyeOff, FiEye } from "react-icons/fi";

function daftar() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    nama: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const pass = useRef({});
  pass.current = watch("password");

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const res = await SignUp(formValues.email, formValues.password);

      // await setDoc(doc(db, "Accounts", res.user.uid), {
      //   id: res.user.uid,
      //   email: formValues.email,
      // });

      await Swal.fire({
        icon: "success",
        title: "Berhasil Mendaftar",
        text: "Silahkan isi lengkapi data",
      });

      setLoading(false);
      router.push("/lengkapidata");
    } catch (error) {
      const errorMessage = error.message;
      const message = GetSignUpErrorMessage(error.code);
      await Swal.fire({
        icon: "error",
        title: `${message}`,
      });

      console.log(message);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x ">
        <div className="bg-primary-4 lg:visible invisible"></div>
        <div className="flex-center min-h-screen">
          <div className="form">
            <Image
              src="/image/Logo.svg"
              height={120}
              width={133}
              alt="Cryptopedia"
            />
            <h1 className="text-primary-1 text-h5">Daftar</h1>
            {/* <form onSubmit={handleClick} className="flex flex-col gap-[20px]"> */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[20px]"
            >
              <label htmlFor="nama" className="sr-only"></label>
              <input
                type="text"
                id="nama"
                className="form-input"
                placeholder="Masukkan nama lengkap"
                value={formValues.nama}
                {...register("nama", { required: true })}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
              />
              <FormError error={errors.nama} />

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

              <div className="flex-center-between flex-row border border-gray-400 rounded-lg ">
                <label
                  htmlFor="passwordConfirmation"
                  className="sr-only"
                ></label>
                <input
                  type={showCPassword ? "text" : "password"}
                  id="passwordConfirmation"
                  className="form-input-lessborder"
                  placeholder="Konfirmasi kata sandi"
                  value={formValues.passwordConfirmation}
                  {...register("passwordConfirmation", {
                    required: true,
                    minLength: 8,
                    validate: (value) => value === pass.current,
                  })}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
                {showCPassword ? (
                  <FiEye
                    className="mr-3 cursor-pointer"
                    onClick={() => setShowCPassword(!showCPassword)}
                  />
                ) : (
                  <FiEyeOff
                    className="mr-3 cursor-pointer"
                    onClick={() => setShowCPassword(!showCPassword)}
                  />
                )}
              </div>
              <FormError error={errors.passwordConfirmation} />

              <button type="submit" className="button-input-1">
                Daftar
              </button>
            </form>
            <p className="text-p4 font-medium">
              Sudah punya akun?
              <a href="#" className="text-primary-1 font-bold">
                {" "}
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default daftar;
