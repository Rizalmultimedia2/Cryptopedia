import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import Image from "next/image";
import { db } from "../../../firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useUser } from "@/context/user";
import withProtected from "@/hoc/withProtected";
import { getAllDataFromFirestore } from "../api/getData";
import FormError from "@/components/Form/Error";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function Index() {
  const user = useUser();
  const router = useRouter();
  const [name, setName] = useState();
  const [data, setData] = useState([]);
  const [myPost, setMyPost] = useState([]);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // if (/\s/.test(name)) {
    //   setError("name", {
    //     type: "noSpace",
    //   });
    // } else {
    const data = { fullname: name };
    const updateName = doc(db, "Users", user.uid);
    await updateDoc(updateName, data);

    await Swal.fire({
      icon: "success",
      title: "Berhasil Update Profil",
    });

    router.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(doc(db, "Users", user.uid));
      const q = query(
        collection(db, "Sharing"),
        where("user_id", "==", user.uid)
      );
      const dataList = await getAllDataFromFirestore(q);
      setMyPost(dataList);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("Document not found!");
      }
    };

    fetchData();
  }, []);

  console.log("Postingan saya", myPost);
  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex-center flex-row gap-8 flex-wrap">
          <div className="relative h-[200px] w-[200px] rounded-full">
            <Image
              src={`/avatar/${data.avatar_id}.svg`}
              fill
              className="rounded-full object-cover border-2 border-primary-1"
              alt="Profile"
            />
          </div>
          <div className="flex lg:flex-row lg:p-3 p-8 gap-7 border-2 border-primary-1 rounded-xl flex-col">
            <div className="flex flex-col gap-3">
              <h5 className="text-h5">Account Data</h5>
              <div className="flex flex-col gap-6">
                <div className="form-input-profile bg-gray-2">
                  @{data.username}
                </div>
                <div className="form-input-profile bg-gray-2">{data.email}</div>
                <a className="button-normal w-fit -mt-2" href="3">
                  Ubah kata sandi
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="text-h5">Personal data</h5>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <label htmlFor="name" className="sr-only"></label>
                <input
                  type="text"
                  id="name"
                  className="form-input-profile"
                  placeholder={data.fullname}
                  value={name}
                  {...register("name", {
                    required: true,
                    minLength: 7,
                    maxLength: 25,
                  })}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormError error={errors.name} />

                <label htmlFor="trader" className="sr-only"></label>
                <select
                  name=""
                  id="trader"
                  className="form-input-profile"
                  defaultValue={data.trader}
                  value={data.trader}
                >
                  <option value="" disabled selected hidden>
                    Trader
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <button type="submit" className="button-normal w-fit -mt-2">
                  Edit profile
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <div className="flex flex-row justify-between flex-wrap gap-3">
              <h4 className="text-h4 text-black">My Post</h4>
              <Searchbar placeholder="Cari postingan" />
            </div>
            <div className="flex flex-col gap-5">
              {myPost.map((item, I) => (
                <CryptoSharing
                  title={item.sharing_title}
                  key={I}
                  username="Rizal Herliansyah"
                  waktu="nanti"
                  tanggal={item.date}
                  body={item.sharing_body}
                  kategori={item.category}
                  tag={item.tags}
                  like={item.like}
                  dislike={item.dislike}
                  comment={item.total_comments}
                  id={item.id}
                  line="yes"
                />
              ))}
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

export default withProtected(Index);
