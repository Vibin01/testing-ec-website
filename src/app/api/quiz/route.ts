// ---------------- API ROUTES ----------------

// /app/api/feedback/route.ts
export async function GET() {
  return Response.json({
    status: "success",
    data: [
      {
        feedback_question_id: 7,
        feedback_question:
          "How helpful was the recruiters feedback in clarifying the status of your resume?",
      },
      {
        feedback_question_id: 8,
        feedback_question:
          "How would you rate the quality of the feedback you received from the recruiter regarding your resume?",
      },
      {
        feedback_question_id: 9,
        feedback_question:
          "Rate your eagerness to be part of this companys workforce",
      },
    ],
  });
}

// /app/api/submit/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  console.log("Received Answers:", body);

  return Response.json({ success: true });
}
