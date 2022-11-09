import React from 'react';
import type { NextPage } from 'next'
import ContactUs from '../components/contact-us';
import { Button, PublicLayout, LinkButton, SEO } from '@components'

const Pricing: NextPage = () => {
  return (
    <>
      <SEO />
      <PublicLayout>
        <section className="bg-secondary text-white">
          <div className="container">
            <div className="row">
              <div className="col-11 mx-auto text-center">
                <h2 className="pb-5 fw-bold">Simple, straight forward pricing.</h2>
                <p className="fs-1 lh-sm">Choose the right plan for your business. Whether you are just getting started or well down the path. We’ve got you covered.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-cta">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-5 justify-content-center mt-5">
              <div className="col px-4 mt-5 free-card">
                <div className="card bg-success m-auto border-0">
                  <img src="/assets/images/free-astro.svg" className="card-img-top w-75 mx-auto" alt="Free Astro" />
                  <div className="card-body px-0 pt-5 px-0">
                    <h3 className="card-title text-center py-3 mb-0">Free</h3>
                    <p className="card-text pt-2 mx-5 fs-5">Go ahead, just try it for free.
                      We promise you are gonna love it!</p>
                    <img src="/assets/images/smile.svg" alt="Free Card Image" className="img-fluid d-flex m-auto py-2" />
                    <br />
                    <Button type={'button'} name={'Try it for free'} className={'text-white btn-pill fs-2  position-absolute d-block start-0 end-0 m-auto'} />
                  </div>
                </div>
              </div>

              <div className="col px-4 standard-card text-white">
                <div className="card bg-primary border-0 p-5 pt-0">
                  <img src="/assets/images/standard-astro.svg" className="card-img-top w-100 position-relative end-0 start-0 mx-auto" alt="Free Astro" />
                  <div className="card-body px-0 pt-5">
                    <h3 className="card-title text-center text-uppercase ">Standard</h3>

                    <ul className="" >
                      <li className="fs-5">State of the art phishing training</li>
                      <li className="fs-5">Continuous updates and innovation of techniques, one step ahead of attackers</li>
                    </ul>
                    <Button type={'button'} name={'199SEK/month'} className={'text-white bg-info rounded-0 fs-2 border-0 py-2 w-100'} />
                    <br />
                    <Button type={'button'} name={'I’m picking this!'} className={'bg-warning btn-pill fs-2  position-absolute d-block start-0 end-0 m-auto'} />

                  </div>
                </div>
              </div>

              <div className="col px-4 mt-5 entreprise-card">
                <div className="card bg-success m-auto border-0 px-5">
                  <img src="/assets/images/dashboard-space.svg" className="card-img-top w-100 position-relative end-0 start-0 mx-auto" alt="Free Astro" />
                  <div className="card-body px-0 pt-5">
                    <h3 className="card-title pt-5  text-center">Entreprise</h3>
                    <p className="card-text fs-5 font-roboto">If you are really serious about protecting you or your team.</p>
                    <p className="fs-5 font-roboto pb-4">Contact us and lets find a perfect solution!</p>
                    <LinkButton className={'text-white bg-primary  text-decoration-none btn-pill fs-2  position-absolute d-block start-0 end-0 m-auto'} path={'/'} name={'Contact us'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactUs />
      </PublicLayout>
    </>
  )
}
export default Pricing;
