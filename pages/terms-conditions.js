import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TermsConditions from "./components/TermsConditions";

export default function TermsCondition() {
    return (
        <div className="terms-condition-container">
            <Navbar/>
            <TermsConditions/>
            <Footer/>
        </div>
    )
}