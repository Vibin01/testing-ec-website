"use client";

import { useEffect, useState } from "react";
import FaceRating from "./faceRating";
import ResultDialog from "./resultDialogbox";

// Types
type Question = {
  feedback_question_id: number;
  feedback_question: string;
};

type SectionConfig = {
  code: number;
  label: string;
  mode: "positive" | "mixed";
};

// Section Config
const SECTIONS: SectionConfig[] = [
  { code: 2000, label: "Section 1", mode: "positive" },
  { code: 2010, label: "Section 2", mode: "positive" },
  { code: 2030, label: "Section 3", mode: "mixed" },
];

export default function QuizPage() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [allQuestions, setAllQuestions] = useState<
    Record<number, Question[]>
  >({});

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  const currentSection = SECTIONS[sectionIndex];
  const questions = allQuestions[currentSection.code] || [];
  const currentQuestion = questions[questionIndex];

  const [showResult, setShowResult] = useState(false);

    useEffect(() => {
    const fetchAllSections = async () => {
      try {
        setIsLoading(true);

        const results = await Promise.all(
          SECTIONS.map(async (section) => {
            const res = await fetch(`/api/question?code=${section.code}`);

            const data = await res.json();

            return {
              code: section.code,
              questions: data?.data || [],
            };
          })
        );

        const mapped: Record<number, Question[]> = {};

        results.forEach((r) => {
          mapped[r.code] = r.questions;
        });

        setAllQuestions(mapped);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllSections();
  }, []);


  // ✅ Handle Answer
  const handleAnswerChange = (value: number) => {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.feedback_question_id]: value,
    }));
  };

  // ✅ Navigation
  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      return;
    }

    if (sectionIndex < SECTIONS.length - 1) {
      setSectionIndex((prev) => prev + 1);
      setQuestionIndex(0);
    }
  };

  const handlePrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
      return;
    }

    if (sectionIndex > 0) {
      const prevSectionIndex = sectionIndex - 1;
      const prevSection = SECTIONS[prevSectionIndex];
      const prevQuestions = allQuestions[prevSection.code] || [];

      setSectionIndex(prevSectionIndex);
      setQuestionIndex(prevQuestions.length - 1);
    }
  };

  // ✅ Validation
  const validateAllAnswers = () => {
    return Object.values(allQuestions).every((qs) =>
      qs.every((q) => answers[q.feedback_question_id] !== undefined)
    );
  };

  const handleSubmit = () => {
    if (!validateAllAnswers()) {
      alert("Please answer all questions");
      return;
    }
setShowResult(true);
    console.log("Final Answers:", answers);
  };

  const isLastStep =
    sectionIndex === SECTIONS.length - 1 &&
    questionIndex === questions.length - 1;

  // UI
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading questions...</p>
      </div>
    );
  }

  return (
    <div className="px-[5%] py-[5%]">

<ResultDialog
  open={showResult}
  onOpenChange={setShowResult}
  sections={SECTIONS}
  allQuestions={allQuestions}
  answers={answers}
/>

      {/* Top Bar */}
      <div className="flex justify-end items-center gap-6 mb-6">
        <div className="flex gap-2">
          {SECTIONS.map((section, index) => (
            <button
              key={section.code}
              onClick={() => {
                setSectionIndex(index);
                setQuestionIndex(0);
              }}
              className={`px-5 py-2 rounded-xl border ${
                sectionIndex === index
                  ? "bg-blue-500 text-white"
                  : "border-blue-500"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <span className="text-gray-600">Time left: 19 min</span>
      </div>

      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
         <div className="flex gap-[10%] text-nowrap">
          <h2 className="text-lg font-semibold text-blue-500">
{currentSection.label}
          </h2>
          <h2 className="text-lg font-semibold">
            Question {questionIndex + 1} / {questions.length}
          </h2>
         </div>
          
          <span className="text-red-500 text-sm font-medium">40 sec</span>
        </div>

        {/* Question */}
        <div className="mb-6 px-4 py-3 text-blue-600">
          <h3 className="text-xl font-medium">
            {currentQuestion?.feedback_question}
          </h3>
        </div>

        {/* Face Rating */}
        <FaceRating
          value={
            currentQuestion
              ? answers[currentQuestion.feedback_question_id] ?? null
              : null
          }
          onChange={handleAnswerChange}
          mode={currentSection.mode}
        />

        {/* Navigation */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 border rounded-lg"
          >
            Prev
          </button>

          {isLastStep ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}