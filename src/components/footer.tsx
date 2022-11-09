import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <Link href="/">
              <a className="d-inline-block pb-4">
                <img src="/assets/images/footer-logo.png" alt="Footer logo" className="img-fluid " />
              </a>
            </Link>
            <p className="text-white pb-3 fw-semibold">Protect every employee in your organization.</p>
            <p className="opacity-84 lh-sm">A platform that turns everyone into an interview professional with the help of streamlined, inclusive and candidate friendly job interviews.</p>
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-5 position-relative vr-line">
            <ul className="nav flex-column text-white">
              <h5>Sitemap</h5>
              <li className="nav-item">
                <Link href="/"><a className="nav-link text-white ps-0 opacity-84">Home</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/about"><a className="nav-link text-white ps-0 opacity-84">About us</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/pricing"><a className="nav-link text-white ps-0 opacity-84">Pricing</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/enterprise"><a className="nav-link text-white ps-0 opacity-84">Enterprise solutions</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/private"><a className="nav-link text-white ps-0 opacity-84">Private solutions</a></Link>
              </li>
              <li className="nav-item">
                <Link href="#"><a className="nav-link text-white ps-0 opacity-84">Cookie policy</a></Link>
              </li >
            </ul >
          </div >
          <div className="col-12 col-sm-12 col-md-4 col-lg-3">
            <ul className="nav flex-column text-white">
              <h5>Contact</h5>
              <li className="nav-item mb-3">
                <Link href="mailto:info@mail.com">
                  <a className="nav-link text-white ps-0 opacity-84"><img src="/assets/images/mail.svg" alt="Email" className="img-fluid me-3" />
                    info@mail.com
                  </a>
                </Link>
              </li>
              <li className="nav-item opacity-84 d-flex mb-3">
                <img src="/assets/images/location.svg" alt="Location" className="img-fluid me-3 mt-2 pe-1 align-self-start" />
                Regeringsgatan 25,
                111 53,
                Stockholm
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-items">
                <Link href="#">
                  <a className="nav-link ps-0">
                    <img src="/assets/images/social-icons/linkedin.svg" alt="Linkedin" />
                  </a>
                </Link>
              </li>
              <li className="nav-items">
                <Link href="#">
                  <a className="nav-link ps-0">
                    <img src="/assets/images/social-icons/fb.svg" alt="Facebook" />
                  </a>
                </Link>
              </li>
              <li className="nav-items">
                <Link href="#">
                  <a className="nav-link ps-0">
                    <img src="/assets/images/social-icons/instagram.svg" alt="Instagram" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center border-top copyright">
          <p className="text-white mb-0 font-roboto">&copy; 2022 Mail. — Protect yourself from malicious cyber attacks</p>
          <ul className="nav">
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link pe-0">
                  <img src="/assets/images/circle-eng.svg" alt="England" className="img-fluid" />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link pe-0">
                  <img src="/assets/images/circle-sw.svg" alt="Swedish" className="img-fluid" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer