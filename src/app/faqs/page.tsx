import React from 'react'
import type { Metadata } from 'next'
import Faqs from '@/features/single-pages/faqs'
 
export const metadata: Metadata = {
  title: 'Landing Page Template - About Us',
  description: 'Landing Page Template Next JS, Typescript, Daisy UI',
}


function Page() {
    return <Faqs />
}

export default Page