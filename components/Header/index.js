import Link from "next/link";
import { Content, NavSection, Logo, Header } from "./styled";

const HeaderSection = () => {
  return (
    <Header>
      <Content>
        <NavSection>
          <Link href="/#latest-posts">
            <h1 className="text-red-200">The Indoor Jungle Project</h1>
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
