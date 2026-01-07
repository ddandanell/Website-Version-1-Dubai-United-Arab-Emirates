import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-heading font-bold mb-8">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last Updated: January 7, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">1. Introduction</h2>
              <p>
                MyChef.ae ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our private chef services in Dubai and the United Arab Emirates.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, delivery/service address in Dubai/UAE</li>
                <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through third-party payment processors)</li>
                <li><strong>Dietary & Preference Information:</strong> Food allergies, dietary restrictions, cuisine preferences, event details</li>
                <li><strong>Communication Data:</strong> WhatsApp messages, email correspondence, phone call records with our team</li>
                <li><strong>Service Feedback:</strong> Reviews, ratings, testimonials, photos you share</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">3. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process and fulfill your private chef booking requests</li>
                <li>To match you with appropriate chefs based on your preferences</li>
                <li>To communicate with you about your bookings, menu planning, and service details</li>
                <li>To process payments and maintain transaction records</li>
                <li>To send service updates, promotional offers, and newsletters (you can opt-out anytime)</li>
                <li>To improve our services and customer experience</li>
                <li>To comply with legal obligations and resolve disputes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">4. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chefs:</strong> Your contact details, address, dietary preferences, and menu requirements are shared with your assigned chef</li>
                <li><strong>Payment Processors:</strong> Secure third-party payment gateways to process transactions</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist with website hosting, email delivery, and customer support</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              </ul>
              <p className="mt-4">We do NOT sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information, including SSL encryption for data transmission and secure servers. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at info@mychef.ae</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">7. Cookies & Tracking</h2>
              <p>
                Our website uses cookies to enhance user experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> info@mychef.ae</li>
                <li><strong>Phone:</strong> +971 4 123 4567</li>
                <li><strong>WhatsApp:</strong> +971 4 123 4567</li>
                <li><strong>Address:</strong> Villa 6, Al Safa Street 99, Dubai, UAE</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
