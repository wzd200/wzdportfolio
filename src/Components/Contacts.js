import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {useForm} from 'react-hook-form';

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const serviceID='service_lxs5mx7';
    const templateID='template_v8h1isl';
    const userID='user_2mm0gJmFSkDNrXHPSwe6a';

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
            setSuccessMessage('Message sent!');
            })
            .catch(err =>
                console.error(`Something went wrong ${err}`)
            );
    };

    return (
        <div id= 'contact' className='contacts'>
            <div className='text-center'>
                <h2>Contact Me</h2>
                <p>Please fill out the form and I will get in contact with you as soon as possible.</p>
                <span className='success-message'>{successMessage}</span>
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            {/* NAME INPUT */}
                            {errors.name && <span className='error-message'>{errors.name.message}</span>}
                            <div className='text-center'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Name'
                                    {
                                        ...register('name', {
                                            required: 'Please enter your name',
                                        })
                                    }
                                />
                                <div className='line'></div>
                            </div>
                            {/* PHONE INPUT */}
                            {errors.phone && <span className='error-message'>{errors.phone.message}</span>}
                            <div className='text-center'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Phone Number'
                                    {
                                        ...register('phone', {
                                            required: 'Please enter your phone number',
                                        })
                                    }
                                    
                                />
                                <div className='line'></div>
                            </div>
                            {/* EMAIL INPUT */}
                            {errors.email && <span className='error-message'>{errors.email.message}</span>}
                            <div className='text-center'>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Email'
                                    {
                                        ...register('email', {
                                            required: 'Please enter a valid email address',
                                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i
                                        })
                                    }
                                />
                                <div className='line'></div>
                            </div>
                            {/* SUBJECT INPUT */}
                            {errors.subject && <span className='error-message'>{errors.subject.message}</span>}
                            <div className='text-center'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Subject'
                                    {
                                        ...register('subject', {
                                            required: 'Please enter a subject line',
                                        })
                                    }
                                />
                                <div className='line'></div>
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            {/* DESCRIPTION */}
                            {errors.messageDetails && <span className='error-message'>{errors.messageDetails.message}</span>}
                            <div className='text-center'>
                                <textarea
                                    type='text'
                                    className='form-control'
                                    placeholder='Message details...'
                                    {
                                        ...register('messageDetails', {
                                            required: 'Please provide message details',
                                        })
                                    }
                                />
                                <div className='line'></div>
                            </div>
                            <button className='btn-main-offer contact-btn' type='submit'>Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts