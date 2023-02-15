import Link from "next/link";
import { Content, NavSection, Logo, Header, SmIcons } from "./styled";

const HeaderSection = () => {
  return (
    <Header>
      <Content>
        <NavSection>
          <Link href="/#latest-posts">
            <Logo>The Indoor Jungle Project</Logo>
          </Link>
          <Link href="/#latest-posts">Latest</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
          {/* <SmIcons>sm</SmIcons> */}
        </NavSection>
      </Content>
    </Header>
  );
};

export default HeaderSection;
