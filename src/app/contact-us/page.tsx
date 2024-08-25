import React from 'react'
import type { Metadata } from 'next'
import ContactUs from '@/features/single-pages/contact-us'
 
export const metadata: Metadata = {
  title: 'Landing Page Template - About Us',
  description: 'Landing Page Template Next JS, Typescript, Daisy UI',
}


function Page() {
    return <ContactUs />
}

export default Page