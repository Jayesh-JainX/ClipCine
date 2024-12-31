"use client";
import React, { useState } from "react";
import { Instagram, HeartHandshake, Globe } from "lucide-react"; // Importing multiple social icons from Lucide React
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const instagramChannels = [
    {
      name: "Movie Flare",
      url: "https://www.instagram.com/movie_flare",
      profilePicUrl: "insta1.jpg",
      description: "Explore iconic movie scenes and moments.",
    },
    {
      name: "Ella User",
      url: "https://www.instagram.com/ella_user_",
      profilePicUrl: "insta2.jpg",
      description: "Trending movie clips and exclusive moments.",
    },
    {
      name: "Eyes Dollar",
      url: "https://www.instagram.com/eyes_dollar",
      profilePicUrl: "insta3.jpg",
      description: "Watch the best clips from Hindi films.",
    },
  ];

  return (
    <footer className="bg-secondary pt-8 pb-5 mt-12">
      <div className="container mx-auto px-4">
        {/* Top Section (Logo, Text, and Social Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:mb-12">
          {/* ClipCine Logo and Text */}
          <div className="flex flex-col items-start">
            <Link
              href={"/"}
              className="flex items-center space-x-3 w-full md:w-auto justify-start mb-2"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/icon.png"
                  alt="ClipCine Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h1 className="text-2xl font-semibold text-center md:text-left">
                ClipCine
              </h1>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Your go-to platform for discovering and watching movie clips from
              your favorite films. Stay updated with iconic scenes and
              unforgettable moments from a wide range of movies.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col lg:pl-[25vw] items-start">
            <span className="text-lg font-semibold mb-3">Follow Us</span>
            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span>
                      {/* Instagram Icon Link */}
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          setDialogOpen(true); // Open the dialog when the Instagram icon is clicked
                        }}
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors duration-200"
                      >
                        <Instagram size={28} />
                      </span>

                      {/* Dialog for Instagram Channels */}
                      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogContent className="text-start lg:mx-0 w-[90vw] sm:w-full rounded-lg bg-primary-foreground">
                          <DialogHeader>
                            <DialogTitle className="pt-4 sm:pt-0">
                              Choose an Instagram Channel
                            </DialogTitle>
                            <DialogDescription>
                              Select an Instagram channel to follow from below:
                            </DialogDescription>
                          </DialogHeader>

                          {/* List of Instagram Channels */}
                          <div className="space-y-4 md:mx-2">
                            {instagramChannels.map((channel) => (
                              <Link
                                key={channel.url}
                                href={channel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start space-x-3 text-primary "
                              >
                                {/* Instagram Profile Image in a Circle */}
                                <div className="flex justify-center items-center rounded-full overflow-hidden">
                                  <img
                                    src={
                                      channel.profilePicUrl ||
                                      "/default-profile-pic.jpg"
                                    } // Fallback to a default image
                                    alt={`${channel.name} Profile`}
                                    className="w-12 h-12 object-cover"
                                  />
                                </div>

                                {/* Channel Name and Description */}
                                <div className="">
                                  <span className="font-medium hover:underline">
                                    {channel.name}
                                  </span>
                                  {/* Description under the name */}
                                  {channel.description && (
                                    <p className="text-xs md:text-sm text-muted-foreground ">
                                      {channel.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="bg-primary-foreground text-primary border"
                  >
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href="/support"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      <HeartHandshake size={28} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="bg-primary-foreground text-primary border"
                  >
                    <p>Support</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href="https://jayeshjain.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors duration-200"
                    >
                      <Globe size={28} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="bg-primary-foreground text-primary border"
                  >
                    <p>Portfolio</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Bottom Section (Created by Jayesh Jain) */}
        <div className="border-t border-gray-700 pt-6 mt-4">
          <div className="lg:flex justify-between items-center">
            <div className="text-sm  pb-2 md:pb-0">
              <p>
                Created by{" "}
                <Link
                  href="https://jayeshjain.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 transition-colors duration-200 font-bold text-lg"
                >
                  Jayesh Jain
                </Link>
              </p>
            </div>
            <div className="text-sm ">
              <p>&copy; 2024 ClipCine. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
