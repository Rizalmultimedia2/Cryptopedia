import AuthStateChangeProvider from "@/context/auth";
import { UserProvider } from "@/context/user";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <AuthStateChangeProvider>
          <Component {...pageProps} />
        </AuthStateChangeProvider>
      </UserProvider>
    </>
  );
}
