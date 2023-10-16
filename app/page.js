"use client"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


import Image from 'next/image'
import HomePage from './pages/HomePage'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import TopButton from './pages/TopButton'
import { AlertDismissible } from './pages/Alert'
import Courses from './pages/Courses'
import Header from './Mobile/MobileHome'
import MobileAbout from './Mobile/MobileAbout'
import MobileSkills from './Mobile/MobileSkills'
import MobileProjects from './Mobile/MobileProjects'
import MobileCourses from './Mobile/MobileCourses'
import MobileContact from './Mobile/MobileContact'
import Social from './pages/Social'
import { MobileSpeed } from './Mobile/MobileSpeed'

export default function Home ()
{
  return (
    <main className="flex min-h-screen flex-col bg-black items-center justify-between">
      <div className=' hidden md:block'>
        <HomePage />
        <Skills />
        <Projects />
        <Courses />
        <Contact />
        <Social />
      </div>
      <div className=' block md:hidden w-full text-white'>
        <MobileSpeed />
        <MobileAbout />
        <MobileSkills />
        <MobileProjects />
        <MobileCourses />
        <MobileContact />
        <Social />
      </div>

      <TopButton />
    </main>
  )
}
