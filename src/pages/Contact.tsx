import ContactUsHero from "../components/contact-us/ContactUsHero";
import ContactUsForm from "../components/contact-us/ContactUsForm";
import ContactUsInfo from "../components/contact-us/ContactUsInfo";
import ContactUsFAQ from "../components/contact-us/ContactUsFAQ";
import ContactUsCallToAction from "../components/contact-us/ContactUsCallToAction";

export default function Contact() {
  return (
    <section className="flex flex-col pt-[0.6rem] mt-6 w-full px-18">
      <ContactUsHero />

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <ContactUsForm />

        {/* Contact Information */}
        <ContactUsInfo />
      </div>

      {/* FAQ Section */}
      <ContactUsFAQ />

     {/* Call To Action */}
     <ContactUsCallToAction />
    </section>
  );
}
