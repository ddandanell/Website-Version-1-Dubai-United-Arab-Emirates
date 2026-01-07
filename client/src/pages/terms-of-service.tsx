import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-heading font-bold mb-8">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-12">Last Updated: January 7, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using MyChef.ae's services, you agree to be bound by these Terms of Service and all applicable laws and regulations in the United Arab Emirates. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">2. Services Description</h2>
              <p>
                MyChef.ae provides private chef services across Dubai and the UAE, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Intimate dinner experiences for 2-10 guests</li>
                <li>Villa parties and events for 10-50+ guests</li>
                <li>Private cooking classes</li>
                <li>Weekly meal preparation services</li>
                <li>Corporate catering and special events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">3. Booking & Reservations</h2>
              <h3 className="text-xl font-heading font-semibold text-black mt-6 mb-3">3.1 Booking Process</h3>
              <p>
                To book a chef, you must: (1) Contact us via WhatsApp, phone, or website; (2) Provide accurate event details including date, time, location, and guest count; (3) Select a chef and confirm menu; (4) Pay the required deposit.
              </p>

              <h3 className="text-xl font-heading font-semibold text-black mt-6 mb-3">3.2 Deposit Requirement</h3>
              <p>
                A 50% deposit of the total estimated cost (chef service + approximate ingredient costs) is required to secure your booking. Deposits are non-refundable within 24 hours of the scheduled event.
              </p>

              <h3 className="text-xl font-heading font-semibold text-black mt-6 mb-3">3.3 Minimum Notice</h3>
              <p>
                We recommend booking at least 48 hours in advance for intimate dinners and 1-2 weeks for large events. Last-minute requests are accommodated based on chef availability.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">4. Pricing & Payment</h2>
              <h3 className="text-xl font-heading font-semibold text-black mt-6 mb-3">4.1 Service Fees</h3>
              <p>
                Chef service fees start from AED 200/hour. Final costs depend on service duration, guest count, menu complexity, and chef expertise level. All pricing is provided upfront in your quote.
              </p>

              <h3 className="text-xl font-heading font-semibold text-black mt-6 mb-3">4.2 Ingredient Costs</h3>
              <p>
                Ingredient costs are separate from service fees and billed at actual cost based on your chosen menu. Your chef will provide itemized receipts for all grocery purchases. Final balance (50%) is due after the event once ingredient receipts are provided.
              </p>

              <h3 className="text-xl font-heading font-semibold text-black mt-6 mb-3">4.3 Additional Fees</h3>
              <p>
                Additional charges may apply for: specialty equipment rentals, waitstaff (AED 150-200 per server), travel outside Dubai city limits, or premium/imported ingredients. All additional costs are disclosed before booking confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">5. Cancellation & Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>72+ hours notice:</strong> Full refund minus 10% processing fee</li>
                <li><strong>24-72 hours notice:</strong> 50% refund</li>
                <li><strong>Less than 24 hours:</strong> No refund (ingredients purchased, chef scheduled)</li>
                <li><strong>Rescheduling:</strong> One free reschedule allowed with 48+ hours notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">6. Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate guest count, dietary restrictions, and allergy information</li>
                <li>Ensure kitchen access and basic appliances (stove, oven, refrigerator) are functional</li>
                <li>Provide a safe working environment for the chef</li>
                <li>Be present or designate a contact person during service</li>
                <li>Notify us of any venue changes at least 48 hours in advance</li>
                <li>Make final payment promptly after service completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">7. Our Responsibilities</h2>
              <p>MyChef.ae commits to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide HACCP-certified, background-checked, and insured chefs</li>
                <li>Ensure chefs arrive on time with all necessary equipment and ingredients</li>
                <li>Deliver high-quality food preparation and professional service</li>
                <li>Complete kitchen cleanup after service</li>
                <li>Maintain food safety and hygiene standards</li>
                <li>Provide a replacement chef in case of emergencies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">8. Liability & Insurance</h2>
              <p>
                All our chefs are covered by comprehensive insurance. MyChef.ae is not liable for pre-existing kitchen damage, appliance malfunctions, or guest conduct. Clients are responsible for informing us of all allergies and dietary restrictions; we cannot be held liable for reactions to undisclosed allergens.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">9. Force Majeure</h2>
              <p>
                We are not liable for failure to perform services due to circumstances beyond our control including natural disasters, government restrictions, pandemics, or other force majeure events. In such cases, we will work with you to reschedule or provide a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">10. Intellectual Property</h2>
              <p>
                All content on MyChef.ae website, including text, images, logos, and recipes, is the property of MyChef.ae and protected by UAE and international copyright laws. You may not reproduce, distribute, or use our content without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">11. Reviews & Testimonials</h2>
              <p>
                By providing a review or testimonial, you grant MyChef.ae the right to use your feedback, photos, and first name in marketing materials. We will never share your full contact information publicly without explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">12. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms will be governed by the laws of the United Arab Emirates and resolved through arbitration in Dubai. We encourage clients to contact us directly to resolve any concerns before pursuing legal action.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-black mb-4">14. Contact Information</h2>
              <p>For questions about these Terms of Service, contact us:</p>
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
