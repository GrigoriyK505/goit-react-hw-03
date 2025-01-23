import { Field, Form, Formik } from 'formik';
import React from 'react';
import s from './ContactForm.module.css';


    
const ContactForm = ({ handleAddContact }) => {
    const initialValues = {
        name: '',
        number: '',
    };

    const handleSubmit = (values, actions) => {
        handleAddContact(values.name, values.number);
        actions.resetForm();
    };


    return (
        <section className={s.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
             >
                <Form className={s.form}>
                    <label>Name
                        <Field className={s.input} name="name"></Field>
                    </label>
                    <label>Number
                        <Field className={s.input} name="number"></Field>
                    </label>
                    <button className={s.button} type='submit'>Add contact</button>
                </Form>
            </Formik>
        </section>
    );
}

export default ContactForm;