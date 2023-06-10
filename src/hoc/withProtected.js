import { useUser } from "@/context/user";
import { useRouter } from "next/router";
import { SignOut, db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const withProtected = (Pages) => {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;
    const currentRouter = router.pathname;
    // const [userData, setUserData] = useState();

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const userQuery = doc(db, "Users", uid);
          const userSnapshot = await getDoc(userQuery);
          if (!userSnapshot.data().username) {
            if (currentRouter == "/lengkapidata") {
              // await router.replace("/lengkapidata");
            } else {
              await Swal.fire({
                icon: "warning",
                title: "Lengkapi data terlebih dahulu!",
              });
              router.replace("/lengkapidata");
            }
          } else if (
            userSnapshot.data().username &&
            currentRouter == "/lengkapidata"
          ) {
            router.replace("/beranda");
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      };

      if (uid) {
        fetchUserData();
      }
    }, [uid]);

    if (!uid) {
      router.replace("/masuk");
      return <></>;
    } else if (uid == "Oc5dUk0U7xWVBA3eiOCoFJ6hjc52") {
      SignOut();
      router.replace("/masuk");
      return <></>;
    }

    return <Pages {...props} />;
  };

  WrappedComponent.displayName = `withProtected(${
    Pages.displayName || Pages.name || "Component"
  })`;

  return WrappedComponent;
};

export default withProtected;
