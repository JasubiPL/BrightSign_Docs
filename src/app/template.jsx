'use client'
import { Nav } from "@/components/Nav"
import '@/app/globals.css'
import { Footer } from "@/components/Footer"
import { useState } from "react"

let switchSecondaryMenuControl = true

export default function IntroTemplate({ children }) {
  const [showSecondaryMenu, setShowSecondaryMenu] = useState('secondaryMenu--hidden')

  const switchSecondaryMenu = () =>{

    if(switchSecondaryMenuControl){
      setShowSecondaryMenu('secondaryMenu--show')
      switchSecondaryMenuControl = false
    }else{
      setShowSecondaryMenu('secondaryMenu--hidden')
      switchSecondaryMenuControl = true
    }
  }

  return (
    <>
      <header>
        <Nav  />
      </header>
      <div >{ children }</div>
      <Footer />
    </>
  )
}

// secondaryMenuControl={switchSecondaryMenu}