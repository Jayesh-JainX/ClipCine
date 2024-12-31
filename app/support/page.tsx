import Metadata from "@/components/MetaData";
import React from "react";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="font-sans">
      <Metadata
        seoTitle="Donate to ClipCine | Support Us to Keep Creating"
        seoDescription="Your contribution helps us keep creating the best movie clips and content. Support ClipCine to help us bring you more of your favorite film moments!"
      />
      {/* Header Section */}
      <header className="bg-blue-500 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Support ClipCine</h1>
          <p className="text-lg mt-2 text-white">
            Your contributions help us continue to create the best movie clips
            and content for you!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-8">
        <section className="shadow-lg rounded-lg p-6 bg-secondary mb-8">
          <h2 className="text-2xl font-semibold">Donate to Support Us</h2>
          <p className="mt-2">
            ClipCine is dedicated to bringing you the latest and greatest
            moments from your favorite films. Your support goes a long way in
            ensuring we can continue delivering high-quality content.
          </p>

          <p className="mt-4">
            By donating, you’ll help us create more amazing content for all
            movie lovers and continue improving our platform with exciting
            features.
          </p>

          {/* Donation Options */}
          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href="https://www.paypal.com/donate?business=example@paypal.com"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                <strong>PayPal Donation:</strong> Donate via PayPal to help us
                create more movie clips and content.
              </Link>
            </li>
            <li>
              <Link
                href="https://www.airtm.com/en/transfer?recipient=example"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                <strong>Airtm Donation:</strong> Donate via Airtm to support our
                efforts and enjoy seamless transactions.
              </Link>
            </li>
            <li>
              <Link
                href="https://www.sellar.com/donate?user=example"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                <strong>SellaR Donation:</strong> Support ClipCine using SellaR
                for quick and secure donations.
              </Link>
            </li>
          </ul>
        </section>

        {/* Donation Benefits Section */}
        <section className="bg-secondary shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold">Why Donate?</h2>
          <p className="mt-2">
            Your donations allow us to keep improving and creating high-quality
            movie clips for you. Here’s how your support directly impacts
            ClipCine:
          </p>

          <div className="mt-4">
            <h3 className="font-medium text-lg">More Movie Clips</h3>
            <p className="mt-2">
              Your donations enable us to invest in the latest technologies and
              resources to bring you more of your favorite movie moments.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-medium text-lg">Exclusive Content</h3>
            <p className="mt-2">
              By contributing, you'll get access to exclusive content and be a
              part of ClipCine's growth. Patrons on Patreon receive special
              perks such as early access to clips, behind-the-scenes videos, and
              more.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-medium text-lg">Improved Platform</h3>
            <p className="mt-2">
              Donations will help us upgrade our website, improve the user
              experience, and bring new features that will make it even easier
              to enjoy your favorite movie clips.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <p className="mt-2">Here are some common questions about donating:</p>

          <div className="mt-4">
            <h3 className="font-medium text-lg">
              How can I donate to ClipCine?
            </h3>
            <p className="mt-2">
              You can donate via PayPal, Airtm, SellaR, or make a one-time
              donation through our website. Choose the method that's most
              convenient for you.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-medium text-lg">What do I get for donating?</h3>
            <p className="mt-2">
              Depending on your level of support, you may receive exclusive
              perks, early access to content, and even personalized thank-you
              messages from the ClipCine team.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-medium text-lg">
              Is my donation tax-deductible?
            </h3>
            <p className="mt-2">
              Currently, donations to ClipCine are not tax-deductible. However,
              we are exploring options to offer tax-exempt status in the future.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
