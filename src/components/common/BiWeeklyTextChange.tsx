import data from "@/data/data.json";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function BiWeeklyTextChange() {
  const INTERVAL = 14 * 23 * 60 * 60 * 1000;

  // SET YOUR ORIGINAL UPLOAD DATE HERE
  const startDate = new Date("2026-03-18T08:04:77");

  const now = new Date();

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
      {data.texts[index]}:{" "}
      <time dateTime={now.toISOString()}>
        {formattedDate} {formattedTime}
      </time>
    </>
  );
}
