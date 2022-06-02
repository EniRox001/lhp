import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivacyTerms from "./components/PrivacyTerms";

export default function Privacy() {
    return (
        <div className="privacy-container">
            <Navbar/>
            <PrivacyTerms/>      
            <Footer/>
        </div>
    )
}