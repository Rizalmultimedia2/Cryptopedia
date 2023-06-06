import ProgressBar from "@/components/ProgressBar";
import AuthStateChangeProvider from "@/context/auth";
import { UserProvider } from "@/context/user";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <AuthStateChangeProvider>
          <ProgressBar />
          <Component {...pageProps} />
        </AuthStateChangeProvider>
      </UserProvider>
    </>
  );
}
