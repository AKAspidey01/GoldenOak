import React from 'react';
import '../Home/Home.scss';
import { NavLink } from 'react-router-dom';
import './EventRoom.scss'

import GuestsIcon from '../../assets/images/guests-icon.svg';
import TimingsIcon from '../../assets/images/timings-icon.svg';
import PricingIcon from '../../assets/images/pricing-icon.svg';
import PrivateEvent from '../../assets/images/private-events.png';


const EventRoom = () => {
  return (
    <div className="event-room-main-section">
        <div className="inner-event-room-main-sec">
            <section className="main-breadcrumb-similar">
                <div className="inner-menu-bread-crumb">
                    <div className="container">
                        <h2 className="">THE EVENT SPACE</h2>
                        <ul className="flex items-center justify-center gap-x-3">
                            <li>
                                <NavLink to={"/"}>Golden Oak</NavLink>
                            </li>
                            <li>
                                <i class="bi bi-chevron-right text-white"></i>
                            </li>
                            <li>
                                <p>Event Rooms</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="event-room-section-1">
                <div className="inner-event-room-section-1">
                    <div className="container">
                        <div className="event-room-sec-1-grid grid grid-cols-12 gap-5">
                            {/* <div className="col-span-4 similar-event-room-sec-1-cols guests-col-event">
                                <div className="inner-event-sec-1-col">
                                    <div className="top-event-room-icon">
                                        <img src={GuestsIcon} alt="" />
                                    </div>
                                    <div className="event-room-card-content-sec">
                                        <h4>Guests</h4>
                                        <p>Up to 200</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-span-6 similar-event-room-sec-1-cols timing-col-event">
                                <div className="inner-event-sec-1-col">
                                    <div className="top-event-room-icon">
                                        <img src={TimingsIcon} alt="" />
                                    </div>
                                    <div className="event-room-card-content-sec">
                                        <h4>Timings</h4>
                                        <p>7:00 PM - 2:00 AM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 similar-event-room-sec-1-cols pricing-col-event">
                                <div className="inner-event-sec-1-col">
                                    <div className="top-event-room-icon">
                                        <img src={PricingIcon} alt="" />
                                    </div>
                                    <div className="event-room-card-content-sec">
                                        <h4>Pricing</h4>
                                        <ul className='hidden flex-wrap justify-center gap-x-10 gap-y-2'>
                                            <li>
                                                <p>Mon - Tue : $500</p>
                                            </li>
                                            <li>
                                                <p>Fri - Sat : $1,500</p>
                                            </li>
                                            <li>
                                                <p>Wed - Thurs : $750</p>
                                            </li>
                                            <li>
                                                <p>Sun : $1,000</p>
                                            </li>
                                        </ul>
                                        <p>Free Venue Space</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-8 event-room-section-2">
                <div className="inner-home-section-8">
                    <div className="container">
                        <div className="home-section-8-grid grid grid-cols-12 gap-x-12 items-center">
                            <div className="col-span-6 right-home-section-8 similar-home-sec-8-cols">
                                <div className="block-content-section">
                                    <h2>Private Gatherings, <br /> <span>Perfectly Served</span></h2>
                                    <div className="para-block-content-sec flex flex-col gap-y-5">
                                        <p>Host your celebrations in our exclusive private event space, designed for intimate gatherings, corporate dinners, and special occasions. With a warm ambiance, personalized service, and exceptional cuisine, we create the perfect backdrop for unforgettable moments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 left-home-section-8 similar-home-sec-8-cols">
                                <img src={PrivateEvent} alt="" />
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

export default EventRoom