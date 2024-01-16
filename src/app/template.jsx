'use client'
import { Nav } from "@/components/Nav"
import '@/app/globals.css'
import { Footer } from "@/components/Footer"
import { useContext } from "react"
import { onSecondMenu } from "@/hooks/useSecondMenu"

let switchSecondaryMenuControl = true

export default function IntroTemplate({ children }) {

  const { SecondMenuContext } = onSecondMenu()
  const stateSecondMenu = useContext(SecondMenuContext)
 
  return (
    <SecondMenuContext.Provider value={stateSecondMenu}>
      <header>
        <Nav  />
      </header>
      <div >{ children }</div>
      <Footer />
    </SecondMenuContext.Provider>
  )
}

// secondaryMenuControl={switchSecondaryMenu}