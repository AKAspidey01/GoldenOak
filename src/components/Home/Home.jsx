import React, { useState  } from 'react';
import './Home.scss';
import AboutImage from '../../assets/images/home-section-2-left-image.png';
import PrivateEvent from '../../assets/images/private-events.png';

import Mimosas from '../../assets/images/mimosas.png';
import BloodyMary from '../../assets/images/bloody-mary.png';
import Drafts from '../../assets/images/drafts.png';
import Wine from '../../assets/images/wine.png';
import wellDrinks from '../../assets/images/well-drinks.png';
import MenuTabs from './MenuTabs';
import TabPanel from './TabPanel';
import RightMenu from '../../assets/images/home-egg-menu-right.png';
import WeeklySpec from '../../assets/images/weekly-specials.png';
import CalendarIcon from '../../assets/images/timings-calendar.svg';
import { contactFormValidation } from '../../utils/Validation';

import Omelets from '../../assets/images/omelets.png';
import Skillets from '../../assets/images/skillets.png';
import FrenchToast from '../../assets/images/french-toast-home-page.png';
import Pancakes from '../../assets/images/pancakes-home-page.png';
import Waffles from '../../assets/images/waffles-home-page.png';



import { Formik , Form , Field } from 'formik';
import Select from 'react-select'

import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader"; 
import MenuData from '../Menu/MenuContent';


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


