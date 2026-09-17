import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'questions', label: 'Questions', icon: '📝' },
    { id: 'progress', label: 'Progress', icon: '📊' },
    { id: 'test', label: 'Test Mode', icon: '⏱️' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('questions')}>
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20">
              ⟨/⟩
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                DSA <span className="text-blue-600">Practice Hub</span>
              </h1>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Master Data Structures & Algorithms
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 sm:space-x-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3 sm:px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
