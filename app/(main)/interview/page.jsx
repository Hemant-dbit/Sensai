import React from "react";
import { getAssessments } from "@/actions/interview";
import PerformanceChart from "./_components/performance-chart";
import Statscard from "./_components/stats-cards";
import QuizList from "./_components/quiz-list";


const InterviewPage = async() => {

  const assessments = await getAssessments();
  return (
    <div>
      <h1 className="text-6xl font-bold text-left gradient-title mb-5">
        Interview Preparation
      </h1>

      <div className="space-y-6">
        <Statscard assessments={assessments}/>
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
};

export default InterviewPage;
