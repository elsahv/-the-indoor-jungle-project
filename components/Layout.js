import GlobalStyles from "./Global";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  width: 75%;
  overflow-y: scroll;
  height: 100vh;
  position: absolute;
  right: 0;
  background: #fff;

  @media only screen and (max-width: 600px) {
    position: relative;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow-y: none;
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
