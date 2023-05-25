import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import TrendingForum from "@/components/Crypto Sharing/TrendingForum";
import SelectCategory from "@/components/Select/SelectCategory";
import Banner from "@/components/Banner";
import { DataForum, testTing } from "@/Utils/CryptoSharing";
import SharingModal from "@/components/Modal/SharingModal";
import withProtected from "@/hoc/withProtected";
import { getAllDataFromFirestore } from "../api/getData";

function artikel() {
  const [data, setData] = useState([]);
  const getData = "Sharing";

  useEffect(() => {
    const fetchData = async () => {
      const dataList = await getAllDataFromFirestore(getData);
      setData(dataList);
    };
    fetchData();
  }, []);
  console.log("apakah masuk datanya", data);

  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-h3">Crypto Sharing</h3>
          <div className="flex justify-between">
            <span className="text-p1">
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
              <SelectCategory style="category" post={0} />
            </ul>
            <div>
              <Searchbar placeholder="Cari Diskusi" />
            </div>
            <div className="flex flex-col gap-5">
              {data.map((item) => (
                <>
                  {console.log(item.id)}
                  <CryptoSharing
                    title={item.sharing_title}
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
                  />
                </>
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

export default artikel;
