import {Form, Formik, Field} from 'formik'

const initialValues = {
    search: ''
};

const SearchBox = ({onFilter,}) => {
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onFilter}>
                <Form>
                    <label>Find contacts by name
                        <Field name='search'></Field>
                    </label>
                    
                </Form>
            </Formik>
        </div>
    );
}

export default SearchBox;