import { useUser } from "@/context/user";
import { useRouter } from "next/router";
import { SignOut } from "../../firebaseConfig";

const withProtected = (Pages) => {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (!uid) {
      router.replace("/masuk");
      return <></>;
    } else if (uid == "Oc5dUk0U7xWVBA3eiOCoFJ6hjc52") {
      SignOut();
      router.replace("/masuk");
    }

    return <Pages {...props} />;
  };

  WrappedComponent.displayName = `withProtected(${
    Pages.displayName || Pages.name || "Component"
  })`;

  return WrappedComponent;
};

export default withProtected;
