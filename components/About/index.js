import {
  Section,
  AboutContent,
  ImgWrapper,
  Grid,
  LeftSide,
  RightSide,
} from "./styled";
import Image from "next/image";
import img2 from "../../public/images/jake.jpg";

export default function About({ title, contentBody, icon }) {
  return (
    <>
      <Section id="about">
        <Grid>
          <LeftSide>
            <ImgWrapper>
              <Image
                src={img2}
                alt="about-me"
                layout="responsive"
                className="img"
              />
            </ImgWrapper>
          </LeftSide>
          <RightSide>
            <AboutContent>
              <h2>About</h2>
              <p>
                Dietitians and nutritional professionals have one goal: To
                better peoples health and life-style diets. However, it is hard
                to stand out amongst all the noise... Writing to Better Health
                changes this with these goals:
              </p>
              <p>
                Your website is good hands with my experience in web hosting,
                web design, and education and passion in nutrition.
              </p>
              <p>
                My name is Elsa, I build and maintain websites for a living.
              </p>

              <p>So how does WTBH work? View process below.</p>
            </AboutContent>
          </RightSide>
        </Grid>
      </Section>
    </>
  );
}
