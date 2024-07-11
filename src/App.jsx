import { BrowserRouter } from "react-router-dom"
import { AboutUs, Benefits, Footer, Hero, Navbar, Order, Procedure, WhyUs} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern-mobile lg:bg-hero-pattern bg-cover">
          <Navbar/>
          <Hero/>
        </div>
      </div>
        <Procedure/>
        <Benefits/>
        <AboutUs/>
        <WhyUs/>
        <Order/>
        <div className="footer">
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App