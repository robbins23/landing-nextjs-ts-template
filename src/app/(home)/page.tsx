import React from 'react'
import type { Metadata } from 'next'
import Home from '@/features/home'
 
export const metadata: Metadata = {
  title: 'Landing Page Template',
  description: 'Landing Page Template Next JS, Typescript, Daisy UI',
}


function Page() {
    return <Home />
}

export default Page