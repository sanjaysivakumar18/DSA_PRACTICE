import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'questions', label: 'Questions', shortLabel: 'Practice', icon: '📝' },
    { id: 'progress', label: 'Progress', shortLabel: 'Stats', icon: '📊' },
    { id: 'test', label: 'Test Mode', shortLabel: 'Test', icon: '⏱️' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={() => setActiveTab('questions')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-md shadow-blue-500/20 flex-shrink-0">
              ⟨/⟩
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-bold tracking-tight text-slate-900 leading-tight">
                DSA <span className="text-blue-600">Hub</span>
              </h1>
              <p className="text-[11px] text-slate-500 font-medium hidden md:block">
                Master Data Structures & Algorithms
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <span className="text-xs sm:text-base">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
