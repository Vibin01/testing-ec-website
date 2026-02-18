"use client";

import { useEffect, useState } from "react";

export default function BiWeeklyTextChange() {
  const INTERVAL = 5 * 50 * 1000; // 5 minutes

  const [now, setNow] = useState(() => {
    const current = Date.now();
    return new Date(Math.floor(current / INTERVAL) * INTERVAL);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const current = Date.now();
      setNow(new Date(Math.floor(current / INTERVAL) * INTERVAL));
    }, 1000); // check every second

    return () => clearInterval(timer);
  }, []);

  const formattedDate = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <>
      Last Updated Time:{" "}
      <time dateTime={now.toISOString()}>
        {formattedDate} {formattedTime}
      </time>
    </>
  );
}
