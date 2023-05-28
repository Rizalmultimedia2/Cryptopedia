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
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import withProtected from "@/hoc/withProtected";
import Loading from "@/components/Loading";
import CryptoSharingDetail from "@/components/Crypto Sharing/CryptoSharingDetail";
import { useUser } from "@/context/user";
import Komentar from "@/components/Komentar/Komentar";

function detail() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const user = useUser();

  const onSubmit = async (e) => {
    try {
      const combineData = {
        ...comment,
        user_id: user.uid,
        post_id: id,
        date: serverTimestamp(),
      };

      const collectionRef = collection(db, "Comments");
      const docRef = await addDoc(collectionRef, combineData);
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
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      console.error(
        "Terjadi kesalahan saat menambahkan data ke Firestore:",
        error
      );
      // const message = GetSignUpErrorMessage(error.code);
      // console.log(message);
      await Swal.fire({
        icon: "error",
        title: `${message}`,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = doc(db, "Sharing", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("Document not found!");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-6">
        <a href="/cryptosharing">
          <FiChevronLeft className="inline" />
          <span>Kembali</span>
        </a>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-4">
            {isLoading && <Loading />}
            <CryptoSharingDetail
              title={data.sharing_title}
              username={data.username}
              waktu="1 jam yang"
              tanggal="12-12-2023"
              body={data.sharing_body}
              kategori={data.category}
              tag={data.tags}
              like={data.like}
              dislike={data.dislike}
              comment={data.total_comments}
              id={id}
              line=""
            />
            <h5 className="text-h5">Komentar</h5>
            <div>
              <form className="flex flex-row gap-5 items-center">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="2"
                  className="text-sm py-2 px-4 w-full basis-5/6 bg-white rounded-lg border border-gray-4 text-black ring-focus"
                  placeholder="Berikan komentar"
                  required
                  onChange={(e) =>
                    setComment((prev) => ({
                      ...prev,
                      [e.target.id]: [e.target.value],
                    }))
                  }
                ></textarea>
                <button
                  type="button"
                  className="button-normal basis-1/6 h-fit w-fit"
                  onClick={onSubmit}
                >
                  Komentar
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-4">
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
          <div className="flex flex-row gap-6">
            {/* {[1, 2].map((x) => (
              <CryptoSharing
                title="Altcoin apa yang akan terbang"
                username="Rizal Herliansyah Hidayat"
                waktu="1 jam yang lalu"
                tanggal="12-12-2023"
                body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident libero hic in mollitia placeat totam vero nam! Velit fuga laudantium sed iusto ea sint ab ducimus ad voluptates perferendis?"
                kategori={1}
                tag="#USDT #BUSD"
                jumlah_like={10}
                jumlah_dislike={5}
                jumlah_comment={2}
              />
            ))} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtected(detail);
