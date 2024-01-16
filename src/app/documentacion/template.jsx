'use client'
import { SecondaryNav } from "@/components/SecondaryNav";
import '@/styles/pages/documentacionTemplate.css'

export default function ({ children }){
  return(
      <main className="documentacionTemplate">
        <SecondaryNav />
        {children}
      </main>
  )
}