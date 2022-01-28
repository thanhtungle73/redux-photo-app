import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null
};
/* About Formik: 
    * Formik inside it is context and return the Form

    * 4 importance things of form fields are: name, onChange, onBlue, value

    * Reference link: https://formik.org/docs/overview#the-gist

    * Should use the <Form/> of Formik instead of reactstrap -> automatically hooks into Formik reset and submit -> ref: https://formik.org/docs/api/form

    * <Field/> & <FastField/> automatically hook up input to Formik -> https://formik.org/docs/api/field -> so we will use it to declare an control in Formik

    * <FastField> of current field will not re-render when editing other fields
*/
function PhotoForm(props) {

    // Required initial values - Remember do that when having new fields
    // If we put the initial value of a field as undefined (mark the field as un-controller component) -> The error will out when enter the value into the field
    // The value is recommended : '' or null
    const initialValues = {
        title: '',
        categoryId: null,
        photo: ''
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('This field is required.'),

        // initial value of categoryId is null -> should this field support null as well
        categoryId: Yup.number().required('This field is required').nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required.'),
            otherwise: Yup.string().notRequired()
        })
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => console.log('Submit: ', values)}
        >
            {formikProps => {
                // do something here...
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched })
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;


// <FastField /> is similar with <FormGroup/> below:
/* <FormGroup>
        <Label form="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature ..."></Input>
</FormGroup> */


{/* <FormGroup>
<Label form="categoryId">Category</Label>
<Select name="categoryId" id="categoryId" placeholder="What's your photo category?"
    options={PHOTO_CATEGORY_OPTIONS}></Select>
</FormGroup> */}

{/* <FormGroup>
<Label form="categoryId">Photo</Label>
<div><Button type="button" outline color="primary">Random a photo</Button></div>
<img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful-background" />
</FormGroup> */}
