import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import SelectAvatar from "@/components/Select/SelectAvatar";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useUser } from "@/context/user";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import FormError from "@/components/Form/Error";
import Swal from "sweetalert2";
import withProtected from "@/hoc/withProtected";
import Footer from "@/components/Footer";
import Head from "next/head";

function LengkaiData() {
  const user = useUser();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [formValues, setFormValues] = useState({
    username: "",
    trader: false,
    avatar: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    if (/\s/.test(formValues.username)) {
      setError("username", {
        type: "noSpace",
        message: "Tidak boleh ada spasi",
      });
      return;
    }

    try {
      await setDoc(
        doc(db, "Users", user.uid),
        {
          username: formValues.username,
          trader: formValues.trader,
          avatar_id: formValues.avatar,
        },
        { merge: true }
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil Lengkapi Data",
      });

      setLoading(false);
      router.push("/beranda");
    } catch (error) {
      const errorMessage = error.message;
      // console.log(errorMessage);
      const message = error.code;
      console.log(message);
      await Swal.fire({
        icon: "error",
        title: `${message}`,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Cryptopedia | Lengkapi data</title>
        <meta name="description" content="" />
        <link rel="icon" href="/image/Logo.svg" />
      </Head>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x min-h-[800px]">
        <div className="hidden lg:flex flex-col items-center justify-center">
          <Image
            src="/image/bg_m.svg"
            height={700}
            width={600}
            alt="Cryptopedia"
          />
          <span className="-mt-1">Ilustration by Freepik</span>
        </div>
        <div className="flex-center">
          <div className="form">
            <Image
              src="/image/Logo.svg"
              height={120}
              width={133}
              alt="Cryptopedia"
            />
            <h1 className="text-primary-1 text-h5">Lengkapi data</h1>
            <form
              action=""
              className="flex flex-col gap-[20px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="email" className="sr-only"></label>
              <input
                readOnly
                type="text"
                id="email"
                className="form-input bg-primary-4 placeholder-black pointer-events-none"
                placeholder={user.email}
              />

              <label htmlFor="username" className="sr-only"></label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Masukkan username"
                value={formValues.username}
                {...register("username", { required: true, maxLength: 15 })}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
              />
              <FormError error={errors.username} />

              <label htmlFor="trader" className="sr-only"></label>
              <select
                name=""
                id="trader"
                className="form-input"
                defaultValue=""
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }))
                }
                required
              >
                <option value="" disabled selected hidden>
                  Trader
                </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>

              <div className="w-full flex flex-col gap-4">
                <span>Pilih avatar</span>
                <ul className="flex flex-row w-full justify-between overflow-visible">
                  <SelectAvatar value="avatar1" setAvatar={setFormValues} />
                  <SelectAvatar value="avatar2" setAvatar={setFormValues} />
                  <SelectAvatar value="avatar3" setAvatar={setFormValues} />
                  <SelectAvatar value="avatar4" setAvatar={setFormValues} />
                  <SelectAvatar value="avatar5" setAvatar={setFormValues} />
                  <SelectAvatar value="avatar6" setAvatar={setFormValues} />
                  {console.log(formValues.avatar)}
                </ul>
              </div>
              <button type="submit" className="button-input-1">
                Lengkapi data
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtected(LengkaiData);
