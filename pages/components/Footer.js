import Link from "next/link"

export default function Footer() {
    return (
        <div className="footer py-5 px-2">
            <div className="footer-header">
                <h3 className="footer-header-title">the<span className="footer-header-title-span">LIGHTHOUSE-</span>PORTAL</h3>
                <p className="footer-header-hashtag">#THELIGHTHOUSEPORTAL</p>
            </div>
            <div className="footer-body my-5">
                <div className="footer-body-contact-us">
                    <h5 className="footer-body-contact-us-header">CONTACT US</h5>
                    <p className="footer-body-contact-us-email">TTEAM@LIGHTHOUSE-PORTAL.COM</p>
                    <p className="footer-body-contact-us-location">P.O. Box 1562 New Jersey, USA</p>
                </div>
                <div className="footer-body-about-us">
                    <h5 className="footer-body-about-us-header">ABOUT US</h5>
                    <p className="footer-body-about-us-story">Our Story</p>
                </div>
            </div>
            <div className="footer-contact-us-icons">
                </div>
                <div className="footer-trademark">
                    <h3 className="footer-trademark-text">THE LIGHTHOUSE COMPANY</h3>
                </div>
                <div className="footer-links">
                    <Link href="/terms-conditions/">
                        <a className="footer-links-terms-conditions">TERMS AND CONDITIONS</a>
                    </Link>
                    <Link href="/privacy/">
                        <a className="footer-links-privacy-policy">PRIVACY POLICY</a>
                    </Link>
                </div>
        </div>
    )
}