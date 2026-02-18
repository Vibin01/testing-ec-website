"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoSection({ videoUrl }: { videoUrl: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!videoUrl || !videoRef.current) return;

    const mediaSource = new MediaSource();
    const video = videoRef.current;
    let sourceBuffer: SourceBuffer | null = null;

    video.src = URL.createObjectURL(mediaSource);
    setLoading(true);

    const worker = new Worker("/workers/videoWorker.js");

    const codecList = [
      'video/mp4; codecs="avc1.42E01E"', 
      'video/mp4; codecs="avc1.4D401E"', 
      'video/mp4; codecs="avc1.64001E"', 
      'video/webm; codecs="vp9"',
      'video/mp4; codecs="av01.0.05M.08"',
    ];
    const supportedCodec = codecList.find((codec) =>
      MediaSource.isTypeSupported(codec)
    );

    if (!supportedCodec) {
      console.error("❌ No supported codecs found for this browser.");
      setLoading(false);
      return;
    }

    mediaSource.addEventListener("sourceopen", () => {
      if (mediaSource.readyState !== "open") return;
      try {
        sourceBuffer = mediaSource.addSourceBuffer(supportedCodec);
      } catch (err) {
        console.error("Failed to create SourceBuffer:", err);
        return;
      }

      worker.postMessage({ url: videoUrl });

      worker.onmessage = (e) => {
        if (e.data.error) {
          console.error("Worker error:", e.data.error);
          setLoading(false);
          return;
        }

        const buffer = e.data.buffer;
        const append = () => {
          if (!sourceBuffer) return;
          if (sourceBuffer.updating) {
            sourceBuffer.addEventListener("updateend", append, { once: true });
            return;
          }

          try {
            sourceBuffer.appendBuffer(buffer);
            sourceBuffer.addEventListener(
              "updateend",
              () => {
                if (mediaSource.readyState === "open") {
                  mediaSource.endOfStream();
                  setLoading(false);
                  video.play();
                }
              },
              { once: true }
            );
          } catch (err) {
            console.error("Append error:", err);
          }
        };

        append();
      };
    });

    return () => {
      worker.terminate();
      if (mediaSource.readyState === "open") {
        try {
          mediaSource.endOfStream();
        } catch {}
      }
    };
  }, [videoUrl]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {loading && <p className="text-gray-500 mb-2">Loading video...</p>}
      <video ref={videoRef} controls className="w-full max-w-2xl rounded-lg" />
    </div>
  );
}
