import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import InputForm from "@/components/InputForm";
import { FiChevronLeft } from "react-icons/fi";
import withProtected from "@/hoc/withProtected";
import Link from "next/link";
import { auth } from "../../firebaseConfig";

function ubahkatasandi() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      console.log("Konfirmasi password tidak cocok");
      return;
    }

    try {
      const user = auth.currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        oldPassword
      );
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);
      console.log("Password berhasil diubah");
      // Tambahkan logika atau tindakan lanjutan setelah password berhasil diubah
    } catch (error) {
      console.log("Gagal mengubah password", error);
      // Tambahkan penanganan kesalahan yang sesuai
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
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Ubah Kata Sandi</h1>
            <div className="flex flex-col gap-[20px]">
              <input
                type="password"
                placeholder="Masukkan kata sandi lama"
                className="form-input"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Masukkan kata sandi baru"
                className="form-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Masukkan konfirmasi kata sandi baru"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                className="button-input-1"
                onClick={handleChangePassword}
              >
                Ubah kata sandi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withProtected(ubahkatasandi);
