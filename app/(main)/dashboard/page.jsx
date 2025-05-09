import React from "react";
import { redirect } from "next/navigation";
import { getUserOnBoardingStatus } from "@/actions/user";
import DashboardView from "./_components/dashboard-view";
import { getIndustryInsights } from "@/actions/dashboard";

const IndustryInsightsPage = async () => {
  const { isOnBoarded } = await getUserOnBoardingStatus();
  const insights = await getIndustryInsights();

  if (!isOnBoarded) {
    redirect("/onboarding");
  }
  return (
    <div className="mx-auto container">
      <DashboardView insights={insights}/>
    </div>
  );
};

export default IndustryInsightsPage;
