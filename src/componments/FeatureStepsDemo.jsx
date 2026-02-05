import { FeatureSteps } from "../componments/ui/FeatureSteps"

const features = [
  { 
    step: 'Step 1', 
    title: 'IDENTIFY',
    content: 'Identify core function for focused analysis.', 
    image: 'https://i.postimg.cc/JnrqX07G/Gemini-Generated-Image-tkt8emtkt8emtkt8.png' 
  },
  { 
    step: 'Step 2',
    title: 'Assess',
    content: 'Assess processes and critical risk controls',
    image: 'https://i.postimg.cc/05LSRrgb/Gemini-Generated-Image-dt93k6dt93k6dt93.png'
  },
  { 
    step: 'Step 3',
    title: 'IMPROVE',
    content: 'Improve processes and recommend actionable solutions',
    image: 'https://i.postimg.cc/WzpHsSqm/Gemini-Generated-Image-43vepr43vepr43ve-(1).png'
  },
  { 
    step: 'Step 2',
    title: 'Monitor',
    content: 'Monitor compliance with established controls',
    image: 'https://i.postimg.cc/43ztBg2g/Gemini-Generated-Image-swb66nswb66nswb6.png'
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="Our Approach"
        autoPlayInterval={4000}
        imageHeight="h-[400px]"
      />
  )
}