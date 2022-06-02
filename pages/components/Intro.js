import Image from "next/image"

export default function Intro() {
    return (
        <div className="intro-bg d-none d-md-block">
            <img src='/assets/images/bg-1.png' class="img-fluid intro-img" alt="..."/>
            <div className="intro-text">TRY THE<br/>PROTOTYPE</div>
            <button className="intro-button">JOIN OUR MAILING LIST</button>
        </div>
    )
}