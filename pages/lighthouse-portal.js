import Link from "next/link"
import Footer from "./components/Footer"
import LHPCta from "./components/LHPcta"
import LHPFeatures from "./components/LHPFeatures"
import LHPOnboarding from "./components/LHPOnboarding"
import Navbar from "./components/Navbar"

export default function LightHousePortal() {
    return (
        <div className="lhpo">
            <Navbar/>
            <LHPOnboarding/>
            <LHPFeatures/>
            <LHPCta/>
            <Footer/>
        </div>
    )
}   