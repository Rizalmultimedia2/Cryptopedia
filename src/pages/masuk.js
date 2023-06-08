import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
import { GetSignInErrorMessage, SignIn } from "../../firebaseConfig";
import Footer from "@/components/Footer";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import FormError from "@/components/Form/Error";
import { FiEyeOff, FiEye } from "react-icons/fi";
import withUnProtected from "@/hoc/withUnprotected";
import Link from "next/link";

function Masuk() {
  const {
    register,
    handleSubmit,
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

  const onSubmit = async (e) => {
    try {
      const res = await SignIn(formValues.email, formValues.password);

      await Swal.fire({
        icon: "success",
        title: "Berhasil masuk",
      });

      setLoading(false);
      router.push("/beranda");
    } catch (error) {
      const errorMessage = error.message;
      const message = GetSignInErrorMessage(error.code);
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
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x min-h-[800px]">
        <div className=" hidden lg:flex flex-col items-center justify-center">
          <Image
            src="/image/bg_m.svg"
            height={700}
            width={600}
            alt="Cryptopedia"
          />
          <span className="-mt-1">Ilustration by Freepik</span>
        </div>
        <div className="flex-center col-span-1">
          <div className="form">
            <Image
              src="/image/Logo.svg"
              height={120}
              width={133}
              alt="Cryptopedia"
            />
            <h1 className="text-primary-1 text-h5">Masuk</h1>
            <form
              action=""
              className="flex-center flex-col gap-[20px] w-full"
              onSubmit={handleSubmit(onSubmit)}
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
              <div className="flex-center-between flex-row border w-full border-gray-400 rounded-lg ">
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
            <p className="text-p4 font-medium">
              Belum punya akun?
              <Link href="/daftar" className="text-primary-1 font-bold">
                &nbsp; Daftar
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withUnProtected(Masuk);
