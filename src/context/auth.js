import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { Authentication } from "../../firebaseConfig";
import { InitialUserState, useUser } from "./user";

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;

  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("user is authenticated");
        console.log(user);
        SetUser({ email: user.email, uid: user.uid });
      } else {
        console.log("user is not authenticated");
        SetUser(InitialUserState);
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    InitiateAuthStateChange();
    console.log("testing");
    // return <></>;
  }, []);

  if (isLoading) {
    return <>{/* <Loading /> */}</>;
  }
  return children;
};

export default AuthStateChangeProvider;
