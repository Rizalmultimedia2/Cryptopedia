import Footer from "@/components/Footer";
import AdminHeader from "@/components/Header/AdminHeader";
import Thead from "@/components/Table/Thead";
import Titems from "@/components/Table/Titems";
import withProtectedAdmin from "@/hoc/withProtectedAdmin";
import React from "react";

function daftarlaporan() {
  return (
    <>
      <AdminHeader />
      <div className="flex flex-col container container-x min-h-screen md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="flex-center flex-col gap-5">
          <h3 className="text-h3">Daftar Laporan Crypto Sharing</h3>
          <div className="flex overflow-x-auto max-w-[1200px] w-full">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-p3 text-black bg-primary-4 ">
                <tr>
                  <Thead
                    head={[
                      "No",
                      "Status",
                      "Waktu",
                      "Akun Pelapor",
                      "Alasan",
                      "Aksi",
                    ]}
                  />
                </tr>
              </thead>
              <tbody>
                <Titems
                  no={1}
                  items={["test", "10 jam yang lalu", "@rizal", "karena.."]}
                />
                <Titems
                  no={1}
                  items={["test", "10 jam yang lalu", "@rizal", "karena.."]}
                />
                <Titems
                  no={1}
                  items={["test", "10 jam yang lalu", "@rizal", "karena.."]}
                />
                <Titems
                  no={1}
                  items={["test", "10 jam yang lalu", "@rizal", "karena.."]}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtectedAdmin(daftarlaporan);
