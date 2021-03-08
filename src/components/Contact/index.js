import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Footer from '../Footer';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h2 className="contact-header">Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field-div">
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name"></input>
                </div>
                <div className="contact-field-div">
                    <label htmlFor="email">E-mail address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email"></input>
                </div>
                <div className="contact-field-div">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <Footer></Footer>
        </section>
    )
}

export default ContactForm;