import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
};

/**
* The InputFields/other fields inside the <Fastfield/> will receive the props -> field, form and other props which we declared.
* The field is 4 props so that we can use the rest operator to pass the value
* The component inside <Field /> or <FastField/> https://formik.org/docs/api/field#component
*/

function InputField(props) {
    const { field, form,
        type, label, placeholder, disabled } = props;
    const { name } = field;

    return (
        <div>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                {/*<Input
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}

                    placeholder="Eg: Wow nature ..."
                ></Input> */}

                <Input
                    id={name}
                    {...field}

                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                ></Input>
            </FormGroup>
        </div>
    );
}

export default InputField;