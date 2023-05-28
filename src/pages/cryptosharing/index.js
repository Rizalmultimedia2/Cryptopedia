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
import { collection, limit, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Loading from "@/components/Loading";
import { useUser } from "@/context/user";

function cryptoSharing() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [isLoading, setLoading] = useState(false);
  const user = useUser();

  useEffect(() => {
    const fetchData = async () => {
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
        const q = query(collection(db, "Sharing"), limit(100));
        dataQuery = q;
      }

      const dataList = await getAllDataFromFirestore(dataQuery);
      setLoading(false);
      setData(dataList);
    };
    fetchData();
  }, [filter]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-h2">Crypto Sharing</h3>
          <div className="flex justify-between">
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
            <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-hidden">
              <SelectCategory style="category" post={0} filter={handleFilter} />
            </ul>
            <div>
              <Searchbar placeholder="Cari Diskusi" />
            </div>
            <div className="flex flex-col gap-5">
              {isLoading && <Loading />}

              {data.map((item, index) => (
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

export default withProtected(cryptoSharing);
