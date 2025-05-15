import HeroSection from '@/components/hero-section';
import ContactForm from '@/components/contact-form';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Reach out to us with any questions, inquiries, or to discuss how we can help your business thrive."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl border p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and one of our representatives will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or need assistance? Reach out to us using any of the methods below, and we'll be happy to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      123 Business Avenue, Tech Park<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: info@acmeinc.com<br />
                      Customer Support: support@acmeinc.com<br />
                      Career Opportunities: careers@acmeinc.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      Main Office: +1 (555) 123-4567<br />
                      Toll-Free: +1 (800) 555-8899<br />
                      Fax: +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 2:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 aspect-video lg:aspect-auto lg:h-80 rounded-xl overflow-hidden bg-muted border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.43913260861!2d-122.45425897944957!3d37.77492951313143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652890496385!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about our services and how we work with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How do you typically work with clients?",
                answer: "We follow a collaborative approach, working closely with you to understand your goals and challenges. Our process typically includes an initial consultation, strategy development, implementation, and ongoing support."
              },
              {
                question: "What industries do you serve?",
                answer: "We work with clients across a wide range of industries, including technology, healthcare, finance, retail, education, and manufacturing. Our diverse experience allows us to bring fresh perspectives to any sector."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. Small projects might take a few weeks, while larger initiatives can span several months. We'll provide a detailed timeline during the planning phase."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we offer various support and maintenance packages to ensure your solutions continue to perform optimally. We can also provide training for your team to help them maximize the value of our deliverables."
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer flexible pricing options, including project-based, retainer, and hourly billing. The right structure depends on your specific needs and the nature of the work. We'll discuss pricing during our initial consultation."
              },
              {
                question: "How do you measure success?",
                answer: "We define clear, measurable objectives at the start of each engagement and track progress consistently. Our focus is on delivering tangible business outcomes, not just completing tasks."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}