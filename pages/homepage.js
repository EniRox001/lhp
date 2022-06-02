import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Carousel from "./components/Carousel"
import Onboarding from "./components/Onboarding"
import ZoomScroll from "./components/ZoomScroll"
import KnowMore from "./components/KnowMore"
import Footer from "./components/Footer"

const HomePage = () => {
    return (
        <div>
            <Navbar active = 'active'/>
            <Intro/>
            <Carousel/>
            <Onboarding/>
            <ZoomScroll/>
            <KnowMore/>
            <Footer/>
        </div>
    )
}

export default HomePage