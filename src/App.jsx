import About from "./components/about/About"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Qualif from "./components/qualifications/Qualif"
import Services from "./components/services/Services"
import Skills from "./components/skills/Skills"
import Testimonial from "./components/testimonial/Testimonial"

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualif />
        <Testimonial/>
      </div>
    </div>
  )
}

export default App
