import React from 'react';
import { PrivateLayout, SEO } from '@components'

const FAQ = () => {
  return (
    <>
      <SEO />
      <PrivateLayout>
        <section className="faq-img">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src="/assets/images/faq-astro.svg" alt="FAQ Astro" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="faq-content pt-0">
          <div className="container p-5">
            <div className="row">
              <div className="col">
                <div className="accordion" id="accordionFaq">
                  <div className="accordion-item border-0 mb-5">
                    <h5 className="accordion-header " id="faqOne">
                      <button className="accordion-button shadow-none fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What types of businesses are most at risk for a cyberattack?
                      </button>
                    </h5>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="faqOne" data-bs-parent="#accordionFaq">
                      <div className="accordion-body fs-2 position-relative">
                        <p> You may think that big businesses with more endpoints are more vulnerable than small businesses. Or, businesses with attractive data, like financial services companies or those in the healthcare industry, would be easy targets. That’s not always the case—of course, they hold an incredible amount of data, but it’s like trying to rob the Federal Reserve gold vault versus robbing a regular Joe on the street. Bigger businesses or those that handle sensitive data typically have the technology, regulations, and processes to protect themselves from cyberattacks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-5">
                    <h5 className="accordion-header" id="headingTwo">
                      <button className="accordion-button shadow-none fs-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What types of businesses are most at risk for a cyberattack?
                      </button>
                    </h5>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaq">
                      <div className="accordion-body fs-2 position-relative">
                        <p> You may think that big businesses with more endpoints are more vulnerable than small businesses. Or, businesses with attractive data, like financial services companies or those in the healthcare industry, would be easy targets. That’s not always the case—of course, they hold an incredible amount of data, but it’s like trying to rob the Federal Reserve gold vault versus robbing a regular Joe on the street. Bigger businesses or those that handle sensitive data typically have the technology, regulations, and processes to protect themselves from cyberattacks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PrivateLayout>
    </>
  )
}
export default FAQ;