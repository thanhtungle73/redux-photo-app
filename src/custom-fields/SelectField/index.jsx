import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: []
};

//
// The SelectFields/other fields inside the <Fastfield/> will receive the props ->
// field, form and other props which we declared.
//
// The field is 4 props so that we can use the rest operator to pass the value
//
// The component inside < Field /> or < FastField /> ref link: https://formik.org/docs/api/field#component
//

function SelectField(props) {
    const { field, form,
        options, label, placeholder, disabled } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    // Find in the global.js list the label from the value which get when
    // selecting options -> set the value to render UI
    const selectedOption = options.find(option => option.value === value);

    // fake target in onChange event -> overide the default onChange of <FastField />
    const handleSelectedOptionChange = (selectedOption) => {
        // When no select -> selectedOption = null
        // Each option in PHOTO_CATEGORY_OPTIONS include the value and label
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        // fake event -> edit the target (event.target) in object event of
        // onChange events
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    return (
        <div>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}

                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}

                    disabled={disabled}
                    placeholder={placeholder}
                    options={options}
                    className={showError ? 'is-invalid' : ''}
                ></Select>

                <ErrorMessage name={name} component={FormFeedback} />
            </FormGroup>
        </div>
    );
}

export default SelectField;