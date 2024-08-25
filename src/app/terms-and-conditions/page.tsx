import React from 'react'
import type { Metadata } from 'next'
import TermsAndConditions from '@/features/single-pages/terms-and-conditions'
 
export const metadata: Metadata = {
  title: 'Landing Page Template - About Us',
  description: 'Landing Page Template Next JS, Typescript, Daisy UI',
}


function Page() {
    return <TermsAndConditions />
}

export default Page