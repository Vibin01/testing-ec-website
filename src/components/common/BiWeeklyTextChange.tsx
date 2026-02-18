"use client";

import { useEffect, useState } from "react";
import data from "@/data/data.json";

export default function BiWeeklyTextChange() {
  const INTERVAL = 5 * 60 * 1000; // 1 minute

  const startDate = new Date("2026-03-18T10:42:40");

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const diff = now.getTime() - startDate.getTime();

  const index =
    Math.floor(diff / INTERVAL) % data.texts.length;

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
      {data.texts[index]} <br />
      Last Updated Timesss:{" "}
      <time dateTime={now.toISOString()}>
        {formattedDate} {formattedTime}
      </time>
    </>
  );
}
