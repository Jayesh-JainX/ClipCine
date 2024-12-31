"use client";
import reelsData from "@/lib/list";
import { Film } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BsInstagram } from "react-icons/bs";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaRegFileVideo } from "react-icons/fa";
import Image from "next/image";

const MainBanner = () => {
  const [thumbnails, setThumbnails] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true); // Track loading state for the banner image

  useEffect(() => {
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
    reelsData.slice(0, 8).forEach((reel) => {
      const videoUrl = `/${reel.name}`; // Adjust path if needed
      captureThumbnail(videoUrl, reel.id);
    });
  }, []);

  // Handle image load completion
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Initially, set loading to true, and it will change when the image loads
    setIsLoading(true);
  }, []);
  return (
    <div className="mx-4 my-4">
      {/* Conditionally render Skeleton or Image */}
      {isLoading && (
        <Skeleton className="w-full h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[90vh] rounded-md mb-4" />
      )}

      <Image
        src="/banner.png"
        alt="Banner Image"
        className="md:w-full rounded-md mb-4"
        layout="responsive"
        width={1920}
        height={1080}
        loading="lazy"
        onLoadingComplete={handleImageLoad} // Trigger when image is loaded
      />

      {/* Reels Section */}
      <div className="flex items-center justify-between mb-6 border-t-2 pt-4">
        <div className="flex items-center space-x-2">
          <Film size={24} />
          <span className="font-semibold text-lg md:text-2xl">
            Reels: Search & Watch.
          </span>
        </div>

        {/* Reels List */}
        <div className="flex space-x-4 overflow-x-auto">
          {/* Reels can be dynamically populated here */}
          <div className="flex-shrink-0">
            <Link href={"/clips"} className="hover:text-blue-500 px-2">
              All Reels
            </Link>
          </div>
        </div>
      </div>

      {/* Reels Grid (Showing video snapshots with captions) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
        {reelsData.slice(0, 8).map((reel) => (
          <div key={reel.id} className="relative">
            {/* Skeleton Loader for video if thumbnail is not yet loaded */}
            {!thumbnails[reel.id] && reel.name !== undefined ? (
              <Skeleton className="w-full aspect-[9/16] rounded-md" />
            ) : (
              <Link
                href={
                  reel.name === undefined ? `${reel.link}` : `/${reel.name}`
                }
                target={reel.name === undefined ? "_blank" : "_top"}
                className="w-full aspect-[9/16] bg-gray-400 rounded-md relative flex justify-center items-center bg-gradient-to-b from-blue-500 via-purple-600 to-blue-800 border border-solid"
              >
                {/* Conditional Rendering for Thumbnail */}
                {thumbnails[reel.id] && reel.name !== undefined ? (
                  // Video Snapshot (using extracted thumbnail)
                  <span className="relative w-full h-full">
                    {/* Thumbnail Image */}
                    <img
                      src={thumbnails[reel.id]} // Use extracted thumbnail
                      alt={reel.movieName}
                      className="w-full h-full object-cover rounded-md"
                    />

                    {/* Video Icon */}
                    {reel.code !== undefined && (
                      <FaRegFileVideo className="dark:text-primary text-secondary absolute top-0 right-0 m-3 md:m-4 text-2xl md:text-3xl" />
                    )}
                  </span>
                ) : (
                  <span className="relative w-full h-full">
                    {/* Centered Icon Image */}
                    <img
                      src="/icon.png" // Place your icon image here
                      alt="Icon"
                      className="absolute inset-0 m-auto h-[40%] object-contain"
                    />

                    {/* Instagram Icon at the Top Corner */}
                    {reel.name === undefined && (
                      <span>
                        {reel.platform === "Instagram" ? (
                          <BsInstagram className="dark:text-primary text-secondary absolute top-0 right-0 m-3 md:m-4 text-2xl md:text-3xl" />
                        ) : reel.platform === "Streamable" ? (
                          <MdOutlinePodcasts className="dark:text-primary text-secondary absolute top-0 right-0 m-3 md:m-4 text-2xl md:text-3xl" />
                        ) : null}
                      </span>
                    )}
                  </span>
                )}
              </Link>
            )}

            {/* Caption with movie name and part */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary dark:from-primary-foreground lg:px-4 backdrop-blur-md dark:text-primary text-secondary to-transparent text-start p-2 rounded-md text-sm md:text-md lg:text-lg font-semibold font-sans">
              <p>Movie: {reel.movieName}</p>
              <p>{reel.partName}</p>
              {reel.name !== undefined && (
                <p>Code: {reel.name.replace(".mp4", "")}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Link
        className="flex justify-center items-end mt-4 hover:text-blue-500"
        href={"/clips"}
      >
        Show More
      </Link>
    </div>
  );
};

export default MainBanner;
