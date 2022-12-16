/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Section } from "../components/styles/WebDevSections.styled";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>The Laughing Coyote</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div id="about">
          <Section>
            <h2>About</h2>
          </Section>
        </div>

        <div id="process">
          <Section>
            <h2>Process</h2>
          </Section>
        </div>

        <div id="newsletter">
          <Section>
            <h2>Newsletter</h2>
          </Section>
        </div>

        <div id="contact">
          <Section>
            <h2>Contact</h2>
          </Section>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
