import { Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css'

const initialValues = {
    name: '',
    number: '',
};
    
const ContactForm = () => {
    const handleSubmit = () => {
        useActionState.resetForm();
    };
    return (
        <section className={s.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <label>Name
                        <Field className={s.input} name="name"></Field>
                    </label>
                    <label>Number
                        <Field className={s.input} name="number"></Field>
                    </label>
                    <button>Add contact</button>
                </Form>
            </Formik>
        </section>
    );
}

export default ContactForm;