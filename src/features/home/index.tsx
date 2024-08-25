import React from 'react'
import HeroSection from './hero-section'
import FeatureSection from './feature-section'
import GenerationStep from './generation-step'
import TestimonialsSection from './testimonials-section'


function Home() {
  return (
    <>
        <HeroSection />

        <GenerationStep />

        <FeatureSection showHeading={true} title="Feature title 1" leftText={false} />

        <FeatureSection showHeading={false} title="Featuer title 2" leftText={true} />

        <FeatureSection showHeading={false} title="Feature title 3" leftText={false} />

        <TestimonialsSection />
    </>
  )
}

export default Home