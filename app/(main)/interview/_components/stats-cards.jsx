"use client";

import { Brain, Target, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";

export default function StatsCards({ assessments }) {
  const stats = useMemo(() => {
    if (!Array.isArray(assessments) || assessments.length === 0) {
      return {
        averageScore: 0,
        totalQuestions: 0,
        latestAssessment: null,
      };
    }

    const totalScore = assessments.reduce(
      (sum, assessment) => sum + assessment.quizScore,
      0
    );
    const averageScore = (totalScore / assessments.length).toFixed(1);
    const totalQuestions = assessments.reduce(
      (sum, assessment) => sum + assessment.questions.length,
      0
    );
    const latestAssessment = assessments[0];

    return {
      averageScore,
      totalQuestions,
      latestAssessment,
    };
  }, [assessments]);

  if (!assessments) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-black text-white animate-pulse">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="h-4 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Average Score */}
      <Card className="bg-black text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-left">{stats.averageScore}%</div>
          <p className="text-xs text-muted-foreground text-left">
            Across all assessments
          </p>
        </CardContent>
      </Card>

      {/* Questions Practiced */}
      <Card className="bg-black text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">
            Questions Practiced
          </CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-left">{stats.totalQuestions}</div>
          <p className="text-xs text-muted-foreground text-left">Total questions</p>
        </CardContent>
      </Card>

      {/* Latest Score */}
      <Card className="bg-black text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">Latest Score</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-left">
            {stats.latestAssessment?.quizScore.toFixed(1) || 0}%
          </div>
          <p className="text-xs text-muted-foreground text-left">Most recent quiz</p>
        </CardContent>
      </Card>
    </div>
  );
}