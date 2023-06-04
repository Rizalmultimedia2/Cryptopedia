import { FiChevronRight } from "react-icons/fi";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import Artikel from "@/components/Artikel/Artikel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { collection, limit, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getAllDataFromFirestore } from "./api/getData";
import Link from "next/link";
import Loading from "@/components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [sharing, setSharing] = useState([]);
  const [artikel, setArtikel] = useState([]);
  const [materi, setMateri] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      AOS.init(
        {
          startEvent: "DOMContentLoaded",
        },
        []
      );

      try {
        setIsLoading(true);
        const q = query(collection(db, "Sharing"), limit(2));
        const dataList = await getAllDataFromFirestore(q);
        setSharing(dataList);

        const qArtikel = query(collection(db, "Articles"));
        const dataListArtikel = await getAllDataFromFirestore(qArtikel);
        const numDocuments = dataListArtikel.length;
        const randomIndex = Math.floor(Math.random() * numDocuments);
        const randomDoc = dataListArtikel[randomIndex];
        setArtikel(randomDoc);
        setIsDataLoaded(true);

        const qMateri = query(collection(db, "Starting"));
        const dataListMateri = await getAllDataFromFirestore(qMateri);
        const num = dataListMateri.length;
        const numRandom = Math.floor(Math.random() * num);
        const numDoc = dataListMateri[numRandom];
        setMateri(numDoc);

        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container container-x flex-center flex-col gap-[100px] overflow-visible ">
        <div className="absolute top-0 overflow-visible h-[2750px] w-full lg:visible invisible pointer-events-none z-0">
          <Image src="/image/bg.svg" className="" fill alt="bg" />
        </div>
        <div className="flex-center flex-col gap-6 max-w-[620px] text-center lg:mt-0 mt-[10px] h-screen max-h-[900px]">
          <h1
            className="lg:text-h1 md:text-h2 text-h3 text-black"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Rumah Diskusi dan Edukasi Cryptocurrency di Indonesia
          </h1>
          <p
            className="lg:text-p1 text-p2"
            data-aos="fade-up"
            data-aos-duration="650"
          >
            Belajar, bertanya, dan saling berbagi ide tentang cryptocurrency
            secara analisa teknikal maupun fundamental
          </p>
          <Link
            className="button-normal"
            href="/cryptosharing"
            data-aos="zoom-in-up"
            data-aos-duration="700"
          >
            Bergabung ke dalam diskusi {""}
            <FiChevronRight />
          </Link>
        </div>
        <div
          className="flex lg:flex-row flex-col lg:gap-[100px] gap-10 lg:items-start items-center z-30 "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex flex-col max-w-[550px] lg:text-left text-center gap-2">
            <h2 className="md:text-h2 text-h4">
              Dengan berbagai fitur yang memudahkan belajar crypto
            </h2>
            <h3 className="lg:text-h3 text-h5">
              Artikel - Crypto 101 Crypto Sharing
            </h3>
          </div>
          <div
            className="max-w-[400px]"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            {isLoading ? (
              <Loading />
            ) : (
              isDataLoaded &&
              artikel && (
                <Artikel
                  body={artikel.articles_body}
                  title={artikel.articles_title}
                  level={artikel.level}
                  date={artikel.date}
                  id={artikel.id}
                  image_url={artikel.image_url}
                />
              )
            )}
          </div>
        </div>
        <div className="flex-center flex-col gap-5 w-full lg:max-w-[900px] z-30 ">
          <h2
            className="md:text-h2 text-h4 max-w-[700px] text-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Diskusi di mana saja dan kapan saja
          </h2>
          <div
            className="flex flex-col gap-6 w-full"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {sharing.map((item, index) => (
              <div className="" key={index}>
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
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:max-w-[1150px] w-full gap-5 xl:items-start items-center lg:text-left text-center z-30">
          <h2
            className="md:text-h2 text-h4 max-w-[770px]"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Masih pemula? tenang! Crypto 101 dan forum diskusi siap membantu
          </h2>
          <div
            className="max-w-[720px] xl:self-end"
            data-aos="fade-left"
            data-aos-duration="950"
          >
            {isLoading ? (
              <Loading />
            ) : (
              <CryptoMateri
                title={materi.starting_title}
                level={materi.level}
                body={materi.starting_body}
                id={materi.id}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3
            className="md:text-h3 text-h5"
            data-aos="zoom-in-up"
            data-aos-duration="700"
          >
            #SemuaPahamCrypto
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
