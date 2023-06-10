import { FiChevronLeft } from "react-icons/fi";
import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import Banner from "@/components/Banner";
import { useRouter } from "next/router";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import withProtected from "@/hoc/withProtected";
import Loading from "@/components/Loading";
import CryptoSharingDetail from "@/components/Crypto Sharing/CryptoSharingDetail";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import Komentar from "@/components/Komentar/Komentar";
import {
  countDocument,
  getAllDataFromFirestore,
  getOneDataFromFirestore,
} from "../api/getData";
import { useUser } from "@/context/user";
import Link from "next/link";
import Swal from "sweetalert2";
import Head from "next/head";
import { useForm } from "react-hook-form";
import FormError from "@/components/Form/Error";

function DetailSharing() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const user = useUser();
  const [dataList, setDataList] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    try {
      const combineData = {
        ...comment,
        user_id: user.uid,
        sharing_id: id,
        date: serverTimestamp(),
      };

      const collectionRef = collection(db, "Comments");
      const docRef = await addDoc(collectionRef, combineData);
      const getId = docRef.id;

      await updateDoc(doc(db, "Comments", getId), {
        id: getId,
      });
      console.log(
        "Data berhasil ditambahkan ke Firestore dengan ID:",
        docRef.id
      );

      await setDoc(
        doc(db, "Users", user.uid),
        {
          comments: arrayUnion(docRef.id),
        },
        { merge: true }
      );

      setLoading(false);
      router.reload();
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      console.error(
        "Terjadi kesalahan saat menambahkan data ke Firestore:",
        error
      );
      // // const message = GetSignUpErrorMessage(error.code);
      // // console.log(message);
      // await Swal.fire({
      //   icon: "error",
      //   title: `${message}`,
      // });
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentCount = await countDocument(id);
        const documentRef = doc(db, "Sharing", id);
        const comments = {
          total_comments: documentCount,
        };
        await updateDoc(documentRef, comments);

        const dataList = await getOneDataFromFirestore("Sharing", id);
        setData(dataList);

        if (id) {
          const q = query(
            collection(db, "Users"),
            where("created_sharing", "array-contains", id)
          );
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            const user = doc.data();
            setDataUser(user);
          });
        }

        const qy = query(collection(db, "Sharing"), limit(2));
        const list = await getAllDataFromFirestore(qy);
        setDataList(list);
        setLoading(false);
      } catch (error) {
        console.log("errornya", error);
        await Swal.fire({
          icon: "error",
          title: `Tidak ada dokumen sharing`,
        });
        router.push("/cryptosharing");
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Head>
        <title>Cryptopedia | Crypto sharing</title>
        <meta name="description" content="" />
        <link rel="icon" href="/image/Logo.svg" />
      </Head>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-6">
        <Link href="/cryptosharing">
          <FiChevronLeft className="inline" />
          <span>Kembali</span>
        </Link>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-4">
            {isLoading && <Loading />}
            {data ? (
              <CryptoSharingDetail
                title={data.sharing_title}
                username={dataUser.username}
                tanggal={data.date}
                body={data.sharing_body}
                kategori={data.category}
                tag={data.tags}
                like={data.likes}
                dislike={data.dislikes}
                comment={data.total_comments}
                id={id}
                line=""
              />
            ) : null}

            <h5 className="text-h5">Komentar</h5>
            <div>
              <form
                className="flex flex-row gap-5 items-start"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="w-full flex flex-col gap-6">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="2"
                    className="text-sm py-2 px-4 w-full basis-5/6 bg-white rounded-lg border border-gray-4 text-black ring-focus"
                    placeholder="Berikan komentar"
                    required
                    {...register("comment", {
                      required: true,
                      minLength: 2,
                    })}
                    onChange={(e) =>
                      setComment((prev) => ({
                        ...prev,
                        [e.target.id]: [e.target.value],
                      }))
                    }
                  ></textarea>
                  <FormError error={errors.comment} />
                </div>
                <button
                  type="submit"
                  className="button-normal basis-1/6 h-fit w-fit"
                >
                  Komentar
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-4 max-h-[700px] overflow-y-scroll overflow-x-visible">
              <Komentar idPost={id} />
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <MyBookmark />
            </div>
            <div>
              <Banner
                title="Baru Belajar Crypto?"
                body="Pelajari crypto 101 agar kamu lebih siap dalam berdiskusi"
                link="/crypto101"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-h4">Forum Lainnya</h4>
          <div className="flex lg:flex-row flex-col gap-6">
            {dataList.map((item, index) => (
              <CryptoSharing
                title={item.sharing_title}
                key={index}
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
      </div>
      <Footer />
    </>
  );
}

export default withProtected(DetailSharing);
