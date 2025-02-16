"use client"
import { useEffect, useState } from 'react'
import Carousel from '@/components/home/Carousel'
import Facts from '@/components/home/Facts'
import About from '@/components/home/About'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'
import Quote from '@/components/home/Quote'
import Testimonials from '@/components/home/Testimonials'
import Vendors from '@/components/home/Vendors'
import Spinner from '@/components/shared/Spinner'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main >
      {loading && <Spinner />}
      <Carousel />
      <Facts />
      <About />
      <Features />
      <Services />
      <Quote />
      <Testimonials />
      <Vendors />
    </main>
  )
}