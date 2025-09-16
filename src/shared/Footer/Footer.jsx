import React from 'react'
import './Footer.scss'
import Logo from '../../assets/images/logo.svg';

import InstaIcon from '../../assets/images/insta.svg';
import FaceIcon from '../../assets/images/facebook.svg';
import XIcon from '../../assets/images/twitter.svg';
import LinkedIcon from '../../assets/images/linked-in.svg';
import { NavLink } from 'react-router-dom';



const Footer = () => {

    const socialIcons = [
        {
            img: InstaIcon,
            link: ''
        },
        {
            img: FaceIcon,
            link: ''
        },
        {
            img: XIcon,
            link: ''
        },
        {
            img: LinkedIcon,
            link: ''
        },
    ]

  return (
    <div className="footer-main-section">
        <div className="inner-footer-section">
            <div className="container">
                <div className="footer-grid grid grid-cols-12">
                    <div className="footer-intro col-span-5">
                        <div className="footer-logo h-20 w-fit mb-4">
                             <NavLink to={'/'} className={'inline-block h-full'}>
                                <img src={Logo}  alt="" />
                            </NavLink>
                        </div>
                        <p className='font-manrope text-Black opacity-70 w-[60%]'>From sunrise pancakes to mid-day favorites – we’ve got your cravings covered.</p>
                        <div className="social-icons flex items-center gap-6 mt-8">
                            {socialIcons.map((item , index) => {
                                return (
                                    <button type="button" key={index}>
                                        <img src={item.img} alt="" />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="footer-menu-sec col-span-7">
                        <div className="grid grid-cols-3 gap-x-18 footer-menu-grid-section">
                            <div className="single-footer-menu-blk">
                                <p>Quick Links</p>
                                <nav className='mt-6'>
                                    <ul className='flex flex-col gap-y-4'>
                                        <li><NavLink to={'/'}>Home</NavLink></li>
                                        <li><NavLink to={'/menu'}>Menu</NavLink></li>                                        
                                        <li><NavLink to={'/our-vision'}>Our Vision</NavLink></li>                                        
                                    </ul>
                                </nav>
                            </div>
                            <div className="single-footer-menu-blk">
                                <p>Extras</p>
                                <nav className='mt-6'>
                                    <ul className='flex flex-col gap-y-4'>
                                        <li><a href="https://forms.gle/3WTFEN171CRdeAJt6" target='_blank'>Join Our Team</a></li>
                                        <li><NavLink to={'/event-space'}>The Eclore Room Event Space</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="single-footer-menu-blk">
                                <p>Contact</p>
                                <nav className='mt-6'>
                                    <ul className='flex flex-col gap-y-4'>
                                        <li><a href='https://maps.app.goo.gl/eTWUeCPYZbN46bFr5' target='_blank'>7289 Watson Rd, <br /> St. Louis, MO 63119</a></li>
                                        <li><a href='tel:+13147699775'>(314) 769-9775</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer