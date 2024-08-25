import React from 'react'
import type { Metadata } from 'next'
import AboutUs from '@/features/single-pages/about-us'
 
export const metadata: Metadata = {
  title: 'Landing Page Template - About Us',
  description: 'Landing Page Template Next JS, Typescript, Daisy UI',
}


function Page() {
    return <AboutUs />
}

export default Page