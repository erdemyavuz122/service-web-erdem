import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TelefonButton from "@/components/telefon-button";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import "@/styles/fonts.css";
//import "bootstrap-icons/font/bootstrap-icons.css"; // Eğer npm ile yüklediysen

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <TelefonButton />
    </Layout>
  );
}
