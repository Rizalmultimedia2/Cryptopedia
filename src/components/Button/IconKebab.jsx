import React, { useEffect, useState } from "react";
import { GoKebabVertical } from "react-icons/go";
import DeleteModal from "../Modal/DeleteModal";
import LaporkanDiskusi from "../Crypto101/LaporkanDiskusi";
import { useUser } from "@/context/user";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import EditModal from "../Modal/EditModal";

function IconKebab({ post_id, card }) {
  const [isVisible, setIsVisible] = useState(false);
  const [own, setOwn] = useState(false);
  const user = useUser();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user.uid) {
        const docRef = doc(db, "Users", user.uid);
        const setDoc = await getDoc(docRef);
        const docSet = setDoc.data().created_sharing;
        if (Array.isArray(docSet)) {
          setOwn(docSet.includes(post_id));
        }
      }
    };

    fetchData();
  }, [isVisible]);

  return (
    <>
      <GoKebabVertical className="cursor-pointer" onClick={handleClick} />
      {isVisible ? (
        <>
          <div className="relative bg-black z-40">
            <div className="absolute top-[120%] right-[100%] z-40">
              <div className="flex flex-col bg-primary-1 text-light-color text-p2 font-medium px-4 py-3 gap-1 rounded-l ">
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                  <LaporkanDiskusi title="Laporkan Diskusi" />
                </div>
                {own ? (
                  <>
                    {card == "y" ? null : (
                      <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <EditModal
                          name="Edit diskusi"
                          title="Edit Diskusi"
                          button={0}
                          Icon={0}
                          post_id={post_id}
                        ></EditModal>
                      </div>
                    )}
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                      <DeleteModal
                        nameTable="Sharing"
                        button={0}
                        title="Hapus Diskusi"
                        post_id={post_id}
                        type="deleteModal"
                        nama="Sharing"
                      />
                    </div>{" "}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default IconKebab;