const Home = () => {


    const morningSipsData = [
        {
            img: Skillets,
            name: 'Skillets',
            price: 5,
        },
        {
            img: Omelets,
            name: "Omelets",
            price: 4,
        },
        {
            img: FrenchToast,
            name: 'French Toast',
            price: 3,
        },
        {
            img: Pancakes,
            name: 'Pancakes',
            price: 4,
        },
        {
            img: Waffles,
            name: 'Waffles',
            price: 4,
        },
    ]

    const tabContentMenu = [
        {
            menuNumber: 1,
            menuImage: RightMenu,
            menuList: [
                {
                    head: 'Mozzarella Sticks',
                    text: 'Golden fried cheese sticks with gooey mozzarella inside, paired with tangy marinara.',
                    price: '$7.99'
                },
                {
                    head: 'Loaded Nachos',
                    text: 'A mountain of tortilla chips smothered with cheese, jalapeños, salsa, sour cream & guacamole.',
                    price: '$10.99'
                },
                {
                    head: 'Spinach & Artichoke Dip',
                    text: 'Creamy, cheesy dip packed with spinach and artichokes, served with warm tortilla chips',
                    price: '$8.99'
                },
                {
                    head: 'Sliders Trio',
                    text: 'Three mini beef burgers topped with melted cheese, pickles & house special sauce.',
                    price: '$12.99'
                },
            ]
        }

    ]

    const contactAddress = [
        {
            head: 'Golden Oak Pancake House',
            text: '7289 Watson Road Shrewsbury, MO 63119, 314-769-9775',
        },
        {
            head: 'Golden Oak Pancake House',
            text: '6663 Edwardsville Crossing Dr. Edwardsville, IL 62025, 618-307-9966'
        },
        {
            head: 'Golden Oak Pancake House',
            text: '4519 N Illinois St. Swansea, IL 62226, 618-416-4633'
        },
        {
            head: 'Golden Oak Pancake House',
            text: '6149 Midrivers Mall Dr. St. Peters, MO 63304, 636-244-2587'
        },
        {
            head: 'Silver Pancake House',
            text: '9983 Manchester Road,  St. Louis, MO 63122 , 314-858-9091'
        },
    ]

    const timeOptions = [
        { value: '7AM-8AM', label: '7AM - 8AM' },
        { value: '8AM-9AM', label: '8AM - 9AM' },
        { value: '9AM-10AM', label: '9AM - 10AM' },
        { value: '10AM-11AM', label: '10AM - 11AM' },
        { value: '11AM-12PM', label: '11AM - 12PM' },
        { value: '12PM-1PM', label: '12PM - 1PM' },
        { value: '1PM-2PM', label: '1PM - 2PM' },
    ];

    const [value, setValue] = useState(0);
    const [specialReq , setSepcialReq] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const contactFormValues = {
        email: "",
        number: "",
        userName: "",
        date: "",
        time: "",
        seats: "",
    }

    const handleContactForm = (data) => {
        console.log( "data" , data)
    }
    


    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const contactPageFormSubmit = (values , {resetForm}) => {
        setLoading(true);
        setSuccess(false);

        const serviceID = "service_vptgmb9";
        const templateID = "template_5oyk4bg";
        const userID = "e3K71oK7JTTmFE69-";

        const templateParams = {
            email: values.email,
            mobileNumber: values.number,
            userName: values.userName,
            date: values.date,
            timeSlot: values.time,
            seats: values.seats,
            requests: specialReq
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Your request sent successfully");
            setLoading(false);
            setSuccess(true);
            resetForm()

            // optional: delay before navigating
            setTimeout(() => {
            //   navigate("/Thankyou");
            }, 1000);
        })
        .catch((error) => {
            setLoading(false);
            setSuccess(false);
            toast.error("Failed to send message.");
        });
    };

    function numbersOnly(e) {
        var key = e.key;
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            e.preventDefault();
        }
        else {
            // console.log("You pressed a key: " + key);
        }
    }


  return (
    <div className="Home-main-section">
        <div className="inner-home-main-section">
            <section className="home-section-1 flex items-center justify-center">
                <div className="inner-home-section-1">
                    <div className="container">
                        <div className="home-section-1-banner-content">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 banner-left-content-home">
                                    <div className="main-heading">
                                        <h1>Flavors That Bring <span className='text-primary'>People Together</span></h1>
                                        <p className='text-white'>Step inside <strong>Golden Oak</strong> and discover a place where flavors, comfort, and hospitality come together. Whether it’s a family dinner or a casual outing, we serve dishes made with love to make every visit special</p>
                                    </div>
                                    <div className="banner-buttons flex items-center gap-x-8 mt-12">
                                        <div className="button-left-home-sec-1"><button className='px-10 py-[10px] rounded-full bg-secondary text-white hover:bg-primary hover:text-Black' type="button" onClick={() => navigate('/menu')}>Open Menu</button></div>
                                        <div className="button-right-home-sec-1"><button className='px-10 py-[10px] rounded-full bg-white text-secondary hover:bg-primary hover:text-Black' type="button">Join Us</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-2">
                <div className="inner-home-section-2">
                    <div className="container">
                        <div className="home-section-2-grid grid grid-cols-12 gap-x-12">
                            <div className="col-span-6 similar-home-sec-2-cols left-home-section-2">
                                <img src={AboutImage} alt="" />
                            </div>
                            <div className="col-span-6 similar-home-sec-2-cols right-home-section-2">
                                <div className="top-block-tag">
                                    <p className='pl-4 text-primary font-semibold'>ABOUT US</p>
                                </div>
                                <div className="block-content-section">
                                    <h2>A Place Where Flavors <br /> <span>Feel Like Home</span></h2>
                                    <div className="para-block-content-sec flex flex-col gap-y-5">
                                        <p>At <strong>Golden Oak</strong>, we believe every meal should be more than just food—it should be an experience. Our chefs blend authentic recipes with a modern touch, creating dishes that bring comfort and joy to your table. Whether it’s your first visit or your fiftieth, you’ll always feel like family here.</p>
                                        <p>We’ve crafted a cozy space where friends meet, stories are shared, and every bite feels special. Come in hungry, leave with a smile.</p>
                                    </div>
                                    <div className="similar-block-button"><button className='px-10 py-[10px] rounded-full bg-secondary text-white hover:bg-primary hover:text-Black' type="button" onClick={() => navigate('/our-vision')}>Know More</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-3">
                <div className="inner-home-section-3">
                    <div className="container">
                        <div className="block-content-section">
                            <h2>Morning Bites, <span> Happy Starts</span></h2>
                            <div className="para-block-content-sec">
                                <p>Enjoy the perfect balance of flavor and freshness with our hearty breakfast picks <br /> omelets, French toast, pancakes, and more, crafted to fuel your day.</p>
                            </div>
                        </div>
                        <div className="home-sec-3-grid grid grid-cols-5 gap-x-6">
                            {morningSipsData.map((item , index) => {
                                return (
                                    <div className="single-sec-3-card" key={index}>
                                        <div className="drinks-images-sec-3 relative">
                                            <img src={item.img} alt="" />
                                            <div className="abs-sec-3-detail-card flex items-center justify-between gap-x-4 absolute bottom-[10px] left-0 w-full bg-white px-5 py-3 ">
                                                <p className='font-manrope text-lg font-medium text-Black'>{item.name}</p>
                                                <p className='text-secondary font-semibold font-plusjakarta text-xl'>${item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-4">
                <div className="inner-home-section-4">
                    <div className="container">
                        <div className="top-block-tag">
                            <p className='pl-4 text-primary font-semibold'>MENU</p>
                        </div>
                        <div className="block-content-section">
                            <h2>Pick Your <span>Plate</span></h2>
                        </div>
                        <div className="home-sec-4-tabs-sec grid grid-cols-12 mt-6 items-center gap-y-12">
                            <div className="col-span-8 tab-menu-column-sec-4">
                                <MenuTabs value={value} handleChange={handleChange} />
                            </div>
                            <div className="col-span-4 text-end sec-4-full-menu-desktop-btn">
                                <div className="block-button"><button className='px-10 py-[10px] rounded-full bg-secondary text-white hover:bg-primary hover:text-Black' type="button" onClick={() => navigate('/menu')}>View complete menu</button></div>
                            </div>
                            <div className="col-span-12 tab-section-home-column">
                                {MenuData.map((menu , index) => {
                                    return (
                                        <TabPanel value={value} index={index}>
                                            <div className="single-tab-section-home-screen grid grid-cols-12 gap-x-12">
                                                <div className="left-menu-section-home-screen col-span-6">
                                                   <div className="flex flex-col gap-y-7">
                                                        {menu.menuList.map((item , menuIndex) => {
                                                            const isLast = index === menu.menuList.length - 1;
                                                            return (
                                                                <div className={`single-menu-item pb-7  ${isLast ? 'border-b-0' : 'border-b border-b-borderColor'}`} key={menuIndex}>
                                                                    <div className="top-menu-name-price flex items-center justify-between gap-x-4 mb-2.5">
                                                                        <p className='text-Black font-medium font-plusjakarta text-lg'>{item.menuTitle}</p>
                                                                        <p className='text-Black font-medium font-plusjakarta text-lg'>{item.price}</p>
                                                                    </div>
                                                                    <p className='text-sm font-plusjakarta font-normal text-Black w-10/12'>{item.menuDesc}</p>
                                                                </div>
                                                            )
                                                        })}
                                                   </div>
                                                </div>
                                                <div className="right-image-sec-tab col-span-6">
                                                    <img src={RightMenu} className='rounded-2xl object-cover' alt="" />
                                                </div>
                                            </div>
                                        </TabPanel>
                                    )
                                })}
                            </div>
                            <div className="col-span-4 sec-4-full-menu-mobile-btn">
                                <div className="block-button"><button className='px-10 py-[10px] rounded-full bg-secondary text-white hover:bg-primary hover:text-Black' type="button">View complete menu</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-5">
                <div className="inner-homw-section-5">
                    <div className="container">
                        <div className="home-sec-5-content">
                            <h2>CINNAMON SWIRL PANCAKES</h2>
                            <p>Our special treat, crafted with love.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-6">
                <div className="inner-home-section-6">
                    <div className="container">
                        <div className="home-section-6-grid grid grid-cols-12 gap-x-12 items-center">
                            <div className="col-span-6 left-home-section-6 similar-home-sec-6-cols">
                                <img src={WeeklySpec} className='rounded-2xl' alt="" />
                            </div>
                            <div className="col-span-6 right-home-section-6 similar-home-sec-6-cols">
                                <div className="block-content-section">
                                    <h2>Weekly Specials</h2>
                                    <div className="extra-para-head-home-sec-6 flex items-center gap-x-5">
                                        <h2><span>Early Bird</span></h2>
                                        <p className='text-lg italic'>Mon - Fri 7AM - 9AM</p>
                                    </div>
                                    <div className="para-block-content-sec flex flex-col gap-y-5">
                                        <p>Two Eggs, Two Strips of Bacon, Hash Browns, Toast for  $9.99 </p>
                                    </div>
                                    <div className="similar-block-button"><button className='px-10 py-[10px] rounded-full bg-secondary text-white hover:bg-primary hover:text-Black' type="button" onClick={() => navigate('/menu')}>View Menu</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-7">
                <div className="inner-home-section-7">
                    <div className="container">
                        <div className="block-content-section">
                            <h2>Visit & <span>Connect</span></h2>
                        </div>
                        <div className="contact-address-form-section mt-10">
                            <div className="grid grid-cols-12 gap-x-10 contact-secton-grid items-center">
                                <div className="addresses-section col-span-6 similar-home-sec-7-cols">
                                    <div className="grid grid-cols-12 gap-x-10 gap-y-10 multiple-address-main-grid">
                                        {contactAddress.map((item , index) => {
                                            const isLastItem = index === contactAddress.length - 1
                                            return (
                                            <div className={`single-address-column ${isLastItem ? 'col-span-12' : 'col-span-6'}`} key={index}>
                                                <p className='text-lg text-Black font-semibold'>{item.head}</p>
                                                <p className='font-normal text-Black opacity-80'>{item.text}</p>
                                            </div>
                                            )
                                        })}
                                        <div className="openinng-timings-contact-sec px-7 py-5 col-span-12 bg-white rounded-2xl">
                                            <div className="flex items-center gap-x-7 gap-y-5 opening-items-flexer">
                                                <div className="left-calendar-img">
                                                    <img src={CalendarIcon} alt="" />
                                                </div>
                                                <div className="right-timings-text">
                                                    <h4 className='text-primary'>Timings</h4>
                                                    <p>Open 7AM to 2:00PM  Daily</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-form-section col-span-6 similar-home-sec-7-cols bg-white p-7 rounded-[20px]">
                                    <Formik
                                        validationSchema={contactFormValidation}
                                        initialValues={contactFormValues}
                                        onSubmit={(values , {resetForm}) => contactPageFormSubmit(values , {resetForm})}
                                    >
                                        {({  errors, touched , handleSubmit , values , setFieldValue}) => (
                                        <Form>
                                            <div className="grid grid-cols-12 gap-6 contact-form-inputs-grid">
                                                <div className="form-inputsec relative similar-inputs-2-cols col-span-6">
                                                    <Field type="text" name="userName" placeholder='Full Name'
                                                        className={`outline-none border focus:border-secondary duration-300  ${errors.userName && touched.userName ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-Black border-transparent placeholder:text-Black'}`} 
                                                    />                                
                                                </div>
                                                <div className="form-inputsec relative similar-inputs-2-cols col-span-6">
                                                    <Field type="tel" name="number" onKeyPress={(e) => numbersOnly(e)} maxLength={10} placeholder='Mobile Number'
                                                        className={`outline-none border focus:border-secondary duration-300  ${errors.number && touched.number ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-Black border-transparent placeholder:text-Black'}`} 
                                                    />                                
                                                </div>
                                                <div className="form-inputsec relative col-span-12">
                                                    <Field type="email" name="email" placeholder='Enter Email Address*'
                                                        className={`outline-none border focus:border-secondary duration-300  ${errors.email && touched.email ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-Black border-transparent placeholder:text-Black'}`} 
                                                    />                                
                                                </div>
                                                <div className="form-inputsec relative similar-inputs-4-cols col-span-4">  
                                                    <Field name="date">
                                                        {({ field, form }) => (
                                                            <input
                                                                {...field}
                                                                // type="date"
                                                                onFocus={(e) => (e.target.type = "date")}
                                                                onBlur={(e) => {
                                                                    if (!e.target.value) e.target.type = "text";
                                                                }}
                                                                className={`outline-none border focus:border-secondary duration-300 ${errors.date && touched.date ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-Black border-transparent placeholder:text-Black'}`} 
                                                                placeholder="Date"
                                                            />
                                                        )}
                                                    </Field>                       
                                                </div>
                                                <div className="form-inputsec relative similar-inputs-4-cols col-span-4">
                                                    <Select options={timeOptions} 
                                                        placeholder='Time'
                                                        styles={{
                                                                control: (baseStyles, state) => ({
                                                                    ...baseStyles,
                                                                    borderRadius: 10,
                                                                    paddingLeft: 10,
                                                                    paddingTop: 6,
                                                                    paddingBottom: 6,
                                                                    borderColor: errors.time ? '#FF4E4E' : 'transparent',
                                                                    background: '#F6F6F6',
                                                                    fontSize: 16,
                                                                    color: "#101010",
                                                                    width: '100%',
                                                                    outline: 'none',
                                                                    fontWeight: 600,
                                                                //   borderColor: state.isFocused ? 'grey' : 'red',
                                                                }),
                                                            }}
                                                            value={timeOptions.find(option => option.value === values.time)} 
                                                            onChange={(option) => {setFieldValue('time', option ? option.value : '')}}
                                                    />                              
                                                </div>
                                                <div className="form-inputsec relative similar-inputs-4-cols col-span-4">
                                                    <Field type="number" name="seats" placeholder='Seats'
                                                        className={`outline-none border focus:border-secondary duration-300  ${errors.seats && touched.seats ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-Black border-transparent placeholder:text-Black'}`} 
                                                    />                                
                                                </div>
                                                <div className="form-inputsec relative col-span-12">
                                                    <textarea type="number" placeholder='Special Requests' onChange={(e) => setSepcialReq(e.target.value)}
                                                        className={`outline-none focus:border-secondary duration-300 `} 
                                                    />                                
                                                </div>

                                                <div className="bottom-form-submitter  overflow-hidden relative group col-span-4">
                                                    {loading ? 
                                                        <button type='submit' onClick={handleSubmit} className={`bg-[#E1E1E1] ${loading == true ? 'btn-loading' : ''}`} disabled={loading == true}>
                                                            <ClipLoader
                                                                color={"#000"}
                                                                loading={loading}
                                                                override={override}
                                                                size={30}
                                                                aria-label="Loading Spinner"
                                                                data-testid="loader"
                                                            />
                                                            <p className='text-sm'>Sending ...</p>
                                                        </button> :
                                                        <button type='submit' onClick={handleSubmit} className={`bg-secondary disabled:bg-gray-200 disabled:text-black disabled:hover:bg-gray-200 ${loading == true ? 'btn-loading' : ''}`} disabled={loading == true}>
                                                            <i class="bi bi-send-fill"></i>
                                                            Send
                                                        </button>
                                                    }
                                                </div>
                                            </div>
                                        </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section-8">
                <div className="inner-home-section-8">
                    <div className="container">
                        <div className="home-section-8-grid grid grid-cols-12 gap-x-12 items-center">
                            <div className="col-span-6 right-home-section-8 similar-home-sec-8-cols">
                                <div className="block-content-section">
                                    <h2>Private Gatherings, <br /> <span>Perfectly Served</span></h2>
                                    <div className="para-block-content-sec flex flex-col gap-y-5">
                                        <p>Host your celebrations in our exclusive private event space, designed for intimate gatherings, corporate dinners, and special occasions. With a warm ambiance, personalized service, and exceptional cuisine, we create the perfect backdrop for unforgettable moments.</p>
                                    </div>
                                    <div className="similar-block-button"><button className='px-10 py-[10px] rounded-full bg-secondary text-white hover:bg-primary hover:text-Black' type="button">Know More</button></div>
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

export default Home