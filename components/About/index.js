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
                My name is Elsa, {"I'm"} a web developer {"who's"} passionate
                about
                <a href="https://writingtobetterhealth.com">food</a>
                and
                <a href="https://elsahovey.com">web design</a>
              </p>
              {/* //* COMMENT OUT UNTIL BETTER DIRECTION */}
              {/* <p>
                The Indoor Gardening Project pretty much started with a “post
                traumatic”, failed attempt of growing produce outdoors. It was
                like a horror movie,{"I’m"} sitting on my couch, minding my own
                business, when I hear this scratching sound. I slowly turn
                around, eyes wide and heart slightly racing… I peel back the
                blinds. That was when I met…. the conniving spider squirrel!
              </p>
              <p>
                I may have imagined this, but it had this maniacal grin that
                would make the joker proud. It clung onto my window screen,
                crawling around in a near frantic manner from being caught. I
                rushed outside to chase it away, only to find my once thriving
                cherry tomatoes sapling, reduced to twigs. There was psycho
                theme music playing in my head… all the hard work of nurturing
                and watching the leaves develop, was gone in one moment. The
                last I saw of spider squirrel was his large tail, squeezing
                under a fence, and leaving the murder scene in his wake.
              </p>
              <p>
                This sad day has led me to happier things, such as learning how
                to grow things in my apartment: using lights, my aerogarden, and
                aquariums. {"I’m"} still learning as I go, and decided to
                document my findings. Join me as I grow my plants, fish and this
                blog!
              </p>
              <p>
                And remember to always keep an eye out in the spring…. you never
                know if spider squirrel may be lurking…
              </p> */}
            </AboutContent>
          </RightSide>
        </Grid>
      </Section>
    </>
  );
}
