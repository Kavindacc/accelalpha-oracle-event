import { About } from "@/components/site/About"
import { Agenda } from "@/components/site/Agenda"
import { Footer } from "@/components/site/Footer"
import { Hero } from "@/components/site/Hero"
import { Nav } from "@/components/site/Nav"
import { Pullquote } from "@/components/site/Pullquote"
import { Reasons } from "@/components/site/Reasons"
import { Register } from "@/components/site/Register"
import { Speakers } from "@/components/site/Speakers"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/lib/theme"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <ThemeProvider>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Reasons />
        <Pullquote />
        <Speakers />
        <Agenda />
        <Register />
      </main>
      <Footer />
      <Toaster />
    </ThemeProvider>
  )
}
