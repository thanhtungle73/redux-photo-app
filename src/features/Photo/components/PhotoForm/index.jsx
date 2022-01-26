import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Formik } from 'formik';
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null
};

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label form="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Eg: Wow nature ..."></Input>
            </FormGroup>

            <FormGroup>
                <Label form="categoryId">Category</Label>
                <Select name="categoryId" id="titleId" placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}></Select>
            </FormGroup>

            <FormGroup>
                <Label form="categoryId">Photo</Label>
                <div><Button type="button" outline color="primary">Random a photo</Button></div>
                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful-background" />
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;