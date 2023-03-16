import GlobalStyles from "./Global";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  width: 79%;
  overflow-y: scroll;
  height: 100vh;
  position: absolute;
  right: 0;
  background: #f0ead2;
  border-left: 1px solid #000;

  @media only screen and (max-width: 600px) {
    // position: relative;
    // left: 0;
    // height: 100%;
    width: 100%;
    // overflow-y: none;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
}
