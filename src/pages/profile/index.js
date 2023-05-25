import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import { DataForum } from "@/Utils/CryptoSharing";
import Image from "next/image";
import InputForm from "@/components/InputForm";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useUser } from "@/context/user";
import withProtected from "@/hoc/withProtected";

function index() {
  const user = useUser();
  const [data, setData] = useState([]);
  //   console.log({ id });

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(doc(db, "Users", user.uid));

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("Document not found!");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex-center flex-row gap-8 flex-wrap">
          <div className="relative h-[200px] w-[200px] rounded-full">
            <Image
              src="/image/artikel.png"
              fill
              className="rounded-full object-cover border-2 border-primary-1"
              alt="Profile"
            />
          </div>
          <div className="flex lg:flex-row p-3 gap-7 border-2 border-primary-1 rounded-xl flex-col">
            <div className="flex flex-col gap-3">
              <h5 className="text-h5">Account Data</h5>
              <div className="form-input bg-gray-2">@{data.username}</div>
              <div className="form-input bg-gray-2">{data.email}</div>
              <a className="button-normal w-fit" href="3">
                Ubah kata sandi
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="text-h5">Personal data</h5>
              <form action="" className="flex flex-col gap-3">
                <InputForm
                  id="fullname"
                  type="text"
                  placeholder={data.fullname}
                />
                <label htmlFor="trader" className="sr-only"></label>
                <select
                  name=""
                  id="trader"
                  className="form-input"
                  defaultValue={data.trader}
                  value={data.trader}
                >
                  <option value="" disabled selected hidden>
                    Trader
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <button type="submit" className="button-normal w-fit">
                  Edit profile
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <div className="flex flex-row justify-between">
              <h4 className="text-h4 text-black">My Post</h4>
              <Searchbar placeholder="Cari postingan" />
            </div>
            <div className="flex flex-col gap-5">
              {/* {DataForum.map((item) => (
                <CryptoSharing
                  title={item.title}
                  username={item.username}
                  waktu={item.waktu}
                  tanggal={item.tanggal}
                  body={item.body}
                  kategori={item.kategori}
                  tag={item.tag}
                  like={item.jumlah_like}
                  dislike={item.jumlah_dislike}
                  comment={item.jumlah_comment}
                />
              ))} */}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <MyBookmark />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default withProtected(index);
