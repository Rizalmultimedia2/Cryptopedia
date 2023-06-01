import { useUser } from "@/context/user";
import { useRouter } from "next/router";

const withUnProtected = (Pages) => {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (uid == "Oc5dUk0U7xWVBA3eiOCoFJ6hjc52") {
      router.replace("/admin/daftarlaporan");
    } else if (uid) {
      router.replace("/beranda");
      return <></>;
    }

    return <Pages {...props} />;
  };

  WrappedComponent.displayName = `withUnProtected(${
    Pages.displayName || Pages.name || "Component"
  })`;

  return WrappedComponent;
};

export default withUnProtected;
