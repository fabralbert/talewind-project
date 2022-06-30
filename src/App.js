import Header from './components/Header'
import bgMain from './img/bg-main.jpg'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Classes from './components/Classes'
import Webinar from './components/Webinar'
import Pricing from './components/Pricing'
import GetApps from './components/GetApps'
import Footer from './components/Footer'

function App() {
  return (
    <div className='box-border max-w-none'>
      <div
        className='bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(${bgMain})`,
        }}
      >
        <Header />
        <Hero />
        <Featured />
        <Classes />
        <Webinar />
        <Pricing />
        <GetApps />
        <Footer />
      </div>
    </div>
  )
}

export default App
