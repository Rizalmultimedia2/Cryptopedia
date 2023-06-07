import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import TrendingForum from "@/components/Crypto Sharing/TrendingForum";
import SelectCategory from "@/components/Select/SelectCategory";
import Banner from "@/components/Banner";
import SharingModal from "@/components/Modal/SharingModal";
import withProtected from "@/hoc/withProtected";
import { getAllDataFromFirestore } from "../api/getData";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Loading from "@/components/Loading";
import { useUser } from "@/context/user";
import Image from "next/image";
import { format } from "date-fns";

function IndexSharing() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [isLoading, setLoading] = useState(false);
  const user = useUser();
  const [searchQuery, setSearchQuery] = useState([]);
  const [getTitle, setTitle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let dataQuery;
        if (filter <= 3 && filter > 0) {
          const q = query(
            collection(db, "Sharing"),
            where("category", "==", filter)
          );
          dataQuery = q;
        } else if (filter == 4) {
          const q = query(
            collection(db, "Sharing"),
            where("user_id", "==", user.uid)
          );
          dataQuery = q;
        } else {
          const q = query(
            collection(db, "Sharing"),
            limit(100),
            orderBy("date", "desc")
          );
          dataQuery = q;
        }

        const dataList = await getAllDataFromFirestore(dataQuery);
        const titles = dataList.map((data) => data.sharing_title);
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

  const handleSearchClick = async () => {
    try {
      if (searchQuery == "") {
        const q = query(
          collection(db, "Sharing"),
          orderBy("date", "desc"),
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
              collection(db, "Sharing"),
              where("sharing_title", "==", item)
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
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="md:text-h2 text-h3">Crypto Sharing</h3>
          <div className="flex gap-3 justify-between flex-wrap">
            <span className="text-p21 max-w-[800px]">
              Belajar Cryptocurrency lebih mudah dengan berdiskusi
            </span>
            <SharingModal
              name="Buat Diskusi"
              title="Buat Diskusi Baru"
              button={1}
              icon={1}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <div>
              <TrendingForum />
            </div>
            <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-hidden flex-wrap">
              <SelectCategory style="category" post={0} filter={handleFilter} />
            </ul>
            <div>
              <Searchbar
                placeholder="Cari Diskusi"
                onChange={(e) => setSearchQuery(e.target.value)}
                searchQuery={searchQuery}
                handleSearchClick={handleSearchClick}
              />
            </div>
            <div className="flex flex-col gap-5">
              {isLoading && <Loading />}
              {data && data.length ? (
                data.map((item, index) => (
                  <CryptoSharing
                    title={item.sharing_title}
                    key={index}
                    tanggal={item.date}
                    body={item.sharing_body}
                    kategori={item.category}
                    tag={item.tags}
                    likes={item.likes}
                    dislikes={item.dislikes}
                    comment={item.total_comments}
                    id={item.id}
                    line="yes"
                  />
                ))
              ) : (
                <div className="flex-center flex-col">
                  <Image
                    src="/empty_state/no_bookmark.svg"
                    width={300}
                    height={182}
                    alt="no-post"
                  />
                  <p className="text-p1">Tidak ada Postingan</p>
                </div>
              )}
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
      </div>
      <Footer />
    </>
  );
}

export default withProtected(IndexSharing);
