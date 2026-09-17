import React, { useState } from 'react';
import DashboardStats from './DashboardStats';
import TopicFilter from './TopicFilter';
import QuestionGrid from './QuestionGrid';
import QuestionCard from './QuestionCard';

export default function QuestionsView({
  questions,
  topics,
  selectedTopic,
  setSelectedTopic,
  userAnswers,
  onSelectOption
}) {
  const [currentQuestionId, setCurrentQuestionId] = useState(questions[0]?.id || 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Compute data-driven topic counts
  const questionCountsByTopic = topics.reduce((acc, topic) => {
    if (topic === 'All') {
      acc[topic] = questions.length;
    } else {
      acc[topic] = questions.filter(q => q.topic === topic).length;
    }
    return acc;
  }, {});

  // Filter questions based on selected topic & search query
  const filteredQuestions = questions.filter(q => {
    const matchesTopic = selectedTopic === 'All' || q.topic === selectedTopic;
    const matchesSearch = searchQuery === '' || 
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `q${q.number}`.includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  // Calculate current active question index
  const activeQuestionIndex = filteredQuestions.findIndex(q => q.id === currentQuestionId);
  const currentQuestion = filteredQuestions[activeQuestionIndex >= 0 ? activeQuestionIndex : 0];

  // Stats calculation
  const totalQuestions = filteredQuestions.length;
  const answeredCount = filteredQuestions.filter(q => userAnswers[q.id] !== undefined).length;
  const remainingCount = totalQuestions - answeredCount;

  // Handlers for next / prev
  const handlePrev = () => {
    if (activeQuestionIndex > 0) {
      setCurrentQuestionId(filteredQuestions[activeQuestionIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (activeQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionId(filteredQuestions[activeQuestionIndex + 1].id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Dashboard Header Stats */}
      <DashboardStats
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        remainingCount={remainingCount}
        selectedTopic={selectedTopic}
      />

      {/* Data-Driven Topic Filter Pill Navigation */}
      <TopicFilter
        topics={topics}
        selectedTopic={selectedTopic}
        onSelectTopic={(topic) => {
          setSelectedTopic(topic);
          setSearchQuery('');
        }}
        questionCountsByTopic={questionCountsByTopic}
      />

      {/* Two-Column Practice Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT Column: Sticky / Drawer Question Navigator (4 cols) */}
        <div className="lg:col-span-4">
          <QuestionGrid
            questions={filteredQuestions}
            currentQuestionId={currentQuestion?.id}
            onSelectQuestion={setCurrentQuestionId}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            answeredQuestionsMap={userAnswers}
            isMobileDrawerOpen={isMobileDrawerOpen}
            setIsMobileDrawerOpen={setIsMobileDrawerOpen}
          />
        </div>

        {/* RIGHT Column: Question Card & Solutions (8 cols) */}
        <div className="lg:col-span-8">
          <QuestionCard
            question={currentQuestion}
            currentIndex={activeQuestionIndex >= 0 ? activeQuestionIndex : 0}
            totalQuestions={totalQuestions}
            userAnswer={userAnswers[currentQuestion?.id]}
            onSelectOption={onSelectOption}
            onNext={handleNext}
            onPrev={handlePrev}
            hasPrev={activeQuestionIndex > 0}
            hasNext={activeQuestionIndex < filteredQuestions.length - 1}
            onToggleMobileDrawer={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
          />
        </div>
      </div>
    </div>
  );
}
