import { industries } from "@/data/industries";
import React from "react";
import { redirect } from "next/navigation";
import { getUserOnBoardingStatus } from "@/actions/user";
import OnBoardingForm from "./_components/onboarding-form";

const onBoarding = async () => {
  const { isOnBoarded } = await getUserOnBoardingStatus();

  if (isOnBoarded) {
    redirect("/dashboard");
  }
  return (
    <main>
      <OnBoardingForm industries={industries} />
    </main>
  );
};

export default onBoarding;
