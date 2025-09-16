import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

import CallIcon from '../../assets/images/call-black-icon.svg';
import AddressIcon from '../../assets/images/location-black-icon.svg';
import TimeIcon from '../../assets/images/clock-black-icon.svg';

import MenuIcon from '../../assets/images/menu-bar-icon.svg';
import Marquee from 'react-fast-marquee';

const Header = ({headerMarquee}) => {

    const [mobileMenu , setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }


    const handleOpenMaps = () => {
        window.open("https://maps.app.goo.gl/eTWUeCPYZbN46bFr5", "_blank");
    };

    const handleCall = () => {
       window.open("tel:+13147699775" , "_self")
    }
  return (
    <div className="Header-main-section">
        <div className={`header-top-strip ${headerMarquee == true ? 'hide-strip' : 'show-strip'}`}>
            <div className={`inner-header-strip `}>
                <Marquee
                    gradient={false}
                    gradientColor={'#181818'}
                    gradientWidth={200}
                    pauseOnHover
                >
                    <ul className='flex items-center justify-center gap-x-18 ml-8 marquee-scrolling-text-sec'>
                        <li><button onClick={handleCall} type="button" className='flex items-center gap-2'><img src={CallIcon} alt="" />(314) 769-9775</button></li>
                        <li><button onClick={handleOpenMaps} type="button" className='flex items-center gap-2'><img src={AddressIcon} alt="" />7289 Watson Rd, St. Louis, MO 63119</button></li>
                        <li><button type="button" className='flex items-center gap-2'><img src={TimeIcon} alt="" />Open 7am to 2:00pm Daily</button></li>
                        <li><button onClick={handleCall} type="button" className='flex items-center gap-2'><img src={CallIcon} alt="" />(314) 769-9775</button></li>
                        <li><button onClick={handleOpenMaps} type="button" className='flex items-center gap-2'><img src={AddressIcon} alt="" />7289 Watson Rd, St. Louis, MO 63119</button></li>
                        <li><button type="button" className='flex items-center gap-2'><img src={TimeIcon} alt="" />Open 7am to 2:00pm Daily</button></li>
                    </ul>
                </Marquee>
            </div>
        </div>
        <div className={`header-main py-4 ${headerMarquee == true ? 'border-b border-b-borderColor' : ''}`}>
            <div className="inner-header-main">
                <div className="container">
                    <div className="inner-header-content flex items-center justify-between">
                        <div className="left-header-logo h-14 w-fit">
                            <NavLink to={'/'} className={'inline-block h-full'}>
                                <img src={Logo}  alt="" />
                            </NavLink>
                        </div>
                        <div className="right-header-menu desktop-menu-section">
                            <nav>
                                <ul className='flex items-center gap-x-14 header-navigation-menu'>
                                    <li><NavLink to={'/'}>Home</NavLink></li>
                                    <li><NavLink to={'menu'}>Menu</NavLink></li>
                                    <li><NavLink to={'/event-space'}>The Eclore Room Event Space</NavLink></li>
                                    <li><a href="https://forms.gle/3WTFEN171CRdeAJt6" target='_blank'>Join Our Team</a></li>
                                    <li><NavLink to={'/our-vision'}>Our Vision</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-menu-button">
                            <button type="button" onClick={handleMobileMenu} className='w-7'><img src={MenuIcon} alt="" /></button>
                        </div>
                        <div className={`mobile-header-menu ${mobileMenu ? 'active' : ''}`}>
                            <div className="top-back-icon-mobile bg-inputBg">
                                <button type="button" onClick={() => setMobileMenu(false)} className='flex items-center gap-2.5 text-Black font-semibold'>
                                    <i class="bi bi-arrow-right text-Black text-lg"></i>
                                    Close
                                </button>
                            </div>
                            <div className="p-8 border-b border-borderColor mb-5">
                                <div className="mobile-menu-logo-sec h-8 w-fit">
                                    <img src={Logo} className="object-left w-fit" alt="" />
                                </div>
                            </div>
                            <div className="mobile-main-menu-listing-sec">
                                <nav>
                                    <ul className='flex flex-col gap-y-4 header-navigation-menu'>
                                        <li onClick={() => setMobileMenu(false)}><NavLink to={'/'}>Home</NavLink></li>
                                        <li onClick={() => setMobileMenu(false)}><NavLink to={'/menu'}>Menu</NavLink></li>
                                        <li onClick={() => setMobileMenu(false)}><NavLink to={'/event-space'}>The Eclore Room Event Space</NavLink></li>
                                        <li onClick={() => setMobileMenu(false)}><a href="https://forms.gle/3WTFEN171CRdeAJt6" target='_blank'>Join Our Team</a></li>
                                        <li onClick={() => setMobileMenu(false)}><NavLink to={'/our-vision'}>Our Vision</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <button type='button' onClick={() => setMobileMenu(false)} className={`mobile-header-overlay ${mobileMenu ? 'active' : ''}`}>

                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Header