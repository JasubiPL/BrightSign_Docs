'use client'
import { Nav } from "@/components/Nav"
import '@/app/globals.css'
import { Footer } from "@/components/Footer"
import { SecondMenuContext } from "@/hooks/secondMenuContext"


export default function IntroTemplate({ children }) {



  return (
    <SecondMenuContext>
      <header>
        <Nav  />
      </header>
      { children }
      <Footer />
    </SecondMenuContext>
  )
}

// secondaryMenuControl={switchSecondaryMenu}