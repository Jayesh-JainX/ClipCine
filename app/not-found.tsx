import Metadata from "@/components/MetaData";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="text-center min-h-[80vh] md:min-h-screen flex items-center justify-center">
      <Metadata
        seoTitle="Page Not Found - ClipCine"
        seoDescription="Oops! The page you’re looking for doesn’t exist or may have been moved. At Clipcine, we offer a vast collection of movie clips, trailers, behind-the-scenes footage, and more. Use the search bar or navigate back to our homepage to discover our top clips and latest updates."
      />
      <div>
        <Image src="/404.svg" alt={"404"} width={822} height={492} />

        <h2></h2>
        <p className="text-sm md:text-base leading-7 pt-2 md:pt-3.5 pb-7 md:pb-9 text-center">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="text-[13px] md:text-sm lg:text-base  inline-flex items-center cursor-pointer transition ease-in-out duration-300 bg-secondary px-4 md:px-6  py-2.5 lg:py-3 hover:shadow-cart rounded-lg"
        >
          <HomeIcon />
          <span className=" pr-1.5 mx-2 ">Go to home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
