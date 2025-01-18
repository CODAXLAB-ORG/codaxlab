import ContactUsHero from "../components/contact-us/ContactUsHero";
import ContactUsForm from "../components/contact-us/ContactUsForm";

export default function Contact() {
  return (
    <section className="flex flex-col py-8">
      <ContactUsHero />
      <ContactUsForm />
    </section>
  );
}
