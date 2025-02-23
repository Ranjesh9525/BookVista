import type React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import { useLocation } from "react-router-dom"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const location = useLocation()
  const isSearchPage = location.pathname === "/search"

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {!isSearchPage && <Hero />}
      {(isSearchPage || children) && <div className="container mx-auto py-10 flex-1">{children}</div>}
      <Footer />
    </div>
  )
}

export default Layout

