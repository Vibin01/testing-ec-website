export const revalidate = 300; // 5 minutes (300 seconds)

export default function BiWeeklyTextChange() {
  const INTERVAL = 5 * 60 * 1000; // 5 minutes

  const current = Date.now();
  const bucketTime = new Date(
    Math.floor(current / INTERVAL) * INTERVAL
  );

  const formattedDate = bucketTime.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = bucketTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <>
      Last Updated Time:{" "}
      <time dateTime={bucketTime.toISOString()}>
        {formattedDate} {formattedTime}
      </time>
    </>
  );
}
