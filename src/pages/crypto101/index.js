import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import Banner from "@/components/Banner";
import SelectLevel from "@/components/Select/SelectLevel";
import { getAllDataFromFirestore } from "../api/getData";
import withProtected from "@/hoc/withProtected";
import { db } from "../../../firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import Loading from "@/components/Loading";
import CryptoMateriDetail from "@/components/Crypto101/CryptoMateriDetail";
import { useRouter } from "next/router";

function IndexMateri() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [atvisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [materiCrypto, setMateriCrypto] = useState({});
  const [isMateri, setIsMateri] = useState(false);
  const router = useRouter();
  const { materi } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let dataQuery;
        if (filter) {
          const q = query(
            collection(db, "Starting"),
            where("level", "==", filter)
          );
          dataQuery = q;
        } else {
          const q = query(
            collection(db, "Starting"),
            orderBy("starting_title", "asc"),
            limit(100)
          );
          dataQuery = q;
        }

        const dataList = await getAllDataFromFirestore(dataQuery);
        setLoading(false);
        setData(dataList);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [filter]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Starting", materi);
        const getData = await getDoc(docRef);

        if (getData.exists()) {
          setMateriCrypto(getData.data());
          setIsMateri(true);
          setVisible(true);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [materi]);

  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="md:text-h2 text-h3">Crypto 101</h3>
          <div className="flex justify-between">
            <span className="text-p21 max-w-[800px]">
              Tempat belajar istilah dan pemahaman awal tentang cryptocurrency
              untuk pemula
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <ul className="flex flex-row flex-wrap text-h6 rounded-lg w-fit overflow-hidden">
              <SelectLevel style="category" filter={handleFilter} />
            </ul>
            <div>
              <Searchbar placeholder="Cari Materi" />
            </div>
            <div className="flex flex-col gap-5 lg:max-h-screen max-h-[300px] overflow-y-scroll overflow-x-visible w-full p-2 ">
              {isLoading && <Loading />}
              {data.map((item, index) => (
                <CryptoMateri
                  key={index}
                  title={item.starting_title}
                  level={item.level}
                  body={item.starting_body}
                  id={item.id}
                  setVisible={setVisible}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            {atvisible ? (
              <>
                {isMateri ? (
                  <div>
                    <CryptoMateriDetail
                      title={materiCrypto.starting_title}
                      level={materiCrypto.level}
                      body={materiCrypto.starting_body}
                      id={materiCrypto.id}
                      visible={atvisible}
                      setVisible={setVisible}
                    />
                  </div>
                ) : null}
              </>
            ) : null}

            <div>
              <MyBookmark />
            </div>
            <div>
              <Banner
                title="Sudah siap belajar crypto lebih lanjut?"
                body="Bergabung dalam diskusi untuk tingkatkan pemahamanmu didalam cryptocurrency"
                link="/cryptosharing"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtected(IndexMateri);
