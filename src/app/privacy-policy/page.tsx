import React from 'react'
import type { Metadata } from 'next'
import Faqs from '@/features/single-pages/faqs'
import PrivacyPolicy from '@/features/single-pages/privacy-policy'
 
export const metadata: Metadata = {
  title: 'Landing Page Template - About Us',
  description: 'Landing Page Template Next JS, Typescript, Daisy UI',
}


function Page() {
    return <PrivacyPolicy />
}

export default Page