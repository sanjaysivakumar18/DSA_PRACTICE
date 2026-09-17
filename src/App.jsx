import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import QuestionsView from './components/QuestionsView';
import ProgressView from './components/ProgressView';
import TestModeView from './components/TestModeView';
import { DEFAULT_TOPICS } from './data/topics';
import { QUESTION_BANK } from './data/questionBank';

export default function App() {
  const [activeTab, setActiveTab] = useState('questions');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [questions, setQuestions] = useState(QUESTION_BANK);
  
  // User answers state loaded from localStorage
  const [userAnswers, setUserAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa_hub_user_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save answers to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dsa_hub_user_answers', JSON.stringify(userAnswers));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [userAnswers]);

  // Data-driven topics calculation: combines default topics list with all unique topics present in question bank
  const topics = React.useMemo(() => {
    const questionTopics = Array.from(new Set(questions.map(q => q.topic)));
    const merged = Array.from(new Set([...DEFAULT_TOPICS, ...questionTopics]));
    return merged;
  }, [questions]);

  // Handle user selecting an option
  const handleSelectOption = (questionId, optionIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  // Reset progress handler
  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your progress data?")) {
      setUserAnswers({});
      localStorage.removeItem('dsa_hub_user_answers');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Container */}
      <main className="flex-1 pb-12">
        {activeTab === 'questions' && (
          <QuestionsView
            questions={questions}
            topics={topics}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            userAnswers={userAnswers}
            onSelectOption={handleSelectOption}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressView
            questions={questions}
            topics={topics}
            userAnswers={userAnswers}
            onResetProgress={handleResetProgress}
          />
        )}

        {activeTab === 'test' && (
          <TestModeView questions={questions} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>DSA Practice Hub &copy; {new Date().getFullYear()}</span>
          <span className="font-semibold text-blue-600">{questions.length} DSA Multiple Choice Questions Loaded</span>
        </div>
      </footer>
    </div>
  );
}
