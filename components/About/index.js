import {
  Section,
  AboutContent,
  ImgWrapper,
  Grid,
  LeftSide,
  RightSide,
} from "./styled";
import Image from "next/image";
import img2 from "../../public/images/self-img.jpg";

export default function About({ title, contentBody, icon }) {
  return (
    <>
      <Section id="about">
        <Grid>
          <LeftSide>
            <ImgWrapper>
              <Image
                src={img2}
                alt="elsa hovey"
                layout="responsive"
                className="img"
              />
            </ImgWrapper>
          </LeftSide>
          <RightSide>
            <AboutContent>
              <h2>About</h2>
              <p>
                Welcome to the Indoor Jungle Project! This site is currently a
                work in progress, functioning as a personal online photo album
                regarding houseplants.
              </p>
              <p>
                {"I'm"} Elsa, a web developer {"who's"} built websites about
                <a href="https://writingtobetterhealth.com">food</a>
                and
                <a href="https://elsahovey.com">web design</a>
              </p>
              {/* //* COMMENT OUT UNTIL BETTER DIRECTION */}
            </AboutContent>
          </RightSide>
        </Grid>
      </Section>
    </>
  );
}
