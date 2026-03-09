"use client";

import { useEffect, useState } from "react";

const INTERVAL = 2 * 60 * 1000; // 2 minutes
const DEPLOY_TIME = new Date("2026-03-09T10:00:00"); // deployment time

export default function BiWeeklyTextChange() {
  const [now, setNow] = useState(() => {
    const current = Date.now();
    return new Date(
      Math.floor((current - DEPLOY_TIME.getTime()) / INTERVAL) * INTERVAL +
        DEPLOY_TIME.getTime()
    );
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const current = Date.now();

      setNow(
        new Date(
          Math.floor((current - DEPLOY_TIME.getTime()) / INTERVAL) * INTERVAL +
            DEPLOY_TIME.getTime()
        )
      );
    }, 1000);

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