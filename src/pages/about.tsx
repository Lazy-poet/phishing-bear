import React from 'react'
import type { NextPage } from 'next'
import { Button, PublicLayout, LinkButton, SEO } from '@components'

const About: NextPage = () => {
  return (
    <>
      <SEO />
      <PublicLayout>
        <section className="about-hero">
          <div className="container">
            <div className="row">
              <div className="col mx-auto text-center">
                <h2 className="m-auto fw-bold pb-5 lh-sm">Phishing protection can be hard, but it doesn’t have to be</h2>
                <p className="fs-1 lh-sm">We use state of the art cyber security combined with the finest user experience tools available, to create a seamless and enjoyable phishing awareness program. You stay secure without even noticing it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary text-white">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-6 col-lg-6 col-xl-4">
                <h5 className="pb-5 mb-0">Reduce your largest attack surface — your end-users.</h5>
                <p className="font-roboto">Phishing attacks have shown record growth in recent years and a solid security awareness program is essential for organizations to stay safe. We educate your end-users in a smooth and seamless way. Helping them to always remain secure without ever taking focus off their ordinary work. We provides you with the flexibility and customization your organization needs to facilitate a positive security awareness culture.”</p>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-8 text-end">
                <img src="/assets/images/hackers.png" alt="Hackers" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-success">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6 col-xl-7">
                <img src="/assets/images/research.png" alt="Research" className="img-fluid" />
              </div>
              <div className="col-md-6 col-lg-6 col-xl-5">
                <h5 className="pb-5 mb-0">Phishing protection can be hard, but it doesn’t have to be.</h5>
                <p className="font-roboto">We use state of the art cyber security combined with the finest user experience  tools available, to create a seamless and enjoyable phishing awareness program. You stay secure without even noticing it. </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6 col-xl-5">
                <h5 className="pb-5 mb-0">We think like hackers - but we’re nice </h5>
                <p className="font-roboto">Phishing attacks are as broad as human creativity can go. We analyze millions of emails, URLs, files, and other data points each day to make sure we stay up to date with the latest threats. This constant stream of intelligence ensures user training covers current phishing tactics. We always create socially relevant attack simulations, covering multiple scenarios from beginner to expert, and all translated into many different languages.</p>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-7 text-end">
                <img src="/assets/images/standstill.png" alt="Stand Still" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <p className="fs-1 pb-5">Targeted attacks with malicious payload use social engineering and phishing to bypass email gateways. Our Email Protection prevents these attacks to protect your business and data.</p>
                <Button className="text-white btn-pill my-3 fs-2" type="button" name="Try it for free" />
                <LinkButton name={'View plans'} className={'text-dark d-block fs-3 font-roboto'} path={''} />

              </div>
            </div>
          </div>
        </section>
      </PublicLayout>
    </>
  )
}

export default About;
