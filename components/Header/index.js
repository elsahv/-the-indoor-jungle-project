import Link from "next/link";
import { Content, NavSection, Logo, Header } from "./styled";

const HeaderSection = () => {
  return (
    <Header>
      <Content>
        <NavSection>
          <Link href="/#latest-posts">
            <Logo>The Indoor Jungle Project</Logo>
          </Link>
          <Link cpa href="/#latest-posts">
            Latest
          </Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </NavSection>
      </Content>
    </Header>
  );
};

export default HeaderSection;
