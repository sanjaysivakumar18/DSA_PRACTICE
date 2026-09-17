import React from 'react';

export default function TopicFilter({ topics, selectedTopic, onSelectTopic, questionCountsByTopic }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
          <span>🏷️</span> Topics Filter
        </h3>
        <span className="text-xs text-slate-500 font-medium">
          {topics.length} Categories
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
        {topics.map((topic) => {
          const isSelected = selectedTopic === topic;
          const count = questionCountsByTopic[topic] ?? 0;

          return (
            <button
              key={topic}
              onClick={() => onSelectTopic(topic)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 border ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-500/20'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <span>{topic}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  isSelected
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
