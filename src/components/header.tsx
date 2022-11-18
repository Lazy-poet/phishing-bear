import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import { setLogOut } from '../../redux/slices/session.slice'
import { LinkButton, Button, NavPrivate, NavPublic } from '@components'

const Header = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { isLoggedIn } = useSelector((state: any) => state.session)

  const logOut = () => {
    dispatch(setLogOut())
    router.push('http://newsite.phishingbear.com/login')
  }

  return (
    <header className="border-bottom border-dark" style={{
      scrollSnapAlign: "start",
    }} >
      <div className="container-fluid">
        <div className="row align-items-center">
          {isLoggedIn === true ? <>
            <div className="col-9 col-sm-9 col-md-9 col-lg-2">
              <Link href="/">
                <a className="d-inline-block">
                  <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
                </a>
              </Link>
            </div>

            <div className="col-10  d-none d-lg-block d-xl-block">
              <NavPrivate />
            </div>
          </> : <>
            <div className="col-9 col-sm-9 col-md-9 col-lg-2">
              <Link href="/">
                <a className="d-inline-block">
                  <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
                </a>
              </Link>
            </div>

            <div className="col-10  d-none d-lg-block d-xl-block">
              <NavPublic showSidebar={null} toggleSidebar={null} />
            </div>
          </>}

          <div className="col-3 col-sm-3 col-md-3 col-lg-8 d-block d-lg-none d-xl-none">
            <button className="btn border-0 float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <img src="/assets/images/toggle-btn.svg" alt="Toggle button" />
            </button>

            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header border-bottom">
                <Link href="#">
                  <a className="d-inline-block">
                    <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
                  </a>
                </Link>
                <button type="button" className="btn p-0" data-bs-dismiss="offcanvas" aria-label="Close">
                  <img src="/assets/images/close-btn.svg" alt="Logo" className="img-fluid" />
                </button>
              </div>
              <div className="offcanvas-body position-relative">
                <img src="/assets/images/offcanvas-bg.png" alt="Offcanvas Background" className="img-fluid offcanavas-img" />

                {isLoggedIn === true ? <>
                  <div className="position-relative">
                    <img src="/assets/images/avtar.svg" alt="" className="img-fluid position-absolute top-0 bottom-0 my-auto" />
                    <LinkButton path="/my-account" className="nav-link border btn-pill fs-2 text-white fw-semibold" name="My account" />
                    <img src="/assets/images/offcanvas-icons/my-account.svg" alt="" className="img-fluid position-absolute top-0 bottom-0 end-0 me-4 my-auto" />
                  </div>
                  <ul className="nav flex-column my-4">
                    <li className="nav-item mx-2">
                      <Link href="/">
                        <a className="nav-link text-white ps-0 fs-3 py-4">
                          <img src="/assets/images/offcanvas-icons/home.svg" alt="" className="img-fluid" /> Home
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item mx-2">
                      <Link href="/dashboard">
                        <a className="nav-link text-white ps-0 fs-3 py-4">
                          <img src="/assets/images/offcanvas-icons/dashboard.svg" alt="" className="img-fluid" />  Dashboard
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link href="#">
                        <a className="nav-link text-white ps-0 fs-3 py-4">
                          <img src="/assets/images/offcanvas-icons/handbook.svg" alt="" className="img-fluid" />  Handbook
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link href="/faq">
                        <a className="nav-link text-white ps-0 fs-3 py-4">
                          <img src="/assets/images/offcanvas-icons/faq.svg" alt="" className="img-fluid" />  FAQs
                        </a>
                      </Link>
                    </li>

                    <ul className="nav pb-3 position-absolute bottom-0">
                      <li className="nav-item">
                        <Link href="#" >
                          <a className="nav-link text-white fs-3">
                            <img src="/assets/images/eng.svg" alt="Sweden" className="img-fluid" />  en
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#">
                          <a className="nav-link text-white fs-3">
                            <img src="/assets/images/swe.svg" alt="Sweden" className="img-fluid" />  swe
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </> :
                  <>
                    <ul className="nav flex-column">
                      <li className="nav-item mx-2">
                        <Link href="/about">
                          <a className="nav-link text-white fs-3 pb-3">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link href="#">
                          <a className="nav-link text-white fs-3 pb-3">
                            About us
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link href="#">
                          <a className="nav-link text-white fs-3 pb-3">
                            Pricing
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link href="#">
                          <a className="nav-link text-white fs-3 pb-3">
                            Enterprise solutions
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item mx-2">
                        <Link href="#">
                          <a className="nav-link text-white fs-3 pb-3">
                            Private solutions
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item mx-2 pb-3 position-relative">
                        <Link href="#">
                          <a className="nav-link btn btn-warning btn-pill text-white fs-4 fw-bold">
                            Try it for free
                          </a>
                        </Link>
                      </li>

                      <ul className="nav  pb-3">
                        <li className="nav-item">
                          <Link href="#" >
                            <a className="nav-link text-white fs-3">
                              <img src="/assets/images/circle-eng.svg" alt="Sweden" className="img-fluid" />  en
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="#">
                            <a className="nav-link text-white fs-3">
                              <img src="/assets/images/circle-sw.svg" alt="Sweden" className="img-fluid" />  swe
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </>
                }

              </div>
              <div className="offcanvas-footer py-3 px-2 border-top position-relative">
                <img src="/assets/images/logout.svg" alt="" className="img-fluid position-absolute top-0 bottom-0 my-auto ms-3" />
                {/* <Link href="http://newsite.phishingbear.com/">
                  <a className=" btn btn-link nav-link border btn-pill fs-2 text-white fw-semibold" onClick={logOut} >
                    Log out
                  </a>
                </Link > */}
                <Button className=" btn nav-link border btn-pill fs-2 text-white fw-semibold" name="Logout" onClick={logOut} />

              </div>
            </div>
          </div>
        </div>
      </div >
    </header >
  )
}

export default Header
