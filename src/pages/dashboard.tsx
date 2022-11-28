import React from 'react'
import { PrivateLayout, SEO, Button, LinkButton } from '@components'

const Dashboard = () => {
  return (
    <>
      <SEO />
      <PrivateLayout>
        <section className="text-white home-page pt-0">
          <div className="container-fluid px-5">
            <div className="row vh-100">
              <div className="col-1"></div>
              <div className="col-6 my-auto">
                <h1 className="mb-0">State of the art protection for phishing and business email compromise
                </h1>
                <p className="py-4 my-4 opacity-84 font-roboto">Targeted attacks with malicious payload use social engineering and phishing to bypass email gateways. Our Email Protection prevents these attacks to protect your business and data.
                </p>
                <Button type={'button'} name={'Try it for free'} className={'bg-warning btn-pill fw-semibold fs-2'} />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto text-center">
                <h2 className="text-center pb-5 mb-5">Training is the best protection - Detect threats that email gateways can’t.</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-5 justify-content-center mt-5">
              <div className="card-internet">
                <div className="card text-center bg-success m-auto border-0 h-100">
                  <img src="/assets/images/astro-bear-internet.svg" className="card-img-top w-75 position-relative end-0 start-0 mx-auto" alt="Astro Bear" />
                  <div className="card-body">
                    <h5 className="card-title lh-base py-3  mx-3">Over 30% of internet users has fallen victim to a phishing attack, often without knowing it.</h5>
                    <p className="card-text pt-2 pb-5 mb-5 font-roboto mx-3">Ever wondered why your computer is so slow all of a sudden, perhaps a malware is eating your resources</p>
                    <Button type={'button'} name={'Try it for free'} className={'text-white btn-pill fs-2 position-absolute d-block start-0 end-0 m-auto'} />

                  </div>
                </div>
              </div>
              <div className="card-victim">
                <div className="card text-center bg-primary border-0 m-auto card-primary">
                  <img src="/assets/images/astro-bear-space.svg" className="card-img-top w-75 position-relative end-0 start-0 mx-auto pt-3" alt="Astro Bear" />
                  <div className="card-body">
                    <h5 className="card-title lh-base mx-5 mb-5 py-5">74% of organizations have fallen victim to a phishing attack.
                    </h5>
                    <Button type={'button'} name={'Try it for free'} className={'bg-warning btn-pill fs-2  position-absolute d-block start-0 end-0 m-auto'} />
                  </div>
                </div>
              </div>
              <div className="card-business">
                <div className="card text-center bg-success m-auto border-0 h-100">
                  <img src="/assets/images/astro-bear-earth.svg" className="card-img-top w-75 position-relative end-0 start-0 mx-auto" alt="Astro Bear" />
                  <div className="card-body">
                    <h5 className="card-title lh-base py-3  mx-2">Phishing is big business.</h5>
                    <p className="card-text pb-5 mx-4 font-roboto ">Attacks have shown record growth in recent years, and a solid security awareness program is an integral part of any defense-in-depth strategy.</p>
                    <Button type={'button'} name={'Try it for free'} className={'text-white btn-pill fs-2 position-absolute d-block start-0 end-0 m-auto'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-success">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center px-0">
                <p className="fs-1 fw-semibold pb-5 lh-sm">Reduce your largest attack surface — your end-users. Phishing is big business. Attacks have shown record growth in recent years, and a solid security awareness program is an integral part of any defense-in-depth strategy.</p>
                <Button type={'button'} name={'Try it for free'} className={'bg-warning btn-pill fw-semibold fs-2'} />
                <LinkButton name={'View plans'} className={'text-dark d-block  fs-3 font-roboto'} path={''} />
              </div>
            </div>
          </div>
        </section>
      </PrivateLayout>
    </>
  )
}

export default Dashboard
