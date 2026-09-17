import React from 'react';

export default function ProgressView({ questions, topics, userAnswers, onResetProgress }) {
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  
  let correctCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswerIndex) {
      correctCount += 1;
    }
  });

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const overallPercentage = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-1">
            📊 Analytics & Progress
          </span>
          <h2 className="text-2xl font-bold text-slate-900">Performance Summary</h2>
        </div>
        
        {answeredCount > 0 && (
          <button
            onClick={onResetProgress}
            className="px-3.5 py-2 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors"
          >
            Reset Progress
          </button>
        )}
      </div>

      {/* Top 4 Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Bank</p>
          <p className="text-3xl font-extrabold text-slate-900 mt-1">{totalQuestions}</p>
          <p className="text-xs text-slate-500 mt-1">Questions available</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Answered</p>
          <p className="text-3xl font-extrabold text-blue-600 mt-1">{answeredCount}</p>
          <p className="text-xs text-blue-600 font-medium mt-1">{overallPercentage}% Completed</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Correct</p>
          <p className="text-3xl font-extrabold text-emerald-600 mt-1">{correctCount}</p>
          <p className="text-xs text-emerald-600 font-medium mt-1">First attempt</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Accuracy</p>
          <p className="text-3xl font-extrabold text-amber-600 mt-1">{accuracy}%</p>
          <p className="text-xs text-amber-600 font-medium mt-1">Success Rate</p>
        </div>
      </div>

      {/* Topic-wise Progress Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏷️</span> Topic-wise Breakdown
        </h3>

        <div className="space-y-4">
          {topics.filter(t => t !== 'All').map(topic => {
            const topicQs = questions.filter(q => q.topic === topic);
            const topicTotal = topicQs.length;
            const topicAns = topicQs.filter(q => userAnswers[q.id] !== undefined).length;
            const topicPct = topicTotal > 0 ? Math.round((topicAns / topicTotal) * 100) : 0;

            return (
              <div key={topic} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
                  <span className="flex items-center gap-2">
                    <span>{topic}</span>
                    <span className="font-normal text-slate-400">({topicTotal} questions)</span>
                  </span>
                  <span>{topicAns} / {topicTotal} ({topicPct}%)</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${topicPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
