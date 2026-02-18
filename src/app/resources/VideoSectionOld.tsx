"use client";
import { useEffect, useState } from "react";
import { VideoData } from "@/data/ResourcesPageData";

export default function VideoSectionOld() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isEmbed = (url: string) =>
    url.includes("youtube") || url.includes("vimeo");

  
  useEffect(() => {
    if (videoSrc) {
      const video = document.querySelector("video");
      video?.addEventListener("canplaythrough", () => {
        video.play().catch(console.error);
      });
    }
  }, [videoSrc]);

  // Load MP4
  useEffect(() => {
    if (!activeVideo || activeVideo === "" || isEmbed(activeVideo)) return;

    const loadVideo = async () => {
      setLoading(true);
      setVideoSrc(null);

      const threadCount = 10;
      const videoPath = activeVideo;

      try {
        const res = await fetch(videoPath, { method: "HEAD" });
        const size = Number(res.headers.get("content-length"));
        if (!size) throw new Error("Unable to fetch video size.");

        const chunkSize = Math.ceil(size / threadCount);
        const workers: Worker[] = [];
        const chunks: ArrayBuffer[] = new Array(threadCount);

        for (let i = 0; i < threadCount; i++) {
          const start = i * chunkSize;
          const end = i === threadCount - 1 ? size - 1 : (i + 1) * chunkSize - 1;

          const worker = new Worker("/workers/videoWorker.js");
          workers.push(worker);

          worker.postMessage({ url: videoPath, start, end, index: i });

          worker.onmessage = (event) => {
            const { index, buffer, error } = event.data;
            if (error) return;

            chunks[index] = buffer;

            if (chunks.filter(Boolean).length === threadCount) {
              const combined = new Blob(chunks, { type: "video/mp4" });
              const blobUrl = URL.createObjectURL(combined);
              setVideoSrc(blobUrl);
              setLoading(false);
              workers.forEach((w) => w.terminate());
            }
          };
        }
      } catch (err) {
        console.error("Video load error:", err);
        setLoading(false);
      }
    };

    loadVideo();
  }, [activeVideo]);

  return (
    <>
      {/* ---------------------- */}
      {/*   SECTION HIDDEN IF COMING SOON */}
      {/* ---------------------- */}
      {!activeVideo &&activeVideo!=="" && (
        <section className="pb-10 lg:pb-[5%] pt-10 lg:pt-[3%]">
          <h2 className="px-4 lg:px-0 text-[20px] md:text-[26px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] font-bold text-center mb-12 md:mb-18 lg:mb-24">
            Curated content Tailored to your role
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 lg:px-6">
            {VideoData.map((item, index) => (
              <div
                key={index}
                data-role={item.role}
                className="video-section group flex flex-col w-full md:w-1/3 px-4 cursor-pointer"
                onClick={() => {
                  if (!item.videoUrl || item.videoUrl === "") {
                    setActiveVideo(""); 
                    return;
                  }
                  setActiveVideo(item.videoUrl);
                }}
              >
                <h3 className="mb-2 lg:mb-5 text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold">
                  For {item.role}
                </h3>

                <div className="relative w-full h-auto aspect-video bg-black flex items-center justify-center rounded-[12px] lg:rounded-[20px] xl:rounded-[32px]">
                  <div className="text-white text-4xl">&#9658;</div>
                </div>
                <h3 className="my-2 lg:my-4 text-start text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[26px] font-medium">
                  {item.title}
                </h3>
                <p className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-start">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------------------- */}
      {/*   COMING SOON SCREEN */}
      {/* ---------------------- */}
      {activeVideo === "" && (
        <div className="flex flex-col items-center w-full justify-center my-10 p-10">
          <button
            className="mb-6 bg-black text-white px-4 py-2 rounded-lg"
            onClick={() => setActiveVideo(null)}
          >
            ✕ Close
          </button>

          <p className="text-4xl font-semibold">Coming soon…</p>
        </div>
      )}

      {/* ---------------------- */}
      {/*   VIDEO PLAYER */}
      {/* ---------------------- */}
      {activeVideo && activeVideo.trim() !== ""  && (
        <div className="flex flex-col items-center  w-full justify-center p-4">
          <button
            className="mb-4 bg-black text-white px-4 py-2 rounded-lg"
            onClick={() => setActiveVideo(null)}
          >
            ✕ Close
          </button>

          {loading && <p className="h-[500px]">Loading video....</p>}

          {isEmbed(activeVideo) ? (
            <iframe
              className="w-full h-[800px] rounded-[40px]"
              src={`${activeVideo}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            videoSrc && (
              <video
                src={videoSrc}
                controls
                autoPlay
                className="rounded-lg shadow-lg h-[500px] lg:h-[750px] w-full max-w-[90%]"
              />
            )
          )}
        </div>
      )}
    </>
  );
}
