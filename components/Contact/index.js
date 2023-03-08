import { Section, Grid, Content } from "./styled";

function Contact() {
  return (
    <>
      <Section id="contact">
        <Grid>
          <Content>
            <h2>What do you think of this site so far?</h2>
            <p>{"I'd"} love to hear your feedback!</p>
            <p>
              If you are hiring any web developers, {"I'd"} really love to hear
              from ya!
            </p>
            <br />
            <p>
              Simply email me at
              <div style={{ fontWeight: "bold" }}>
                devdesignsbyelsa@gmail.com
              </div>
            </p>
          </Content>
        </Grid>
      </Section>
    </>
  );
}

export default Contact;
