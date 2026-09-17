import React, { useState, useEffect } from 'react';

export default function TestModeView({ questions }) {
  const [testActive, setTestActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes default
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [testAnswers, setTestAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);

  useEffect(() => {
    let timer;
    if (testActive && timeLeft > 0 && !testCompleted) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && testActive) {
      setTestCompleted(true);
      setTestActive(false);
    }
    return () => clearInterval(timer);
  }, [testActive, timeLeft, testCompleted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartTest = () => {
    setTestActive(true);
    setTestCompleted(false);
    setTestAnswers({});
    setCurrentTestIndex(0);
    setTimeLeft(600);
  };

  const handleOptionSelect = (qId, optionIdx) => {
    setTestAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (testAnswers[q.id] === q.correctAnswerIndex) {
        correct += 1;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  };

  const currentQ = questions[currentTestIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Test Mode Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-1">
            ⏱️ Timed Assessment
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            DSA Test Mode
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Simulate exam conditions with time constraints.
          </p>
        </div>

        {/* Controls / Timer Display */}
        <div className="flex items-center space-x-4">
          <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl font-mono text-xl font-bold tracking-wider shadow-inner flex items-center space-x-2">
            <span className="text-amber-400">⏱</span>
            <span>{formatTime(timeLeft)}</span>
          </div>

          {!testActive && !testCompleted ? (
            <button
              onClick={handleStartTest}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-all"
            >
              Start Assessment
            </button>
          ) : testActive ? (
            <button
              onClick={() => {
                setTestCompleted(true);
                setTestActive(false);
              }}
              className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-sm transition-all"
            >
              Finish & Submit
            </button>
          ) : (
            <button
              onClick={handleStartTest}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-sm font-bold shadow-sm transition-all"
            >
              Retake Test
            </button>
          )}
        </div>
      </div>

      {/* Test Completed View */}
      {testCompleted && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs text-center animate-fadeIn">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto text-3xl mb-4 font-bold border border-blue-200">
            🏆
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">Test Completed!</h3>
          <p className="text-sm text-slate-500 mb-6">Here is your assessment summary:</p>

          {(() => {
            const score = calculateScore();
            return (
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500">Score</p>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">{score.correct} / {score.total}</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                  <p className="text-xs font-semibold text-emerald-700">Accuracy</p>
                  <p className="text-2xl font-extrabold text-emerald-800 mt-1">{score.percentage}%</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <p className="text-xs font-semibold text-blue-700">Questions</p>
                  <p className="text-2xl font-extrabold text-blue-800 mt-1">{Object.keys(testAnswers).length} Ans</p>
                </div>
              </div>
            );
          })()}

          <button
            onClick={handleStartTest}
            className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Active Question Panel */}
      {testActive && !testCompleted && currentQ && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Test Question {currentTestIndex + 1} of {questions.length}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {questions.length - Object.keys(testAnswers).length} Unanswered
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-2">{currentQ.title}</h3>
          <p className="text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-6">
            {currentQ.questionText}
          </p>

          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, idx) => {
              const isSelected = testAnswers[currentQ.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(currentQ.id, idx)}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center space-x-3 ${
                    isSelected
                      ? 'bg-blue-50 border-blue-600 text-blue-900 font-semibold ring-2 ring-blue-200'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {['A', 'B', 'C', 'D'][idx]}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentTestIndex(prev => Math.max(0, prev - 1))}
              disabled={currentTestIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 disabled:opacity-40"
            >
              ← Previous
            </button>

            <button
              onClick={() => setCurrentTestIndex(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentTestIndex === questions.length - 1}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {!testActive && !testCompleted && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-600 shadow-xs">
          <p className="text-sm font-semibold mb-2">Ready to test your DSA knowledge?</p>
          <p className="text-xs text-slate-400 mb-6 max-w-sm mx-auto">
            Click "Start Assessment" above to run a 10-minute timed quiz on available practice questions.
          </p>
        </div>
      )}
    </div>
  );
}
