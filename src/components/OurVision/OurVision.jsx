import React from 'react';
import '../Home/Home.scss';
import './OurVision.scss';
import TasetOfSoryImg from '../../assets/images/tatse-of-our-story.png';
import MoreThanPanImg from '../../assets/images/more-than-pancakes.png';
import { NavLink } from 'react-router-dom';



const OurVision = () => {
  return (
    <div className="main-our-vision-section">
        <div className="inner-our-vision-sec">
            <section className="main-breadcrumb-similar">
                <div className="inner-menu-bread-crumb">
                    <div className="container">
                        <h2 className="">OUR VISION</h2>
                        <ul className="flex items-center justify-center gap-x-3">
                            <li>
                                <NavLink to={"/"}>Golden Oak</NavLink>
                            </li>
                            <li>
                                <i class="bi bi-chevron-right text-white"></i>
                            </li>
                            <li>
                                <p>Our Vision</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="ourvision-section-1">
                <div className="inner-ourvision-section-1">
                    <div className="container">
                        <div className="our-vision-sec-1-grid grid grid-cols-12 items-center">
                            <div className="similar-our-vision-cols col-span-6 home-sec-1-left">
                                <div className="block-content-section">
                                    <h2>A Taste of <span> Our Story</span></h2>
                                    <div className="para-block-content-sec flex flex-col gap-y-5">
                                        <p>At <strong>Golden Oak Pancake House</strong>, food is our love language. From the very first flip of a pancake to the last sip of freshly brewed coffee, our story has always been about creating moments worth savoring. Inspired by the warmth of classic American diners, we set out to build a place where every guest feels like family.</p>
                                        <p>Our signature pancakes, golden and fluffy, are just the beginning. Each recipe is made from scratch using quality ingredients, honoring the traditions of hearty breakfasts and wholesome dining that have stood the test of time. Here, it’s not just about eating—it’s about sharing stories, laughter, and the simple joy of comfort food done right.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="similar-our-vision-cols col-span-6 home-sec-1-right">
                                <div className="our-vision-imagesec">
                                    <img src={TasetOfSoryImg}  className='rounded-2xl' alt="" />
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ourvision-section-2">
                <div className="inner-ourvision-section-2">
                    <div className="container">
                        <div className="our-vision-sec-1-grid grid grid-cols-12 items-center">
                            <div className="similar-our-vision-cols home-sec-2-left-col col-span-6">
                                <div className="our-vision-imagesec">
                                    <img src={MoreThanPanImg}  className='rounded-2xl' alt="" />
                                </div>  
                            </div>
                            <div className="similar-our-vision-cols home-sec-2-right-col col-span-6">
                                <div className="block-content-section">
                                    <h2>More Than Just <span> Pancakes</span></h2>
                                    <div className="para-block-content-sec flex flex-col gap-y-5">
                                        <p>While pancakes are at the heart of what we do, our kitchen is filled with flavors for every appetite. From savory egg combos and crispy bacon to juicy burgers and fresh sandwiches, each dish is designed to bring out the best of American comfort dining.</p>
                                        <p>We believe food has the power to connect people, which is why our menu is made to be shared and enjoyed together. Whether it’s families gathering for a Sunday brunch, friends catching up over coffee, or travelers looking for a taste of home, <strong>Golden Oak Pancake House</strong> is where good times meet good food.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-9">
                <div className="inner-home-section-9 h-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.797169643422!2d-90.3197014!3d38.5845184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cb9a3543f1a1%3A0xcd26c842f4f6e22!2sGolden%20Oak%20Pancake%20House%20-%20St.%20Louis!5e0!3m2!1sen!2sin!4v1757359781673!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>  
            </section>
        </div>
    </div>
  )
}

export default OurVision