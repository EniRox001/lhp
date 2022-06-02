import Image from "next/image"
import Link from "next/link"

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#222222"}}>
    <div className="container-fluid">
    <Link href="/">
    <a className="navbar-brand">
        <img className="main-logo" src='/assets/images/logo.png' alt="logo" />
      </a>
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href='/'>
              <a className="nav-link" aria-current="page" href="#">HOME</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/lighthouse-portal/">
              <a className="nav-link">LIGHTHOUSE</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog-forum/">
              <a className="nav-link">BLOG/FORUM</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href='/about-us/' >
              <a className="nav-link">ABOUT US</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/privacy/">
              <a className="nav-link">PRIVACY</a>
            </Link>
          </li>
          <li className="nav-item">
          <Link href="/terms-conditions/">
              <a className="nav-link">TERMS AND CONDITIONS</a>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
)
}