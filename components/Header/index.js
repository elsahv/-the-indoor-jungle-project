import Link from "next/link";
import { Content, NavSection, Logo, Header, SmIcons } from "./styled";

const HeaderSection = () => {
  return (
    <Header>
      <Content>
        <NavSection>
          <Link href="/">
            <Logo>The Indoor Jungle Project</Logo>
          </Link>
          <Link href="/">Latest</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {/* <SmIcons>sm</SmIcons> */}
        </NavSection>
      </Content>
    </Header>
  );
};

export default HeaderSection;
