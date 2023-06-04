import React, { useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import { FiChevronLeft } from "react-icons/fi";
import withProtected from "@/hoc/withProtected";
import Link from "next/link";
import { FiEyeOff, FiEye } from "react-icons/fi";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import FormError from "@/components/Form/Error";
import { useRouter } from "next/router";
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

function ubahkatasandi() {
  const [formValues, setFormValues] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const pass = useRef({});
  pass.current = watch("newpassword");
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        user.email,
        formValues.oldpassword
      );
      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, formValues.newpassword);
      console.log("Password berhasil diubah");
      await Swal.fire({
        icon: "success",
        title: "Berhasil mengubah kata sandi",
      });
      router.replace("/profile");
    } catch (error) {
      console.log("Gagal mengubah password", error);
      await Swal.fire({
        icon: "error",
        title: "Gagal mengubah kata sandi",
        text: "Cek kembali kata sandi lama",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x">
        <div className="bg-primary-4 lg:visible invisible"></div>
        <div className="flex-center min-h-screen">
          <div className="form">
            <Link className="place-self-start px-3" href="/profile">
              <FiChevronLeft className="inline" />
              Kembali
            </Link>
            <Image
              src="/image/Logo.svg"
              height={120}
              width={133}
              alt="cryptopedia"
            />
            <h1 className="text-primary-1 text-h5">Ubah Kata Sandi</h1>
            <form
              className="flex flex-col gap-[20px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex-center-between flex-row border border-gray-400 rounded-lg">
                <label htmlFor="oldpassword" className="sr-only"></label>
                <input
                  type={showOldPassword ? "text" : "password"}
                  id="oldpassword"
                  placeholder="Masukkan kata sandi lama"
                  className="form-input-lessborder"
                  value={formValues.oldpassword}
                  {...register("oldpassword", {
                    required: true,
                    minLength: 8,
                    maxLength: 16,
                  })}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      [e.target.id]: e.target.value,
                    }))
                  }
                />
                {showOldPassword ? (
                  <FiEye
                    className="mr-3 cursor-pointer"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  />
                ) : (
                  <FiEyeOff
                    className="mr-3 cursor-pointer"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  />
                )}
              </div>
              <FormError error={errors.oldpassword} />

              <div className="flex-center-between flex-row border border-gray-400 rounded-lg">
                <label htmlFor="newpassword" className="sr-only"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="newpassword"
                  placeholder="Masukkan kata sandi lama"
                  className="form-input-lessborder"
                  value={formValues.newpassword}
                  {...register("newpassword", {
                    required: true,
                    minLength: 8,
                    maxLength: 16,
                  })}
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
              <FormError error={errors.newpassword} />

              <div className="flex-center-between flex-row border border-gray-400 rounded-lg">
                <label htmlFor="confirmpassword" className="sr-only"></label>
                <input
                  type={showCPassword ? "text" : "password"}
                  id="confirmpassword"
                  placeholder="Masukkan kata sandi lama"
                  className="form-input-lessborder"
                  value={formValues.confirmpassword}
                  {...register("confirmpassword", {
                    required: true,
                    minLength: 8,
                    maxLength: 16,
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
              <FormError error={errors.confirmpassword} />

              <button type="submit" className="button-input-1">
                Ubah kata sandi
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withProtected(ubahkatasandi);
