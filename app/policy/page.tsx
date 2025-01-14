import Metadata from "@/components/MetaData";
import React from "react";

const Policy = () => {
  return (
    <>
      <Metadata
        seoTitle="Privacy Policy | ClipCine - Protecting Your Privacy"
        seoDescription="Read ClipCine's Privacy Policy to understand how we handle your personal data and protect your privacy. Learn about our data collection practices, content ownership, and more."
      />
      <div className="max-w-7xl mx-auto p-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-secondary-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Effective Date: January 14, 2025
          </p>
        </header>

        {/* Content Section with Image at Top on Mobile and Next to Text on Desktop */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-0">
          {/* Image Section - Appears First on Mobile, Next to Text on Desktop */}
          <div className="flex-1 mb-8 md:mb-0 md:flex-shrink-0">
            <img
              src="/policy.jpg"
              alt="Privacy Policy"
              className="w-full h-auto object-contain mx-auto md:mx-0"
              width={360}
              height={479}
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Welcome to ClipCine. This Privacy Policy explains how we handle
                your personal data and protect your privacy when you use our
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We may collect certain information when you visit our website or
                use our platform. Please review the details on what information
                is collected.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Uploaded Content</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                By uploading content, you agree to provide proper attribution to
                content owners. All uploaded clips remain the property of the
                respective content owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Content Ownership & Credits
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                All credits for uploaded clips belong to the original creators.
                ClipCine does not claim ownership over the uploaded content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                ClipCine may contain links to third-party websites. We are not
                responsible for their content or privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Security</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We strive to protect your personal data, but please note that no
                data transmission is entirely secure.
              </p>
            </section>

            <section className="mb-0">
              <h2 className="text-2xl font-semibold mb-4">
                Changes to this Privacy Policy
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We may update this Privacy Policy from time to time. Please
                review it periodically for any changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
