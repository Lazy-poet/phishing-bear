import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';

import { userServices } from '../../services';
import { ShowUsersData, FetchDataProps, FilteredData } from '../utils/type';
import { PrivateLayout, Button, SEO, LinkButton, Pagination, Loading, SelectField } from '@components'

const MyCommunity = () => {
  const { profileData } = useSelector((state: any) => state.auth)

  const [loading, setLoading] = useState(false)
  const [usersList, setUsersList] = useState<FetchDataProps | [] | any>([])
  const [selected, setSelected] = useState([]);
  const [temp, setTemp] = useState<FetchDataProps | []>([]);

  const [filteredData, setFilteredData] = useState<FilteredData | any>({
    page: 1,
    page_size: 10,
    filters: {
      first_name: '',
      last_name: '',
    },
    sort: ''
  })

  useEffect(() => {
    setLoading(true)
    userServices.getFriends().then((data) => {
      setSelected(data?.data)
    })
    userServices.getUsers(filteredData).then((data: FetchDataProps) => {
      setUsersList(data)
      setLoading(false)
    })
  }, [filteredData, temp])

  const checkStatus = (id) => {
    const [filteredUserData] = selected.filter((val) => {
      return (val?._id === id)
    });
    return (
      <>
        {filteredUserData?.status === 'pending' ?
          <Button className="bg-transparent text-decoration-none border-none disabled" name="Requested" /> :
          filteredUserData?.status ?
            <LinkButton path="#" name={filteredUserData?.status === 'active' ? 'Already friend' : 'Rejected'} className="nav-link text-primary text-decoration-none fs-4 px-1 disabled" />
            :
            <Button onClick={() => handleSelected(id)} className="bg-transparent text-decoration-none border-none" name="Send Request" />
        }
      </>
    )
  }

  const handleSelected = (id: string) => {
    userServices.sendFriendRequest(id).then((data: FetchDataProps | any) => {
      data?.error === false &&
        setTemp(data)
    })
  };
  return (
    <>
      <SEO />
      <PrivateLayout>
        <section className="user-list">
          <div className="container">

            {usersList?.items?.length > 1 && <div className="row">
              <div className="col-9">
                <form>
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white" id="basic-addon1" style={{ height: '60px' }}>
                      <img src="/assets/images/search-icon.svg" alt="Search icon" className="img-fluid" />
                    </span>
                    <input
                      type="text"
                      name="filter"
                      className="form-control border-start-0 border shadow-none ps-0"
                      placeholder="Search..."
                      aria-label="Search"
                      value={filteredData.filters.first_name}
                      onChange={(e) => {
                        setFilteredData((prev: any) => ({
                          ...prev,
                          filters: { first_name: e.target.value }
                        }))
                      }}
                      aria-describedby="basic-addon1"
                      style={{ height: '60px' }}
                    />
                  </div>
                </form>

              </div>

              <div className="col-3">
                <SelectField
                  name="sort"
                  placeholder="Sort by"
                  className="border shadow-none fs-6"
                  onChange={(e) => {
                    setFilteredData((prev) => ({
                      ...prev,
                      sort: e.target.value,
                    }))
                  }}
                  options={[
                    { label: 'First Name', value: 'first_name' },
                    { label: 'Last Name', value: 'last_name' },
                    { label: 'Email', value: 'email' },
                  ]}
                />
              </div>
            </div>}

            {loading ? <Loading /> :
              <>
                {usersList?.items?.map((item: ShowUsersData) => {
                  return (
                    <>
                      {profileData?._id === item._id ?
                        usersList?.items?.length === 1 && <p className="text-center mt-5"> No record found</p>
                        :
                        <div className="v-container shadow border rounded-3 p-3 my-3">
                          <div className="row align-items-center  scroll">
                            <div className="col-1">
                              <img src="/assets/images/user-dauflt.svg" alt="Community User" className="img-fluid" />
                            </div>
                            <div className="col text-center"> <span>{item?.first_name} {item?.last_name}</span> </div>
                            <div className="col text-center"> <span>{item?.email}</span> </div>
                            <div className="col-3 text-center">
                              {checkStatus(item?._id)}
                            </div>
                          </div>
                        </div>
                      }
                    </>
                  )
                })}
              </>
            }

            {usersList?.total_page > 1 &&
              <Pagination
                current_page={usersList?.current_page}
                per_page={usersList?.page_size}
                total_items={usersList?.total_item}
                total_pages={usersList?.total_page}

                onClick={(i) => {
                  setFilteredData((prev) => ({
                    ...prev,
                    page: i.selected + 1,
                  }))
                }}
              />
            }

          </div>
        </section>

      </PrivateLayout>
    </>
  )
}
export default MyCommunity;
