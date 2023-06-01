import { useUser } from "@/context/user";
import { useRouter } from "next/router";
import { SignOut } from "../../firebaseConfig";

const withProtectedAdmin = (Pages) => {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (!uid) {
      router.replace("/admin/masuk");
      return <></>;
    } else if (uid != "Oc5dUk0U7xWVBA3eiOCoFJ6hjc52") {
      SignOut();
      router.replace("admin/masuk");
    }

    return <Pages {...props} />;
  };

  WrappedComponent.displayName = `withProtectedAdmin(${
    Pages.displayName || Pages.name || "Component"
  })`;

  return WrappedComponent;
};

export default withProtectedAdmin;
