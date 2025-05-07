import React from 'react'
import { redirect } from 'next/navigation'
import { getUserOnBoardingStatus } from '@/actions/user'

const IndustryInsightsPage = async () => {
  const { isOnBoarded } = await getUserOnBoardingStatus();
  
    if (!isOnBoarded) {
      redirect('/onboarding')
    }
  return (
    <div>IndustryInsightsPage</div>
  )
}

export default IndustryInsightsPage