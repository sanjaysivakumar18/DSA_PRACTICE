import React from 'react';

export default function DashboardStats({ totalQuestions, answeredCount, remainingCount, selectedTopic }) {
  const completionPercentage = totalQuestions > 0 
    ? Math.round((answeredCount / totalQuestions) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Topic Title */}
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-1">
            Current Filter: {selectedTopic}
          </span>
          <h2 className="text-xl font-bold text-slate-900">
            Practice Dashboard
          </h2>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 flex-1 max-w-xl">
          {/* Total Questions */}
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-center sm:text-left">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total</p>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-2xl font-extrabold text-slate-900">{totalQuestions}</span>
              <span className="text-xs font-medium text-slate-400 hidden sm:inline">Questions</span>
            </div>
          </div>

          {/* Answered */}
          <div className="bg-emerald-50/70 rounded-xl p-3.5 border border-emerald-200/70 text-center sm:text-left">
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Answered</p>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-2xl font-extrabold text-emerald-800">{answeredCount}</span>
              <span className="text-xs font-medium text-emerald-600 hidden sm:inline">Done</span>
            </div>
          </div>

          {/* Remaining */}
          <div className="bg-amber-50/70 rounded-xl p-3.5 border border-amber-200/70 text-center sm:text-left">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Remaining</p>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-2xl font-extrabold text-amber-800">{remainingCount}</span>
              <span className="text-xs font-medium text-amber-600 hidden sm:inline">Left</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-4">
        <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <span className="text-xs font-bold text-slate-600 min-w-12 text-right">
          {completionPercentage}% Complete
        </span>
      </div>
    </div>
  );
}
