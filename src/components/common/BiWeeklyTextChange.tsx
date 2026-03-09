"use client";

import { useEffect, useState } from "react";

export default function BiWeeklyTextChange() {
  const INTERVAL = 2 * 60 * 1000; // 2 minutes

  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, INTERVAL);

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
      Last Updated Time{" "}
      <time dateTime={now.toISOString()}>
        {formattedDate} {formattedTime}
      </time>
    </>
  );
}