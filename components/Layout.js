import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mt-[905px] absolute">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
