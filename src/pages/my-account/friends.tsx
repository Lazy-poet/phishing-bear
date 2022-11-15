import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux'

import { userServices } from '../../../services'

import { setLogOut } from '../../../redux/slices/session.slice'
import { ShowUsersData, FetchDataProps } from '../../utils/type';
import { PrivateLayout, LinkButton, SEO, Loading, Button } from '@components'

const GetFriends = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [showFriends, setShowFriends] = useState<any>([])
  console.log('showFriends', showFriends);

  const logOut = () => {
    dispatch(setLogOut())
    router.push('http://newsite.phishingbear.com/login')
  }
  useEffect(() => {
    setLoading(true)
    userServices.getFriends('').then((data) => {
      setShowFriends(data?.data)
      setLoading(false)
    })
  }, [])

  const confirmFriend = (id) => {
    setLoading(true)
    userServices.updateFriends(id).then((data: FetchDataProps | any) => {
      data?.error === false && userServices.getFriends('').then((data: FetchDataProps) => {
        setShowFriends(data.data)
      })
    })
    setLoading(false)
  }

  const removeFriend = (id) => {
    setLoading(true)
    userServices.updateFriends({ id, status: 'removed' }).then((data: FetchDataProps | any) => {
      data?.error === false && userServices.getFriends('').then((data: FetchDataProps) => {
        setShowFriends(data.data)
      })
    })
    setLoading(false)
  }

  // const rejectedFriend = (id) => {
  //   setLoading(true)
  //   userServices.updateFriends({ id, status: 'rejected' })
  //   setLoading(false)
  // }

  return (
    <>
      <SEO />
      <PrivateLayout>
        <section className="my-account">
          <div className="container shadow rounded-1">
            <div className="row">
              <div className="col-3 sidebar border-end border-dark pt-5 px-0">
                <h4 className="ms-3 ps-1">My Account</h4>
                <ul className="nav flex-column">
                  <li className="nav-items">
                    <Link href="/my-account">
                      <a className="btn nav-link text-start rounded-0 text-dark ps-3 border-0">
                        <i className="fa-solid fa-house me-3"></i>
                        Account
                      </a>
                    </Link>
                  </li>
                  <li className="nav-items">
                    <Link href="/my-account/change-password">
                      <a className="btn nav-link text-start rounded-0 text-dark ps-3 border-0">
                        <i className="fa-solid fa-key me-3"></i>Password
                      </a>
                    </Link>
                  </li>

                  <li className="nav-items">
                    <Link href="/my-account/friends">
                      <a className="btn nav-link text-start rounded-0 text-dark ps-3 border-0">
                        <i className="fa-solid fa-user me-3"></i> Friends
                      </a>
                    </Link>
                  </li>

                  <li className="nav-items">
                    <Button className="btn nav-link text-start rounded-0 text-dark border-0 ps-3 w-100 bg-white" name="Logout" onClick={logOut}>
                      <i className="fa-solid fa-right-from-bracket me-3"></i>
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="col-9 p-5">
                {loading ? <Loading /> :
                  <>

                    {showFriends?.length === 0 ?
                      <p className="text-center" >No friends found</p>
                      :
                      <>
                        {showFriends?.map((item: ShowUsersData) => {
                          return (
                            <>
                              <div className="table-scroll shadow border rounded-3 p-3 my-3">
                                <table className="table border-0 mb-0">
                                  <tbody className="border-0">
                                    <tr className="align-middle">
                                      <td className="border-0"><img src="/assets/images/user-dauflt.svg" alt="Community User" className="w-50" /></td>
                                      <td className="border-0">{item?.first_name} {item?.last_name}</td>
                                      <td className="border-0">{item?.email}</td>
                                      <td className="border-0"><ul className="nav mb-0 justify-content-end">
                                        {item?.status === 'pending' ?

                                          <>
                                            <li className="nav-item pe-4">
                                              <LinkButton path="#" name="Confirm" className="nav-link px-1 text-decoration-none fs-4" onClick={() => confirmFriend(item?.friend_id)} />
                                            </li>
                                            <li className="nav-item">
                                              <LinkButton path="#" className="nav-link px-1 text-decoration-none fs-4"
                                                icon="fa-solid fa-x text-start text-danger" onClick={() => console.log('Clicked')}
                                              />
                                            </li>
                                          </>
                                          :
                                          <>
                                            <li className="nav-item pe-4">
                                              <LinkButton path="#" name={item?.status === 'active' ? 'Friend' : 'Unfriend'} className="  nav-link px-1 text-decoration-none fs-4 disabled" />
                                            </li>
                                            <li className="nav-item">
                                              <LinkButton path="#" className="nav-link px-1 text-decoration-none fs-4"
                                                icon="fa-solid fa-x text-start text-danger" onClick={() => removeFriend(item?.friend_id)}
                                              />
                                            </li>
                                          </>
                                        }

                                      </ul></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </>
                          )
                        })}
                      </>
                    }

                  </>
                }
              </div>
            </div>
          </div>
        </section>
      </PrivateLayout>
    </>
  )
}
export default GetFriends;
