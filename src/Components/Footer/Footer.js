import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
    return (
        <React.Fragment>
            <>
                <MDBFooter className='text-center text-lg-start text-muted'>
                    <div className='footer-overlay'>
                        <section className=''>
                            <MDBContainer className='text-center text-md-start mt-5'>
                                <MDBRow className='mt-3'>
                                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 d-flex flex-column align-items-center'>
                                        <h6 className='text-uppercase fw-bold mb-4 text-center'>
                                            <div className='navImg'></div>
                                        </h6>
                                        <p>
                                            your premier destination for the finest chilli variants sourced from around the globe.
                                        </p>
                                    </MDBCol>

                                    <MDBCol md="5" lg="2" xl="2" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                                        <p>
                                            <a href='/Products' className='text-reset'>
                                                Products
                                            </a>
                                        </p>
                                        <p>
                                            <a href='/about' className='text-reset'>
                                                About Us
                                            </a>
                                        </p>
                                        <p>
                                            <a href='/contactus' className='text-reset'>
                                                Contact Us
                                            </a>
                                        </p>
                                    </MDBCol>
                                    <MDBCol md="5" lg="2" xl="2" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Akash Enterprises</h6>
                                        <p>
                                            <a href="https://www.google.com/maps/search/11-14-131,+Road+No.+15A,+%22O%22+City,+Warangal,+TS+-+506002,+INDIA" target="_blank">
                                                11-14-131, Road No. 15A, "O" City,<br />
                                                Warangal, TS - 506002, INDIA
                                            </a>
                                        </p>
                                    </MDBCol>



                                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                        <p>
                                            <MDBIcon icon="home" className="me-2" />
                                            Warangal, TS - 506002, INDIA
                                        </p>
                                        <p>
                                            <MDBIcon icon="envelope" className="me-3" />
                                            <a href="mailto:marellaharish9@gmail.com" target="_blank">marellaharish9@gmail.com</a>

                                        </p>
                                        <p>
                                            <MDBIcon icon="phone" className="me-3" /> <a href="tel:9958452585">9958452585</a>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </section>

                        <div className='p-4 text-center w-100'>
                            Copyright © 2024 Akash Enterprises : All rights reserved | <a href="https://marellaharish.github.io/-personalportfolio/" target='_blank'>Website Designed and Developed by Harish Marella</a>
                        </div>
                    </div>
                </MDBFooter>
            </>
        </React.Fragment>
    )
}
