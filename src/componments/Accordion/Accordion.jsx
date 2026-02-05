import React from 'react'
import { UniqueAccordion } from './UniqueAccordion'

function Accordion() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-[#F0F0F0]">
      <div className="w-full max-w-2xl">
        <div className="mb-12">
          <h1 className="text-4xl font-medium tracking-tight mb-3 text-balance">Why Choose
FAS Consultants</h1>
          <p className="text-muted-foreground text-lg">Providing expert financial consulting to support informed decisions and sustainable success.</p>
        </div>
        <UniqueAccordion />
      </div>
    </main>
  )
}

export default Accordion