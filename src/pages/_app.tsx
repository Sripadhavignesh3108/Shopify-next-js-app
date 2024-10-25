import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar.js";
import Store from "../globalState/store/Store.js";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Store>
        <Navbar />
        <Component {...pageProps} />
      </Store>
    </>
  );
}
