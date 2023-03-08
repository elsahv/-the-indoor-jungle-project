import { Section, Grid, ContactFormWrapper, Content } from "./styled";
import ContactForm from "./EmailForm";

function FooterSection() {
  return (
    <>
      <Section id="contact">
        <Grid>
          <Content id="sq">
            <div>
              <h2>What do you think of this site so far?</h2>
              <p>{"I'd"} love to hear your feedback!</p>
              <p>
                If you are hiring any web developers, {"I'd"} really love to
                hear from ya!
              </p>
              <br />
              <p>
                Simply fill out the contact form, or email me at
                <div style={{ fontWeight: "bold" }}>
                  devdesignsbyelsa@gmail.com
                </div>
              </p>
            </div>
          </Content>

          {/* <ContactFormWrapper id="sq"> */}
          {/* <ContactForm /> */}
          {/* </ContactFormWrapper> */}
        </Grid>
      </Section>
    </>
  );
}

export default FooterSection;
