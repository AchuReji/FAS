import React from 'react'
import SocialLinks from './SocialLinks'

function SocialMedia() {
  return (
    <>
      <SocialLinks
        links={[
          { platform: "linkedin", href: "https://www.linkedin.com/company/fasconsultants" },
          { platform: "instagram", href: "https://www.instagram.com/fas_consultants?igsh=MTNybHJ1d2lzMG93eQ==" },
          { platform: "mail", href: "mailto:Info@fasconsultant.com?subject=Support%20Request" },
           { platform: "whatsapp", href: "https://wa.me/919995396351" },
        
        ]}
        floatingButtonColor="bg-[#050404]"
      />
    </>
  )
}

export default SocialMedia