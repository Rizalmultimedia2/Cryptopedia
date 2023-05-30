import { useUser } from "@/context/user";
import { useRouter } from "next/router";

const withProtected = (Pages) => {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (!uid) {
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
