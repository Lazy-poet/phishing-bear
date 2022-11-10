import React from 'react'
import type { NextPage } from 'next'
import { Button, PublicLayout, LinkButton, SEO } from '@components'

const Private: NextPage = () => {
  return (
    <>
      <SEO />
      <PublicLayout>
        <section className="pb-0">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <p className="fs-1">Phising protection for private customers.</p>
                <h2>Feel like you just hired a white-hat hacker in-house.</h2>
                <img src="/assets/images/astro-4.png" alt="Private Astro" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary card-bg py-0">
          <div className="container">

            <div className="accordion " id="accordionExample">
              <div className="accordion accordion-flush mt-0 px-0" id="accordionFlushExample">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 justify-content-center">
                  <div className="accordion-item bg-secondary border-0 mt-0">
                    <div className="d-flex align-item-center justify-content-center flex-column" style={{ height: '420px' }}>
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed bg-transparent text-center text-white shadow-none fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          More than 50% of all cyber attacks start with phishing.
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
                          Phishing is more than just emails.
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
                          Nano-learning is the new learning.
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white fs-4"><hr />
                          We use nano-learnnig, short snippets of 1-3 minutes that repeatedly helps you remember and learn how to best protect yourself against phishing.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <p className="fs-1 mb-5">Targeted attacks with malicious payload use social engineering and phishing to bypass email gateways. Our Email Protection prevents these attacks to protect your business and data. </p>
                <Button type={'button'} name={'Try it for free'} className={'bg-primary text-white btn-pill fs-2'} />
                <LinkButton name={'View plans'} className={'text-dark d-block fs-3'} path={''} />
              </div>
            </div>
          </div>
        </section>
      </PublicLayout>
    </>
  )
}
export default Private;
