import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container py-4">{children}</main>
      <Footer />
    </>
  );
}
