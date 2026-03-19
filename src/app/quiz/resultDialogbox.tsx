"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Question = {
  feedback_question_id: number;
  feedback_question: string;
};

type SectionConfig = {
  code: number;
  label: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sections: SectionConfig[];
  allQuestions: Record<number, Question[]>;
  answers: Record<number, number>;
};

export default function ResultDialog({
  open,
  onOpenChange,
  sections,
  allQuestions,
  answers,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[60%]">
        <DialogHeader>
          <DialogTitle>Result</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 max-h-[70vh] overflow-y-auto">
          {sections.map((section) => {
            const questions = allQuestions[section.code] || [];

            return (
              <div key={section.code}>
                <h3 className="text-lg font-semibold mb-2 text-blue-600">
                  {section.label}
                </h3>

                <div className="space-y-2 ">
                  {questions.map((q) => (
                    <div
                      key={q.feedback_question_id}
                      className="flex flex-col gap-[1%] justify-between py-2 px-5" 
                    >
                      <span className="text-lg font-medium text-gray-700">
                        {q.feedback_question}
                      </span>
                      <span className="py-2">
                        Review: &nbsp;
                        <span className={answers[q.feedback_question_id] < 0 ? "text-red-600" : ""}>
                          {answers[q.feedback_question_id] ?? "-"}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}