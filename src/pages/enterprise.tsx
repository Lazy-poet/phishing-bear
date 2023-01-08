import React from 'react'
import type { NextPage } from 'next'
import { PublicLayout, LinkButton, SEO } from '@components'

const Enterprise: NextPage = () => {
  return (
    <>
      <SEO />
      <PublicLayout>
        <section className="pb-0" style={{
          background: 'url(/assets/images/common-hero.svg) no-repeat 100% 100%/cover',
          height: '400px',
          color: "#fff",
          display: 'grid',
          placeItems: 'center',


        }}>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <p className="fs-1">Entreprise solutions.</p>
                <h2>We have the team for you.</h2>
                {/* <img src="/assets/images/astro-group.png" alt="Astro Group" className="img-fluid" /> */}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-0 card-bg">
          <div className="container">
            <div className="accordion " id="accordionExample">
              <div className="accordion accordion-flush mt-0 px-0" id="accordionFlushExample">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 justify-content-center">
                  <div className="accordion-item bg-secondary border-0 mt-0">
                    <div className="d-flex align-item-center justify-content-center flex-column" style={{ height: '420px' }}>
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed bg-transparent text-center text-white shadow-none fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Phishing attacks towards organizations are increasing rapidly In study XYZ.
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white fs-4">
                          <hr />
                          This is the first accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item bg-secondary border-0 mt-0 px-0">
                    <div className="d-flex align-item-center justify-content-center flex-column" style={{ height: '420px' }}>
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed bg-transparent text-center text-white shadow-none fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Seamless phishing-training that users appreciate.
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white fs-4">
                          <hr />
                          This is the first accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item bg-secondary border-0 mt-0 px-0">
                    <div className="d-flex align-item-center justify-content-center flex-column" style={{ height: '420px' }}>
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed bg-transparent text-center text-white shadow-none fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Interactive support panels adapted to your organization.
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white fs-4"><hr />
                          We let the organization follow the phishing awareness step-by-step and if desired, tailor it to meet specific goals and needs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ scrollSnapAlign: 'start' }}>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <h2>We love new beginnings</h2>
                <p className="mb-5">Curious to explore how we can help you take your organisation to the next level? Let’s talk. </p>
                <LinkButton className={'text-white bg-primary text-decoration-none btn-pill fs-2'} path={'/'} name={'Contact'} />
                <LinkButton name={'View plans'} className={'text-dark d-block fs-3'} path={''} />
              </div>
            </div>
          </div>
        </section>
      </PublicLayout>
    </>
  )
}
export default Enterprise;
