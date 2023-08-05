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
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import Loading from "@/components/Loading";
import CryptoMateriDetail from "@/components/Crypto101/CryptoMateriDetail";
import { useRouter } from "next/router";
import Image from "next/image";
import { format } from "date-fns";
import Head from "next/head";

function IndexMateri() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [atvisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [materiCrypto, setMateriCrypto] = useState({});
  const [isMateri, setIsMateri] = useState(false);
  const router = useRouter();
  const { materi } = router.query;
  const [searchQuery, setSearchQuery] = useState([]);
  const [getTitle, setTitle] = useState({});

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
        const titles = dataList.map((data) => data.starting_title);
        setTitle(titles);
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

  const handleSearchClick = async () => {
    try {
      if (searchQuery == "") {
        const q = query(
          collection(db, "Starting"),
          orderBy("starting_title", "asc"),
          limit(100)
        );
        const dataList = await getAllDataFromFirestore(q);
        setData(dataList);
      } else {
        const dataList = [];
        const filterBySearch = [];
        for (const item of getTitle) {
          if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
            const q = query(
              collection(db, "Starting"),
              where("starting_title", "==", item)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              const convertedDate = data.date.toDate();
              const formattedDate = format(convertedDate, "dd/MM/yyyy HH:mm");

              dataList.push({
                id: doc.id,
                ...data,
                date: formattedDate,
              });
            });
            filterBySearch.push(item);
          }
        }
        setData(dataList);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Head>
        <title>Cryptopedia | Crypto 101</title>
        <meta name="description" content="" />
        <link rel="icon" href="/image/Logo.svg" />
      </Head>
      <Header />
      <div className="flex container container-x flex-col mt-[20px] gap-8">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3 className="md:text-h2 text-h3">Crypto 101</h3>
            <div className="flex justify-between">
              <span className="text-p21 max-w-[800px] ">
                Tempat belajar istilah dan pemahaman awal tentang cryptocurrency
                untuk pemula
              </span>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src="/image/crypto101.svg"
              height={250}
              width={300}
              alt="Cryptopedia"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <ul className="flex flex-row flex-wrap text-h6 rounded-lg w-fit overflow-hidden">
              <SelectLevel style="category" filter={handleFilter} />
            </ul>
            <div>
              <Searchbar
                placeholder="Cari Materi"
                onChange={(e) => setSearchQuery(e.target.value)}
                searchQuery={searchQuery}
                handleSearchClick={handleSearchClick}
              />
            </div>
            <div className="flex flex-col gap-5 lg:max-h-screen max-h-[600px] overflow-y-scroll overflow-x-visible w-full p-2 ">
              {isLoading && <Loading />}
              {data && data.length ? (
                data.map((item, index) => (
                  <CryptoMateri
                    key={index}
                    title={item.starting_title}
                    level={item.level}
                    body={item.starting_body}
                    id={item.id}
                    setVisible={setVisible}
                  />
                ))
              ) : (
                <div className="flex-center flex-col col-span-3 min-">
                  <Image
                    src="/empty_state/no_search.svg"
                    width={350}
                    height={200}
                    alt="no-bookmark"
                    className="my-1 mt-4"
                  />
                  <p className="text-p21">Tidak ada hasil pencarian</p>
                </div>
              )}
            </div>
          </div>
          <div
            className={`lg:col-span-3 flex flex-col gap-5 ${
              atvisible ? "h-fit transition-all duration-300" : ""
            }`}
          >
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
