import { useUser } from "@/context/user";
import { getOneDataFromFirestore } from "@/pages/api/getData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc } from "firebase/firestore";
import Swal from "sweetalert2";

const withUnProtected = (Pages) => {
  return (props) => {
    const router = useRouter();
    const [data, getData] = useState();
    const user = useUser();
    const { uid } = user;

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const docRef = doc(db, "Users", uid);
    //     const getDoc = await getOneDataFromFirestore(docRef);
    //     getData(getDoc);
    //   };

    //   fetchData();
    // }, []);

    if (uid) {
      router.replace("/beranda");
      return <></>;
    }

    return <Pages {...props} />;
  };
};

export default withUnProtected;
