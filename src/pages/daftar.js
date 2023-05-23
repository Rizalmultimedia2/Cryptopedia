import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import Footer from "@/components/Footer";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

function daftar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    nama: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      formValues.nama !== "" &&
      formValues.email !== "" &&
      formValues.password !== "" &&
      (formValues.passwordConfirmation !== "" && formValues.password) ==
        formValues.passwordConfirmation
    ) {
      setLoading(true);

      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          formValues.email,
          formValues.password
        );

        await setDoc(doc(db, "Accounts", res.user.uid), {
          id: res.user.uid,
          email: formValues.email,
          // password: res.user.password,
        });

        Swal.fire({
          icon: "success",
          title: "Berhasil Mendaftar",
          text: "Silahkan isi lengkapi data",
        });

        setLoading(false);
        router.push("/lengkapidata");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage + errorCode);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x ">
        <div className="bg-primary-4 lg:visible invisible"></div>
        <div className="flex-center min-h-screen">
          <div className="form">
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Daftar</h1>
            <form onSubmit={handleClick} className="flex flex-col gap-[20px]">
              <label htmlFor="nama" className="sr-only"></label>
              <input
                type="text"
                id="nama"
                className="form-input"
                placeholder="Masukkan nama lengkap"
                value={formValues.nama}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
              />

              <label htmlFor="email" className="sr-only"></label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Masukkan email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
              />

              <label htmlFor="password" className="sr-only"></label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Kata sandi"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
              />

              <label htmlFor="passwordConfirmation" className="sr-only"></label>
              <input
                type="password"
                id="passwordConfirmation"
                className="form-input"
                placeholder="Konfirmasi kata sandi"
                value={formValues.passwordConfirmation}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
              />

              <button
                type="submit"
                className="button-input-1"
                // onClick={() => router.push("/lengkapidata")}
              >
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
