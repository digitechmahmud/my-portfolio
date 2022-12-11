import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_whf38gp', 'template_aqjszpx', form.current, 'k3KoQLCSGAsm9-hPE')
            .then((result) => {
                console.log(result.text);
                toast.success("message sent");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full shadow-3xl bg-base-100">
                        <div className="card-body">
                            <h2 className='text-center font-bold text-3xl'>Contact Form</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-control">
                                    <label>Name</label>
                                    <input className="input input-bordered" type="text" name="user_name" required/>
                                </div>
                                <div className="form-control">
                                    <label>Email</label>
                                    <input className="input input-bordered" type="email" name="user_email" required/>
                                </div>
                                <div className="form-control">
                                    <label>Message</label>
                                    <textarea name="message" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">Submit</button>
                                </div>
                            </form>
                            <Toaster/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;