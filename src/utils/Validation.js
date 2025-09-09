import * as yup from 'yup';
import { ref } from "yup";



export const contactFormValidation = yup.object().shape({
    email: yup.string().email('Please Enter Valid Email').required('Email Address Required'),
    number: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Digits"),
    userName: yup.string().required('Enter User Name'),
    date: yup.string().required('Please Enter Birthdate'),
    time: yup.string().required('Please Select Time'),
    seats: yup.number().required('Please Enter No of Seats'),
})