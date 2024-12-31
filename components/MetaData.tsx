import React from "react";

export default function Metadata({ seoTitle, seoDescription }: any) {
  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
    </>
  );
}
