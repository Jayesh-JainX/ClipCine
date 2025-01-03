"use client";
import React, { useState } from "react";
import Metadata from "@/components/MetaData";

export default function SupportPage() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedMemo, setCopiedMemo] = useState(false);
  const [copiedPaypal, setCopiedPaypal] = useState(false);
  const [copiedAirtm, setCopiedAirtm] = useState(false);

  // Function to copy text to clipboard
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "address") setCopiedAddress(true);
      if (type === "memo") setCopiedMemo(true);
      if (type === "paypal") setCopiedPaypal(true);
      if (type === "airtm") setCopiedAirtm(true);
      setTimeout(() => {
        if (type === "address") setCopiedAddress(false);
        if (type === "memo") setCopiedMemo(false);
        if (type === "paypal") setCopiedPaypal(false);
        if (type === "airtm") setCopiedAirtm(false);
      }, 2000); // Reset copied state after 2 seconds
    });
  };

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

          {/* Donation Details */}
          <p className="mt-6 font-semibold">
            Please use the following details to donate:
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-4">
              <span>
                <strong>Wallet Address:</strong>
                <span className="flex justify-start items-center">
                  <span className="break-all max-w-xs block mr-5">
                    GATED25F24BNVPQKSZCTRSBSKGHPZVDQUCM6JXAAQHDRZDVZEWDC7NO7
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "GATED25F24BNVPQKSZCTRSBSKGHPZVDQUCM6JXAAQHDRZDVZEWDC7NO7",
                        "address"
                      )
                    }
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {copiedAddress ? "Copied !" : "Copy"}
                  </button>
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <span>
                <strong>Required Memo:</strong>
                <span className="flex items-center justify-start">
                  <span className="break-all max-w-xs block mr-5">
                    229D60PB4A9HABWXEVCYM35C8T
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard("229D60PB4A9HABWXEVCYM35C8T", "memo")
                    }
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {copiedMemo ? "Copied !" : "Copy"}
                  </button>
                </span>
              </span>
            </li>
          </ul>

          <p className="mt-5 text-center text-red-600 font-semibold">
            <strong>Important:</strong> Please make sure to include the memo
            when sending your donation. Without the correct memo, we will not be
            able to receive or process your payment.
          </p>
        </section>

        {/* PayPal Email Section */}
        <section className="shadow-lg rounded-lg p-6 bg-secondary mb-8">
          <h2 className="text-2xl font-semibold">Donate via PayPal</h2>
          <p className="mt-2">
            You can also donate through PayPal using the email address below:
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-4">
              <span>
                <strong>PayPal Email:</strong>
                <span className="flex items-center justify-start">
                  <span className="break-all max-w-xs block mr-5">
                    jainayesh255@gmail.com
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard("jainayesh255@gmail.com", "paypal")
                    }
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {copiedPaypal ? "Copied !" : "Copy"}
                  </button>
                </span>
              </span>
            </li>
          </ul>
        </section>

        {/* Airtm Username Section */}
        <section className="shadow-lg rounded-lg p-6 bg-secondary mb-8">
          <h2 className="text-2xl font-semibold">Donate via Airtm</h2>
          <p className="mt-2">
            You can also donate through Airtm using the username below:
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-4">
              <span>
                <strong>Airtm Username:</strong>
                <span className="flex justify-start items-center">
                  <span className="break-all max-w-xs block mr-5">
                    jayeshjain021
                  </span>
                  <button
                    onClick={() => copyToClipboard("jayeshjain021", "airtm")}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {copiedAirtm ? "Copied !" : "Copy"}
                  </button>
                </span>
              </span>
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
              You can support us through <strong>Stellar</strong> by using the
              wallet address and memo provided above. Alternatively, you can
              donate via <strong>Airtm</strong> by using the username or choose{" "}
              <strong>PayPal</strong> with the email address listed above. Your
              contribution is greatly appreciated!
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
