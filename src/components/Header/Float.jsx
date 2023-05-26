import { useUser } from "@/context/user";
import React, { useEffect, useState } from "react";
import { SignOut, db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function Float() {
  const user = useUser();
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(doc(db, "Users", user.uid));

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("Document not found!");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="h-12 w-12 rounded-full bg-primary-1 cursor-pointer"
        onClick={handleClick}
      ></div>
      {isVisible ? (
        <>
          <div className="relative">
            <div className="absolute top-[10px] right-[10px] z-40">
              <div className="flex flex-col min-h-[150px] bg-light-color p-[10px] min-w-[250px] rounded-md shadow-shadows-1 border border-gray-4">
                <div className="flex flex-row gap-4">
                  <div className="rounded-full h-[60px] w-[60px] bg-primary-1"></div>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium">@{data.username}</span>
                    <span className="text-p4 font-semibold">{user.email}</span>
                    <a className="button-normal h-8" href="/profile">
                      Profile
                    </a>
                  </div>
                </div>
                <div className="border border-t-1 my-2"></div>
                <div className="w-full">
                  <button className="button-delete w-full" onClick={SignOut}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Float;
