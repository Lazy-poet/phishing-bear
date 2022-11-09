import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router';

import { LinkButton } from './form-inputs';

const NavPublic = () => {
  const router = useRouter()

  return (
    <ul className="nav justify-content-end align-items-center public-nav">
      <li className="nav-item me-5">
        <Link href="/about">
          <a className="nav-link text-dark fw-normal">
            About us
          </a>
        </Link>
      </li>
      <li className="nav-item me-5">
        <Link href="/pricing">
          <a className="nav-link text-dark fw-normal">
            Pricing
          </a>
        </Link>
      </li>

      <li className="nav-item me-5">
        <Link href="#">
          <a className="nav-link text-dark fw-normal">
            <img src="/assets/images/user-platform.svg" alt="img" />  User platform
          </a>
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link href="#">
          <a className="nav-link btn btn-primary text-white fs-5 rounded-1">
            Try it for free
          </a>
        </Link>
      </li>
      {router?.pathname === '/login' ? null :
        <li className="nav-item mx-2" style={{ width: '156px' }}>
          <LinkButton path="/login" className="nav-link border border-dark text-dark fs-5 rounded-1" name="Log in" />
        </li>
      }

      <li className="nav-item ps-4">
        <Link href="#">
          <a className="nav-link p-0 dropdown dropdown-center">
            <button className="btn dropdown-toggle border-0 p-0 fs-5 fw-normal" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/assets/images/eng.svg" alt="England" className="" />&nbsp; EN
            </button>
            <ul className="dropdown-menu rounded-0 shadow-sm border-0">
              <li>
                <a className="dropdown-item" href="#">
                  <img src="/assets/images/swe.svg" alt="Sweden" className="img-fluid" /> &nbsp; SWE
                </a>
              </li>
            </ul>
          </a>
        </Link>
      </li>
    </ul >

  )
}
export default NavPublic;