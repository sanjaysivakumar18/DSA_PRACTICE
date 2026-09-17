import React from 'react';

export default function QuestionGrid({
  questions,
  currentQuestionId,
  onSelectQuestion,
  searchQuery,
  onSearchChange,
  answeredQuestionsMap,
  isMobileDrawerOpen,
  setIsMobileDrawerOpen
}) {
  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsMobileDrawerOpen(false)}
        />
      )}

      {/* Main Question Navigator Box */}
      <aside
        className={`bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col transition-all duration-300 ${
          isMobileDrawerOpen
            ? 'fixed inset-y-0 left-0 z-50 w-80 m-4 max-h-[calc(100vh-2rem)] overflow-y-auto'
            : 'hidden lg:flex lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] overflow-y-auto'
        }`}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 font-bold">📌</span>
            <h3 className="font-bold text-slate-900 text-sm">Question Navigator</h3>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {questions.length} Items
          </span>
        </div>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search question # or topic..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 font-medium"
          />
          <span className="absolute left-3 top-2.5 text-slate-400 text-xs">
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Grid Status Legend */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium mb-3 px-1">
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
            <span>Answered</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
            <span>Selected</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block"></span>
            <span>Unanswered</span>
          </div>
        </div>

        {/* Question Number Grid */}
        <div className="grid grid-cols-5 gap-2 overflow-y-auto pr-1">
          {questions.map((q, idx) => {
            const isSelected = q.id === currentQuestionId;
            const isAnswered = answeredQuestionsMap[q.id] !== undefined;

            let buttonClass = "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300";

            if (isSelected) {
              buttonClass = "bg-blue-600 text-white border-blue-600 ring-2 ring-blue-300 font-bold";
            } else if (isAnswered) {
              buttonClass = "bg-emerald-50 text-emerald-700 border-emerald-300 font-semibold";
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  onSelectQuestion(q.id);
                  setIsMobileDrawerOpen(false);
                }}
                className={`h-10 rounded-xl text-xs flex flex-col items-center justify-center border transition-all duration-150 relative ${buttonClass}`}
                title={`Q${q.number}: ${q.title}`}
              >
                <span>Q{q.number || idx + 1}</span>
                {isAnswered && !isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute bottom-1"></span>
                )}
              </button>
            );
          })}
        </div>

        {questions.length === 0 && (
          <div className="py-8 text-center text-xs text-slate-400">
            No questions match your filter.
          </div>
        )}
      </aside>
    </>
  );
}
