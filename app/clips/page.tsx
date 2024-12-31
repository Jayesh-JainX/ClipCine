"use client";
import { Skeleton } from "@/components/ui/skeleton";
import reelsData from "@/lib/list";
import { Film, Rabbit } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsInstagram } from "react-icons/bs";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaRegFileVideo } from "react-icons/fa";
import Metadata from "@/components/MetaData";

export default function ClipPage() {
  const [thumbnails, setThumbnails] = useState<{ [key: string]: string }>({});
  const [filteredReels, setFilteredReels] = useState(reelsData); // State for filtered reels

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
    reelsData.forEach((reel) => {
      const videoUrl = `/${reel.name}`; // Adjust path if needed
      captureThumbnail(videoUrl, reel.id);
    });

    // Get search query from URL and filter the reels data
    const query = new URLSearchParams(window.location.search)
      .get("q")
      ?.toLowerCase();
    if (query) {
      const filtered = reelsData.filter(
        (reel) =>
          reel.movieName.toLowerCase().includes(query) ||
          reel.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          reel.name?.toLowerCase().includes(query) // Filtering by 'name' (e.g., 1200.mp4)
      );
      setFilteredReels(filtered);
    }
  }, []);

  return (
    <div className="p-4">
      <Metadata
        seoTitle="Top Movie Clips | Watch the Best Moments"
        seoDescription="Discover a collection of trending clips, behind-the-scenes footage, and exclusive trailers. Watch, enjoy, and stay entertained with our curated movie clips."
      />
      {/* Reels Section */}
      <div className="flex items-center justify-between mb-4 py-2">
        <div className="flex items-center space-x-2">
          <Film size={24} />
          <span className="font-semibold text-lg md:text-2xl">
            Reels: Search & Watch.
          </span>
        </div>
      </div>

      {/* If no reels match the search query, display "Not Found" */}
      {filteredReels.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10 min-h-[55vh]">
          <Rabbit size={96} className=" text-gray-500" />
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-semibold text-center">
            Oops! We couldn't find any results matching your search.
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 text-center">
            Try using different keywords or check for typos. If you need further
            assistance, feel free to contact support.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
          {/* Reels Grid (Showing video snapshots with captions) */}
          {filteredReels.map((reel, index) => (
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
                  rel="noopener noreferrer"
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
                  <>
                    <p>Code: {reel.name?.replace(".mp4", "")}</p>
                    <div></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
