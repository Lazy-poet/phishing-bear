import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import { authServices } from '../../services'
import { setLogOut, setMedata } from '../../redux/slices/session.slice'
import { Button } from '@components'

const NavPrivate = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { isLoggedIn, profleData } = useSelector((state: any) => state.session)

  useEffect(() => {
    if (isLoggedIn === true) {
      authServices.getMe().then((data: any) => {
        dispatch(setMedata(data.data))
      })
    }
  }, [])

  const logOut = () => {
    dispatch(setLogOut())
    router.push('http://newsite.phishingbear.com/login')
  }

  const userName = `${profleData?.first_name}+${profleData?.last_name}`
  const matches = userName.match(/\b(\w)/g)
  const avtar = matches?.join('').toUpperCase();

  return (
    <ul className="nav justify-content-end align-items-center private-nav">
      <li className="nav-item me-5">
        <Link href="/dashboard">
          <a className="nav-link text-dark fw-normal fs-3">
            <img src="/assets/images/dashboard.svg" alt="Dashboard" /> Dashboard
          </a>
        </Link>
      </li>
      <li className="nav-item me-5">
        <Link href="#">
          <a className="nav-link text-dark fw-normal fs-3">
            <img src="/assets/images/handbook.svg" alt="Handbook" /> Handbook
          </a>
        </Link>
      </li>
      <li className="nav-item me-5">
        <Link href="/faq">
          <a className="nav-link text-dark fw-normal fs-3">
            <img src="/assets/images/faq.svg" alt="FAQ" />  FAQs
          </a>
        </Link>
      </li>
      <li className="nav-item me-5">
        <Link href="/community">
          <a className="nav-link text-dark fw-normal fs-3">
            <img src="/assets/images/community.svg" alt="Community" />  My community
          </a>
        </Link>
      </li>

      <li className="nav-item avtar">
        {profleData?.first_name && profleData?.last_name &&
          <Link href="/community">
            <button className="btn border-0 bg-primary  rounded-circle fs-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
              <span className="text-white "> {avtar}</span>
            </button>
          </Link>
        }
        <ul className="dropdown-menu rounded-0 p-0 border-0 shadow">
          <li className="py-2">
            <Link
              href={{ pathname: '/my-account' }}
            >
              <a className="dropdown-item py-3 px-4 fs-3">
                <img src="/assets/images/my-account.svg" alt="My account" className="img-fluid me-2" />  My account

              </a>
            </Link>
          </li>
          <li className="px-3">

            <Button className="btn border border-dark text-dark fs-4 rounded-1 py-2 w-100 bg-white" name="Logout" onClick={logOut} />
          </li>
          <li className="py-2 px-4 pt-4">
            <ul className="nav">
              <li className="nav-item pe-3">
                <Link href="#">
                  <a className="nav-link text-dark px-0 fs-5">
                    <img src="/assets/images/eng.svg" alt="England" className="" />&nbsp; EN

                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link text-dark px-0 fs-5">
                    <img src="/assets/images/swe.svg" alt="Sweden" className="img-fluid" /> &nbsp; SWE
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>

    </ul>

  )
}
export default NavPrivate;