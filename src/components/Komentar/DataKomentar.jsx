import { collection, doc, getDoc, query, where } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import Loading from "../Loading";
import { FiTrash } from "react-icons/fi";
import { useUser } from "@/context/user";
import DeleteModal from "../Modal/DeleteModal";

function DataKomentar({ comment, user_id, post_id, date, comment_id }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [own, setOwn] = useState(false);
  const user = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(doc(db, "Users", user_id));
      setIsLoading(true);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("Document not found!");
      }
    };
    setIsLoading(false);
    fetchData();
  }, [user_id]);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Users", user.uid);
      const setDoc = await getDoc(docRef);
      const docSet = setDoc.data().comments;
      if (Array.isArray(docSet)) {
        setOwn(docSet.includes(comment_id));
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col border rounded-[10px] border-gray-4 p-[10px] gap-[10px]">
        {data ? (
          <div className="flex flex-col gap-2">
            <div className="flex w-full gap-[10px]">
              <Image
                src={`/avatar/${data.avatar_id}.svg`}
                height={40}
                width={40}
                className="rounded-[100px]"
                alt="profile"
              />
              <div className="w-full">
                <div className="flex justify-between text-p4 min-h-[20px]">
                  <span className="text-h6">{data.fullname}</span>
                  {own ? (
                    <DeleteModal
                      nameTable="Comments"
                      button={2}
                      title="Hapus Komentar"
                      post_id={comment_id}
                      type="deleteModal"
                      nama="Komentar"
                    />
                  ) : null}
                </div>
                <div className="flex justify-between text-p4">
                  <span className="">@{data.username}</span>
                  <span>{date}</span>
                </div>
              </div>
            </div>
            <div className="px-[10px] py-[5px] bg-[#CDEDE6]/25 rounded-lg">
              {comment}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default DataKomentar;
