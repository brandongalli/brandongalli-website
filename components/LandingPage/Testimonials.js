import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

const Testimonials = () => {
    return (
        <div className="review-area border-bottom ptb-100">
            <div className="common-right-text">
                <span>REVIEW</span>
            </div>

            <div className="container">
                <div className="section-title">
                    <span className="sub-title">TESTIMONIALS</span>
                    <h2>What Our <span>Clients</span> Say</h2>
                </div>

                <Swiper 
                    effect={"fade"}
                    navigation={true} 
                    modules={[EffectFade, Navigation]} 
                    className="mySwiper review-slider"
                >
                    <SwiperSlide>
                        <div className="review-item">
                            <i className='bx bxs-quote-right'></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim illo magni debitis in at culpa quidem eum molestiae reiciendis provident, officiis consequatur voluptates error maiores, pariatur natus ex quaerat</p>
                            <img src="/images/review/review1.jpg" alt="Review" />
                            <h3>Andrew Smith</h3>
                            <span>Web Developer</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="review-item">
                            <i className='bx bxs-quote-right'></i>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                            <img src="/images/review/review2.jpg" alt="Review" />
                            <h3>Tom Henry</h3>
                            <span>UX/UI Designer</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="review-item">
                            <i className='bx bxs-quote-right'></i>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                            <img src="/images/review/review3.jpg" alt="Review" />
                            <h3>Jac Jacson</h3>
                            <span>SEO Expert</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;