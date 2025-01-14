"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { HeartHandshake, Instagram, Search } from "lucide-react";
import { ModeToggle } from "@/components/toogle-theme";
import Link from "next/link";
import reelsData from "@/lib/list";
import { BsInstagram } from "react-icons/bs";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaRegFileVideo } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Reel {
  id: string;
  movieName: string;
  partName: string;
  tags: string[];
  name?: string;
  code?: number;
  platform?: string;
  link?: string;
}

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReels, setFilteredReels] = useState<Reel[]>([]); // Type filteredReels correctly
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [thumbnails, setThumbnails] = useState<{ [key: string]: string }>({}); // Store thumbnails
  const searchInputRef = useRef<HTMLDivElement>(null); // Ref for the search input container
  const recommendationsRef = useRef<HTMLDivElement>(null);

  // Read the query parameter from the URL when the component loads
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get("q");
    if (query) {
      setSearchQuery(query);
    }
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter reelsData based on search query
    if (query.trim()) {
      const filtered = reelsData.filter(
        (reel) =>
          reel.movieName.toLowerCase().includes(query.toLowerCase()) || // Search by movieName
          reel.id.includes(query) || // Search by reel ID
          reel.name?.toLowerCase().includes(query.toLowerCase()) || // Search by filename (e.g., "1200.mp4")
          reel.code?.toString().includes(query) // Search by code (e.g., 1200)
      );
      setFilteredReels(filtered);
      setShowRecommendations(true); // Show recommendations on search
    } else {
      setFilteredReels([]); // Clear recommendations if query is empty
      setShowRecommendations(false); // Hide recommendations when search is empty
    }
  };

  // Handle search submit (when user clicks the magnifying glass)
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      window.location.href = `/clips/?q=${encodeURIComponent(
        searchQuery.trim()
      )}`; // Redirect with search query
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  // Close recommendations when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        recommendationsRef.current &&
        !recommendationsRef.current.contains(event.target)
      ) {
        setShowRecommendations(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Function to capture the first frame of a video
  const captureThumbnail = async (videoUrl: string, videoId: string) => {
    const videoElement = document.createElement("video");
    videoElement.src = videoUrl;
    videoElement.crossOrigin = "anonymous"; // Allow cross-origin access (if applicable)

    // Listen for video data to be loaded
    videoElement.addEventListener("loadeddata", () => {
      // Seek to the first frame
      videoElement.currentTime = 1;
    });

    videoElement.addEventListener("seeked", () => {
      // Create a canvas to extract the thumbnail
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        // Set canvas size to video dimensions
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;

        // Draw the first frame of the video to the canvas
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        // Save the base64 image data URL as the thumbnail
        setThumbnails((prev) => ({
          ...prev,
          [videoId]: canvas.toDataURL(), // Save the image URL
        }));
      }
    });

    // Start loading the video
    videoElement.load();
  };

  // Capture thumbnails for each video in reelsData (only the first 8)
  useEffect(() => {
    reelsData.slice(0, 8).forEach((reel) => {
      const videoUrl = `/${reel.name}`; // Adjust path if needed
      captureThumbnail(videoUrl, reel.id);
    });
  }, []);

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
      name: "Clip Vibe",
      url: "https://www.instagram.com/clip.vibe",
      profilePicUrl: "insta3.jpg",
      description:
        "Watch the most iconic and unforgettable clips from Hindi films.",
    },
    {
      name: "Eyes Dollar",
      url: "https://www.instagram.com/eyes_dollar",
      profilePicUrl: "insta4.jpg",
      description: "Watch the best clips from Hindi films.",
    },
  ];

  const handleClear = () => {
    setSearchQuery(""); // This will clear the search input
  };

  return (
    <header>
      {/* Desktop view */}
      <span className="hidden bg-secondary p-4 sm:flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left section - Logo and Text */}
        <Link
          href={"/"}
          className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start"
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

        {/* Center section - Search input */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center relative"
          ref={searchInputRef}
        >
          <div className="relative w-full flex items-center">
            {/* Search Input */}
            <Input
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress} // Assuming you have the handleKeyPress function
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md bg-primary-foreground text-sm md:text-base"
            />

            {/* Clear Button (X) */}
            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 text-2xl mx-8"
              >
                &times;
              </button>
            )}

            {/* Search Icon */}
            <Search
              className="ml-2 text-lg cursor-pointer"
              onClick={handleSearchSubmit}
            />
          </div>

          {/* Recommendations for Desktop */}
          {searchQuery && showRecommendations && filteredReels.length > 0 && (
            <div
              className="absolute top-full left-0 w-full bg-primary-foreground shadow-md rounded-md mt-2 z-10"
              ref={recommendationsRef}
            >
              <ul className="max-h-60 overflow-y-auto">
                {filteredReels.slice(0, 5).map((reel) => (
                  <Link
                    href={
                      reel.name === undefined ? `${reel.link}` : `/${reel.name}`
                    }
                    target={reel.name === undefined ? "_blank" : "_top"}
                    key={reel.id}
                    className="block p-2 cursor-pointer hover:bg-secondary transition-all ease-in-out duration-300"
                    onClick={(e) => {
                      // Prevent the dropdown from closing when a link is clicked
                      e.stopPropagation();
                    }}
                  >
                    <div className="flex items-center justify-between space-x-3">
                      {/* Skeleton Loader for video thumbnail */}
                      {!thumbnails[reel.id] && reel.code !== undefined ? (
                        <div className="w-14 mx-2 h-14 bg-gray-300 animate-pulse rounded"></div>
                      ) : (
                        <span className="relative flex-shrink-0">
                          {/* Conditionally render the image if reel.code is not undefined */}
                          {reel.code !== undefined ? (
                            <Image
                              src={thumbnails[reel.id]}
                              alt={reel.movieName}
                              width={50}
                              height={50}
                              className="rounded h-14 w-14 mx-2"
                            />
                          ) : (
                            <div className="w-14 mx-2 h-14 bg-gray-400 rounded-md relative flex justify-center items-center bg-gradient-to-b from-blue-500 via-purple-600 to-blue-800 border border-solid">
                              {/* Centered Icon Image */}
                              <img
                                src="/icon.png" // Place your icon image here
                                alt="Icon"
                                className="rounded h-6 mx-2"
                              />
                            </div>
                          )}
                        </span>
                      )}

                      {/* Movie Info and Code */}
                      <div className="flex-grow">
                        <p className="text-sm font-medium">{reel.movieName}</p>
                        <p className="text-xs text-gray-500">{reel.partName}</p>
                        {reel.code !== undefined && (
                          <p className="text-xs text-gray-500">
                            Code: {reel.code}
                          </p>
                        )}
                      </div>

                      {/* Platform Icons */}
                      <span className="flex items-center pr-2 space-x-2 justify-end">
                        {reel.name === undefined ? (
                          <span className="relative flex justify-end">
                            {reel.platform === "Instagram" ? (
                              <BsInstagram className="dark:text-primary text-secondary text-2xl" />
                            ) : reel.platform === "Streamable" ? (
                              <MdOutlinePodcasts className="dark:text-primary text-secondary text-2xl" />
                            ) : null}
                          </span>
                        ) : reel.code !== undefined ? (
                          <FaRegFileVideo className="dark:text-primary text-secondary text-2xl" />
                        ) : null}
                      </span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right section - Mode Toggle */}
        <div className="flex justify-center md:justify-start items-center space-x-1 text-sm md:text-base w-full md:w-auto">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={"/support"} className="relative group">
                  <HeartHandshake className="w-10 hover:text-blue-600" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-primary-foreground text-primary border"
              >
                <p>Support Me</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

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
                    <Instagram className="mr-1" />
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
                <span className="relative border">
                  <ModeToggle />
                </span>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-primary-foreground text-primary border"
              >
                <p>Toogle Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </span>

      {/* Mobile view */}
      <span className="sm:hidden bg-secondary p-4 flex flex-col items-center justify-between space-y-4">
        <div className="flex items-center justify-between w-full">
          <Link href={"/"} className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/icon.png"
                alt="ClipCine Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1 className="text-2xl font-semibold">ClipCine</h1>
          </Link>

          <div className="flex items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"/support"} className="relative">
                    <HeartHandshake className="w-10" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="bg-primary-foreground text-primary border"
                >
                  <p>Support Me</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

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
                      <Instagram className="mr-1.5" />
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
                  <span className="relative group border">
                    <ModeToggle />
                  </span>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="bg-primary-foreground text-primary border"
                >
                  <p>Toogle Theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Search input for mobile */}
        <div className="w-full flex justify-center items-center mt-4 relative">
          <div className="flex w-full" ref={searchInputRef}>
            <Input
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md bg-primary-foreground"
            />

            {/* Clear Button (X) */}
            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 text-3xl mx-8"
              >
                &times;
              </button>
            )}
            <div className="flex items-center justify-center ml-2">
              <Search className="text-lg" onClick={handleSearchSubmit} />
            </div>
          </div>

          {/* Recommendations for mobile */}
          {searchQuery && showRecommendations && filteredReels.length > 0 && (
            <div
              ref={recommendationsRef}
              className="absolute top-full left-0 w-full bg-primary-foreground shadow-md rounded-md mt-2 z-10"
            >
              <ul className="max-h-60 overflow-y-auto">
                {filteredReels.slice(0, 5).map((reel) => (
                  <Link
                    href={
                      reel.name === undefined ? `${reel.link}` : `/${reel.name}`
                    }
                    target={reel.name === undefined ? "_blank" : "_top"}
                    key={reel.id}
                    className="block p-2 cursor-pointer hover:bg-secondary transition-all ease-in-out duration-300"
                  >
                    <div className="flex items-center justify-between space-x-3">
                      {/* Skeleton Loader for video thumbnail */}
                      {!thumbnails[reel.id] && reel.code !== undefined ? (
                        <div className="w-14 mx-2 h-14 bg-gray-300 animate-pulse rounded"></div>
                      ) : (
                        <span className="relative flex-shrink-0">
                          {/* Conditionally render the image if reel.code is not undefined */}
                          {reel.code !== undefined ? (
                            <Image
                              src={thumbnails[reel.id]}
                              alt={reel.movieName}
                              width={50}
                              height={50}
                              className="rounded h-14 w-14 mx-2"
                            />
                          ) : (
                            <div className="w-14 mx-2 h-14 bg-gray-400 rounded-md relative flex justify-center items-center bg-gradient-to-b from-blue-500 via-purple-600 to-blue-800 border border-solid">
                              {/* Centered Icon Image */}
                              <img
                                src="/icon.png" // Place your icon image here
                                alt="Icon"
                                className="rounded h-6 mx-2"
                              />
                            </div>
                          )}
                        </span>
                      )}

                      {/* Movie Info and Code */}
                      <div className="flex-grow">
                        <p className="text-sm font-medium">{reel.movieName}</p>
                        <p className="text-xs text-gray-500">{reel.partName}</p>
                        {reel.code !== undefined && (
                          <p className="text-xs text-gray-500">
                            Code: {reel.code}
                          </p>
                        )}
                      </div>

                      {/* Platform Icons */}
                      <span className="flex items-center pr-2 space-x-2 justify-end">
                        {reel.name === undefined ? (
                          <span className="relative flex justify-end">
                            {reel.platform === "Instagram" ? (
                              <BsInstagram className="dark:text-primary text-secondary text-2xl" />
                            ) : reel.platform === "Streamable" ? (
                              <MdOutlinePodcasts className="dark:text-primary text-secondary text-2xl" />
                            ) : null}
                          </span>
                        ) : reel.code !== undefined ? (
                          <FaRegFileVideo className="dark:text-primary text-secondary text-2xl" />
                        ) : null}
                      </span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </span>
    </header>
  );
};

export default Header;
