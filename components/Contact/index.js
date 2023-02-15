import { Section, Grid, ContactFormWrapper, Content } from "./styled";
import ContactForm from "./EmailForm";

function FooterSection() {
  return (
    <>
      <Section id="contact">
        <Grid>
          <Content id="sq">
            <div>
              <h2>Lets gets started...</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem a enim at non, in aut sapiente culpa perferendis
                iusto unde officia. Explicabo magni fugit voluptatem, provident
                nostrum facere a consequuntur!
              </p>
              <p>Blog cta</p>
            </div>
          </Content>

          <ContactFormWrapper id="sq">
            <ContactForm />
          </ContactFormWrapper>
        </Grid>
      </Section>
    </>
  );
}

export default FooterSection;
