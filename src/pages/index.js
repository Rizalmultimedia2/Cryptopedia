import { FiChevronRight } from "react-icons/fi";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import Artikel from "@/components/Artikel/Artikel";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container container-x flex-center flex-col gap-[100px]">
        <div className="flex-center flex-col gap-6 max-w-[620px] text-center h-screen max-h-[900px]">
          <h1 className="text-h1 text-black ">
            Rumah Diskusi dan Edukasi Cryptocurrency di Indonesia
          </h1>
          <p className="text-p1">
            Belajar, bertanya, dan saling berbagi ide tentang cryptocurrency
            secara analisa teknikal maupun fundamental
          </p>
          <button className="button-normal">
            Bergabung ke dalam diskusi {""}
            <FiChevronRight />
          </button>
        </div>
        <div className="flex flex-row gap-[100px]">
          <div className="flex flex-col max-w-[550px]">
            <h2 className="text-h2">
              Dengan berbagai fitur yang memudahkan belajar crypto
            </h2>
            <h3 className="text-h3">Artikel - Crypto 101 Crypto Sharing</h3>
          </div>
          <div className="max-w-[400px]">
            <Artikel
              title="Apa itu bitcoin"
              level="Pemula"
              date="12-12-2023"
              body=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum provident libero hic in mollitia placeat, totam vero nam! Velit fuga laudantium sed iusto ea sint ab ducimus ad voluptates perferendis?"
            />
          </div>
        </div>
        <div className="flex-center flex-col gap-5 w-[1150px]">
          <h2 className="text-h2 max-w-[700px] text-center">
            Diskusi di mana saja dan kapan saja
          </h2>
          <div className="max-w-[720px] self-start">
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
          </div>
          <div className="max-w-[720px] self-end">
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
          </div>
        </div>
        <div className="flex flex-col w-[1050px] gap-5">
          <h2 className="text-h2 max-w-[770px]">
            Masih pemula? tenang! Crypto 101 dan forum diskusi siap membantu
          </h2>
          <div className="max-w-[770px] self-end">
            <CryptoMateri
              title="Apa itu arbitrase"
              level={1}
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil libero commodi ipsa mollitia omnis a repellendus ratione hic praesentium pariatur? Libero molestias facilis asperiores cumque modi ratione adipisci nobis expedita obcaecati atque delectus eligendi"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-h3">#SemuaPahamCrypto</h3>
        </div>
      </div>
      {/* CryptoSharing
      CryptoMateri
      Artikel */}
      <Footer />
    </>
  );
}
