import React, { useState } from 'react';

export default function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  userAnswer,
  onSelectOption,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
  onToggleMobileDrawer
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!question) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
        No question selected or available for this filter.
      </div>
    );
  }

  const isAnswered = userAnswer !== undefined;
  const isCorrect = isAnswered && userAnswer === question.correctAnswerIndex;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between min-h-[500px]">
      {/* Question Header Meta */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            {/* Mobile drawer opener button */}
            <button
              onClick={onToggleMobileDrawer}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1"
            >
              <span>📑 Grid</span>
            </button>
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
              🏷️ {question.topic}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${
                question.difficulty === 'Easy'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : question.difficulty === 'Medium'
                  ? 'bg-amber-50 text-amber-700 border border-amber-200'
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}
            >
              {question.difficulty}
            </span>
          </div>
        </div>

        {/* Question Statement */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3">
          {question.title}
        </h3>
        <div className="text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-200/80 mb-6 font-normal">
          {question.questionText}
        </div>

        {/* Options List */}
        <div className="space-y-3 mb-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Select Your Answer:
          </p>
          {question.options.map((optionText, idx) => {
            const isSelected = userAnswer === idx;
            const isCorrectOption = idx === question.correctAnswerIndex;
            
            let optionStyle = "bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 text-slate-800";
            
            if (isSelected) {
              if (showAnswer || isAnswered) {
                optionStyle = isCorrectOption
                  ? "bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-200"
                  : "bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-200";
              } else {
                optionStyle = "bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-200 font-semibold";
              }
            } else if (showAnswer && isCorrectOption) {
              optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 border-dashed";
            }

            const optionLabels = ['A', 'B', 'C', 'D'];

            return (
              <button
                key={idx}
                onClick={() => onSelectOption(question.id, idx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm transition-all duration-150 flex items-start space-x-3 group ${optionStyle}`}
              >
                <span
                  className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                  }`}
                >
                  {optionLabels[idx] || idx + 1}
                </span>
                <span className="flex-1 font-medium">{optionText}</span>
              </button>
            );
          })}
        </div>

        {/* Answer Feedback Banner */}
        {isAnswered && (
          <div
            className={`p-4 rounded-xl mb-6 text-sm flex items-center justify-between border ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">{isCorrect ? '✅' : '❌'}</span>
              <span className="font-bold">
                {isCorrect ? 'Correct Answer!' : 'Incorrect Answer. Try reviewing the solution below.'}
              </span>
            </div>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="text-xs font-bold underline hover:no-underline"
            >
              {showAnswer ? 'Hide Solution' : 'View Solution'}
            </button>
          </div>
        )}

        {/* Show / Hide Answer Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs"
          >
            <span>{showAnswer ? '🙈' : '💡'}</span>
            <span>{showAnswer ? 'Hide Answer & Explanation' : 'Show Answer & Explanation'}</span>
          </button>

          {showAnswer && (
            <div className="mt-3 p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-xs sm:text-sm text-slate-800 space-y-2 animate-fadeIn">
              <p className="font-bold text-blue-900 flex items-center gap-1.5">
                <span>🎯 Correct Answer:</span>
                <span className="underline">{question.options[question.correctAnswerIndex]}</span>
              </p>
              <p className="text-slate-700 leading-relaxed pt-1 border-t border-blue-200/60">
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Nav Controls: Prev / Next */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            hasPrev
              ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
              : 'bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed'
          }`}
        >
          <span>← Previous</span>
        </button>

        <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
          Use Question Grid to Jump
        </span>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            hasNext
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20'
              : 'bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}
        >
          <span>Next →</span>
        </button>
      </div>
    </div>
  );
}
